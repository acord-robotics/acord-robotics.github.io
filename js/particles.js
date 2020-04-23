/*Copyright (c) 2019 by K-T (https://codepen.io/K-T/pen/MWgGwyY)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


var RENDERER = {
	BASE_PARTICLE_COUNT : 5,
	WATCH_INTERVAL : 100,
	
	init : function(){
		this.setParameters();
		this.reconstructMethods();
		this.setup();
		this.bindEvent();
		this.render();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$container = $('#jsi-particle-container');
		this.$canvas = $('<canvas />');
		this.context = this.$canvas.appendTo(this.$container).get(0).getContext('2d');
		this.particles = [];
		this.watchIds = [];
	},
	setup : function(){
		this.particles.length = 0;
		this.watchIds.length = 0;
		this.width = this.$container.width();
		this.height = this.$container.height();
		this.gravity = {x : this.width / 2, y : this.height / 2, on : true, radius : 100, gravity : true};
		this.$canvas.attr({width : this.width, height : this.height});
		this.distance = Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height / 2, 2));
		this.createParticles();
	},
	reconstructMethods : function(){
		this.watchWindowSize = this.watchWindowSize.bind(this);
		this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
		this.render = this.render.bind(this);
	},
	createParticles : function(){
		for(var i = 0, count = (this.BASE_PARTICLE_COUNT * this.width / 500 * this.height / 500) | 0; i < count; i++){
			this.particles.push(new PARTICLE(this));
		}
	},
	watchWindowSize : function(){
		this.clearTimer();
		this.tmpWidth = this.$window.width();
		this.tmpHeight = this.$window.height();
		this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
	},
	clearTimer : function(){
		while(this.watchIds.length > 0){
			clearTimeout(this.watchIds.pop());
		}
	},
	jdugeToStopResize : function(){
		var width = this.$window.width(),
			height = this.$window.height(),
			stopped = (width == this.tmpWidth && height == this.tmpHeight);
			
		this.tmpWidth = width;
		this.tmpHeight = height;
		
		if(stopped){
			this.setup();
		}
	},
	bindEvent : function(){
		this.$window.on('resize', this.watchWindowSize);
		$(window).on('mousemove', this.controlForce.bind(this, true));
		this.$container.on('mouseleave', this.controlForce.bind(this, false));
	},
	controlForce : function(on, event){
		this.gravity.on = on;
		
		if(!on){
			return;
		}
		var offset = this.$container.offset();
		this.gravity.x = event.clientX - offset.left + this.$window.scrollLeft();
		this.gravity.y = event.clientY - offset.top + this.$window.scrollTop();
	},
	render : function(){
		requestAnimationFrame(this.render);
		
		var context = this.context;
		context.save();
		context.fillStyle = 'hsla(0, 0%, 0%, 0.3)';
		context.fillRect(0, 0, this.width, this.height);
		context.globalCompositeOperation = 'lighter';
		
		for(var i = 0, particles = this.particles, gravity = this.gravity, count = particles.length; i < count; i++){
			var particle = particles[i];
			
			for(var j = i + 1; j < count; j++){
				particle.checkForce(context, particles[j]);
			}
			particle.checkForce(context, gravity);
			particle.render(context);
		}
		context.restore();
	}
};
var PARTICLE = function(renderer){
	this.renderer = renderer;
	this.init();
};
PARTICLE.prototype = {
	THRESHOLD : 300,
	SPRING_AMOUNT : 0.001,
	LIMIT_RATE : 0.2,
	
	init : function(){
		this.radius = this.getRandomValue(10, 20);
		this.x = this.getRandomValue(-this.renderer.width * this.LIMIT_RATE, this.renderer.width * (1 + this.LIMIT_RATE)) | 0;
		this.y = this.getRandomValue(-this.renderer.width * this.LIMIT_RATE, this.renderer.height * (1 + this.LIMIT_RATE)) | 0;
		this.vx = this.getRandomValue(-3, 3);
		this.vy = this.getRandomValue(-3, 3);
		this.maxVelocity = this.getRandomValue(5, 10);
		this.ax = 0;
		this.ay = 0;
		this.gravity = false;
		this.transformShape();
	},
	getRandomValue : function(min, max){
		return min + (max - min) * Math.random();
	},
	transformShape : function(){
		var velocity = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
		this.scale = 1 - velocity / 15;
		this.hue = ((180 + velocity * 12) % 360) | 0;
	},
	checkForce : function(context, particle){
		if(particle.gravity && !particle.on){
			return;
		}
		var dx = particle.x - this.x,
			dy = particle.y - this.y,
			distance = Math.sqrt(dx * dx + dy * dy);
			
		if(distance > this.THRESHOLD * (particle.gravity ? 10 : 1)){
			return;
		}
		var rate = this.SPRING_AMOUNT / (this.radius + particle.radius);
		
		if(particle.gravity){
			var accelaration = Math.min(0.3, 50 / distance);
			this.ax = (dx > 0 ? accelaration : -accelaration);
			this.ay = (dy > 0 ? accelaration : -accelaration);
		}else{
			this.ax = dx * rate * particle.radius;
			this.ay = dy * rate * particle.radius;
			particle.ax = -dx * rate * this.radius;
			particle.ay = -dy * rate * this.radius;
		}
	},
	render : function(context){
		context.save();

		// 1ST OPTION - HSL stands for hue, saturation, and lightness.
		// context.fillStyle = 'hsl(41, 71%, 77%)';

		// 2ND OPTION - Random colors based on transformShape function
		// context.fillStyle = 'hsl(' + this.hue + ', 70%, 40%)';
		
		// 3RD OPTION - Specific color code used by default
		context.fillStyle = "#EAB543";

		context.translate(this.x, this.y);
		context.rotate(Math.atan2(this.vy, this.vx) + Math.PI / 2);
		context.scale(this.scale, 1);
		context.beginPath();
		context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
		context.fill();
		context.restore();
		
		this.x += this.vx;
		this.y += this.vy;
		this.vx += this.ax;
		this.vy += this.ay;
		// this.vx = Math.min(Math.max(this.vx, -this.maxVelocity), this.maxVelocity);
		// this.vy = Math.min(Math.max(this.vy, -this.maxVelocity), this.maxVelocity);
		
		if(this.x < -this.radius && this.vx < 0 || (this.x > this.renderer.width + this.radius) && this.vx > 0 || this.y < -this.radius && this.vy < 0 || (this.y > this.renderer.height + this.radius) && this.vy > 0){
			var theta = this.getRandomValue(0, Math.PI * 2),
				sin = Math.sin(theta),
				cos = Math.cos(theta),
				velocity = this.getRandomValue(-3, 3);
				
			this.x = -(this.renderer.distance + this.radius) * cos + this.renderer.width / 2;
			this.y = -(this.renderer.distance + this.radius) * sin + this.renderer.height / 2;
			this.vx = velocity * cos;
			this.vy = velocity * sin;
		}
		this.transformShape();
	}
};
$(function(){
	RENDERER.init();
});