/*! lifestyle-1.js | Huro | Css ninja 2020-2021 */
"use strict";

$(document).ready(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame;

  window.onload = function () {
    var cl = Cloud('cl', {
      radius_x: 200,
      radius_y: 200,
      radius_z: 200,
      radius_stop: 0.3
    });
  };

  function Cloud(id, opt) {
    'use strict';

    var sqrt = Math.sqrt,
        cos = Math.cos,
        sin = Math.sin; //Matrix

    function Matrix3(a) {
      this[1] = {
        1: a[0],
        2: a[1],
        3: a[2]
      };
      this[2] = {
        1: a[3],
        2: a[4],
        3: a[5]
      };
      this[3] = {
        1: a[6],
        2: a[7],
        3: a[8]
      };
    }

    var m3p = Matrix3.prototype;
    /*
    Returns rotation matrix[3x3]
        angle - angle of rotation(in radians)
        u - axis of rotation(Vector3)
     */

    Matrix3.Rotation = function (angle, u) {
      var sin_a = sin(angle),
          cos_a = cos(angle),
          mcos_a = 1 - cos_a,
          xy = u.x * u.y,
          xz = u.x * u.z,
          yz = u.y * u.z,
          x2 = u.x * u.x,
          y2 = u.y * u.y,
          z2 = u.z * u.z;
      return new Matrix3([cos_a + x2 * mcos_a, xy * mcos_a - u.z * sin_a, xz * mcos_a + u.y * sin_a, xy * mcos_a + u.z * sin_a, cos_a + y2 * mcos_a, yz * mcos_a - u.x * sin_a, xz * mcos_a - u.y * sin_a, yz * mcos_a + u.x * sin_a, cos_a + z2 * mcos_a]);
    };
    /*
    Matrix-vector multiplication
        v - vector(array)
     */


    m3p.mul_v = function (v) {
      var result = [],
          i;

      for (i = 1; i <= 3; ++i) {
        result[i - 1] = v[0] * this[i][1] + v[1] * this[i][2] + v[2] * this[i][3];
      }

      return result;
    };
    /*
    Rotates all points
        rot_m - rotation matrix(Matrix3)
        pts - array of vectors(array)
     */


    Matrix3.rotate_pts = function (rot_m, pts) {
      var l = pts.length,
          i = l;

      while (i--) {
        pts[i] = rot_m.mul_v(pts[i]);
      }

      return pts;
    }; //-------------------------------------------------------------------------------
    //Vector


    function Vector3(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z || 0;
    }

    var v3p = Vector3.prototype;
    /*
    Get length of vector
     */

    v3p.length = function () {
      var x2 = this.x * this.x,
          y2 = this.y * this.y,
          z2 = this.z * this.z;
      return sqrt(x2 + y2 + z2);
    };
    /*
    Cross product
        v - vector(Vector3)
     */


    v3p.cross = function (v) {
      var x = this.y * v.z - this.z * v.y,
          y = this.z * v.x - this.x * v.z,
          z = this.x * v.y - this.y * v.x;
      return new Vector3(x, y, z);
    };
    /*
    Returns normalized vector
     */


    v3p.normalized = function () {
      var l = this.length(),
          x = this.x / l,
          y = this.y / l,
          z = this.z / l;
      return new Vector3(x, y, z);
    }; //-------------------------------------------------------------------------------

    /*
    Get position of element on page
        elem - DOM element
     */


    function getOffset(elem) {
      if (elem.getBoundingClientRect) {
        // "right" way
        return getOffsetRect(elem);
      } else {
        // somehow works
        return getOffsetSum(elem);
      }
    }

    function getOffsetSum(elem) {
      var top = 0,
          left = 0;

      while (elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
      }

      return {
        top: top,
        left: left
      };
    }

    function getOffsetRect(elem) {
      var box = elem.getBoundingClientRect(),
          body = document.body,
          docElem = document.documentElement,
          scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
          scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
          clientTop = docElem.clientTop || body.clientTop || 0,
          clientLeft = docElem.clientLeft || body.clientLeft || 0,
          top = box.top + scrollTop - clientTop,
          left = box.left + scrollLeft - clientLeft;
      return {
        top: top | 0,
        left: left | 0
      };
    } //-------------------------------------------------------------------------------

    /*
    Default options
     */


    var def = {
      radius_x: 100,
      radius_y: 100,
      radius_z: 100,
      radius_stop: 0.2,
      scale_max: 1,
      scale_min: 0.5,
      scale_steps: 50,
      opacity_max: 1,
      opacity_min: 0.5,
      opacity_steps: 20
    };

    if (opt) {
      var i;

      for (i in def) {
        if (!opt[i]) {
          opt[i] = def[i];
        }
      }
    } else {
      opt = def;
    }

    var cloud = document.getElementById(id),
        cloud_coord = getOffset(cloud),
        cloud_width = cloud.offsetWidth,
        cloud_height = cloud.offsetHeight,
        max_v = sqrt(cloud_width * cloud_width + cloud_height * cloud_height) / 2,
        elements = cloud.querySelectorAll('.cloud-element'),
        num_of_el = elements.length,
        el_coord = pointsOnSphere(num_of_el, opt.radius_x, opt.radius_y, opt.radius_z);
    /*
    Auxiliary objects
     */

    var sc = {
      step: (opt.scale_max - opt.scale_min) / opt.scale_steps,
      z_step: 2 * opt.radius_z / opt.scale_steps,
      arr: new Array(num_of_el)
    },
        op = {
      step: (opt.opacity_max - opt.opacity_min) / opt.opacity_steps,
      z_step: 2 * opt.radius_z / opt.opacity_steps,
      arr: new Array(num_of_el)
    },
        stop = {
      x: opt.radius_stop * opt.radius_x,
      y: opt.radius_stop * opt.radius_y
    };
    /*
    Animation variables
     */

    var axis = new Vector3(0, 0, 1),
        angle = 0,
        v_l = 0,
        anim_id;
    /*
    Generates array of vectors(points), which are located at surface of a sphere(if xr == yr == zr)
        n - number of points
        xr - x-axis radius
        yr - y-axis radius
        zr - z-axis radius
     */

    function pointsOnSphere(n, xr, yr, zr) {
      var pts = [],
          inc = Math.PI * (3 - sqrt(5)),
          off = 2 / n,
          i,
          y,
          r,
          phi;

      for (i = 0; i < n; ++i) {
        y = i * off - 1 + off / 2;
        r = sqrt(1 - y * y);
        phi = i * inc;
        pts.push([cos(phi) * r * xr, y * yr, sin(phi) * r * zr]);
      }

      return pts;
    }
    /*
    Fills array(obj.arr) with scale-indexes
        obj - auxiliary object. Required properties: step, z_step, arr
        steps - number of discretization steps
        min - minimal value of scaling quantity
     */


    function scaling(obj, steps, min) {
      var min_z = -opt.radius_z,
          i,
          j;

      for (i = 0; i < num_of_el; ++i) {
        for (j = 0; j <= steps; ++j) {
          if (el_coord[i][2] <= min_z + j * obj.z_step) {
            obj.arr[i] = min + j * obj.step;
            break;
          }
        }
      }
    }

    function generateScale(i) {
      return 'scale(' + sc.arr[i] + ')';
    }

    function generateTranslate(i) {
      var el_w2 = elements[i].offsetWidth / 2,
          el_h2 = elements[i].offsetHeight / 2,
          w2 = cloud_width / 2,
          h2 = cloud_height / 2;
      return 'translate3d(' + (w2 + el_coord[i][0] - el_w2 | 0) + 'px,' + (h2 + el_coord[i][1] - el_h2 | 0) + 'px,' + el_coord[i][0] + 'px)';
    }
    /*
    Sets css transform property of element
        i - index of element
        value - setting value
     */


    function setTransform(i, value) {
      var el = elements[i];
      el.style.webkitTransform = value;
      el.style.mozTransform = value;
      el.style.msTransform = value;
      el.style.oTransform = value;
      el.style.transform = value;
    }
    /*
    Sets css opacity property of element
        i - index of element
     */


    function setOpacity(i) {
      var el = elements[i];
      el.style.opacity = op.arr[i];
    }
    /*
    Sets styles, which are needed to proper work of Cloud
     */


    function setRequiredStyles() {
      var i = num_of_el;
      cloud.style.overflow = 'hidden';

      while (i--) {
        elements[i].style.position = 'absolute';
      }
    }
    /*
    Draws Cloud
     */


    function draw() {
      var i = num_of_el,
          value;
      scaling(sc, opt.scale_steps, opt.scale_min);
      scaling(op, opt.opacity_steps, opt.opacity_min);

      while (i--) {
        value = generateTranslate(i) + ' ' + generateScale(i);
        setTransform(i, value);
        setOpacity(i);
      }
    }
    /*
    Recounts values of velocity and angle of rotation.
    Changes rotation axis if needed.
    Changes occur according to change of cursor position.
     */


    function recount(e) {
      var evt = e || window.event,
          x = evt.clientX - cloud_coord.left - cloud_width / 2,
          y = evt.clientY - cloud_coord.top - cloud_height / 2,
          cursor_v = new Vector3(x, y, 0);
      v_l = Math.abs(x) < stop.x && Math.abs(y) < stop.y ? 0 : cursor_v.length() / max_v;
      calculateAngle();
      axis = cursor_v.cross(new Vector3(0, 0, 1)).normalized();
    }
    /*
    Calculates angle of rotation
     */


    function calculateAngle() {
      angle = Math.PI * v_l / 90;
    }
    /*
    Forms rotation matrix and rotates all points.
     */


    function rotate() {
      var rm;

      if (angle) {
        rm = Matrix3.Rotation(angle, axis);
        el_coord = Matrix3.rotate_pts(rm, el_coord);
      }
    }
    /*
    Animates Cloud.
     */


    function redraw() {
      anim_id = requestAnimationFrame(redraw);
      rotate();
      draw();
    }
    /*
    Animates damping.
     */


    function damping() {
      anim_id = requestAnimationFrame(damping);

      if (v_l > 0.01) {
        v_l *= 0.96;
        calculateAngle();
      } else {
        cancelAnimationFrame(anim_id);
      }

      rotate();
      draw();
    } //go!


    setRequiredStyles();
    cloud.addEventListener('mousemove', recount, false);
    cloud.addEventListener('mouseleave', function () {
      cancelAnimationFrame(anim_id);
      damping();
    }, false);
    cloud.addEventListener('mouseenter', function () {
      cancelAnimationFrame(anim_id);
      redraw();
    }, false);
    draw();
  }
});