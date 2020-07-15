(function ($) {
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    function navbarFixed() {
        if ($(".header_area").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        }
    }
    navbarFixed();

    function offcanvasActivator() {
        if ($(".bar_menu").length) {
            $(".bar_menu").on("click", function () {
                $("#menu").toggleClass("show-menu");
            });
            $(".close_icon").on("click", function () {
                $("#menu").removeClass("show-menu");
            });
        }
    }
    offcanvasActivator();

    $(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (e) {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown(400);
    });
    $(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (e) {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp(500);
    });

    /*-------------------------------------------------------------------------------
	  mCustomScrollbar js
	-------------------------------------------------------------------------------*/
    $(window).on("load", function () {
        if ($(".mega_menu_two .scroll").length) {
            $(".mega_menu_two .scroll").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });

    /*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            animateClass: 'animated',
            mobile: true,
        }).init();
    }
    wowAnimation();

    /*-------------------------------------------------------------------------------
	  service_carousel js
	-------------------------------------------------------------------------------*/
    function serviceSlider() {
        var service_slider = $(".service_carousel");
        if (service_slider.length) {
            service_slider.owlCarousel({
                loop: true,
                margin: 15,
                items: 4,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: true,
                dots: false,
                stagePadding: 100,
                navText: [, '<i class="ti-arrow-left"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    578: {
                        items: 2,
                        stagePadding: 0,
                    },
                    992: {
                        items: 3,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    }
    serviceSlider();

    /*-------------------------------------------------------------------------------
	  about_img_slider js
	-------------------------------------------------------------------------------*/
    function aboutSlider() {
        var reviews_slider2 = $(".about_img_slider");
        if (reviews_slider2.length) {
            reviews_slider2.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
            });
        }
    }
    aboutSlider();

    /*-------------------------------------------------------------------------------
	  pos_slider js
	-------------------------------------------------------------------------------*/
    function posSlider() {
        var posS = $(".pos_slider");
        if (posS.length) {
            posS.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: false,
                autoplay: true,
                slideSpeed: 300,
                mouseDrag: false,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                responsiveClass: true,
            });
        }
    }
    posSlider();

    /*-------------------------------------------------------------------------------
	  feedback_slider js
	-------------------------------------------------------------------------------*/
    function feedbackSlider() {
        var feedback_slider = $(".feedback_slider");
        if (feedback_slider.length) {
            feedback_slider.owlCarousel({
                loop: true,
                margin: 25,
                items: 3,
                nav: false,
                center: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                        stagePadding: 0,
                    },
                    1199: {
                        items: 3,
                        stagePadding: 0,
                    },
                },
            });
        }
    }
    feedbackSlider();

    function EventSlider() {
        var event_slider = $(".event_team_slider");
        if (event_slider.length) {
            event_slider.owlCarousel({
                loop: true,
                margin: 25,
                items: 3,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    1199: {
                        items: 3,
                    },
                },
            });
        }
    }
    EventSlider();

    /*-------------------------------------------------------------------------------
	  feedback_slider two js
	-------------------------------------------------------------------------------*/
    function feedbackSlider_two() {
        var feedback_sliders = $("#fslider_two");
        if (feedback_sliders.length) {
            feedback_sliders.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: [
          '<i class="ti-angle-left"></i><i class="ti-angle-right"></i>',
        ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 2,
                    },
                },
            });
        }
    }
    feedbackSlider_two();

    /*-------------------------------------------------------------------------------
	  fslider_three js
	-------------------------------------------------------------------------------*/
    function feedbackSlider_three() {
        var feedback_sliders_three = $("#fslider_three");
        if (feedback_sliders_three.length) {
            feedback_sliders_three.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 3,
                    },
                },
            });
        }
    }
    feedbackSlider_three();

    /*-------------------------------------------------------------------------------
	  erp_testimonial_info js
	-------------------------------------------------------------------------------*/
    function erpTestimonial() {
        var erpT = $(".erp_testimonial_info");
        if (erpT.length) {
            erpT.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                dots: false,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 2,
                    },
                },
            });
        }
    }
    erpTestimonial();

    /*-------------------------------------------------------------------------------
	  testimonial_slider js
	-------------------------------------------------------------------------------*/
    function testimonialSlider() {
        var testimonialSlider = $(".testimonial_slider");
        if (testimonialSlider.length) {
            testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2500,
                autoplaySpeed: false,
                responsiveClass: true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navContainer: ".agency_testimonial_info",
                navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
            });
        }
    }
    testimonialSlider();

    /*-------------------------------------------------------------------------------
	  app_testimonial_slider js
	-------------------------------------------------------------------------------*/
    function app_testimonialSlider() {
        var app_testimonialSlider = $(".app_testimonial_slider");
        if (app_testimonialSlider.length) {
            app_testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                autoplaySpeed: true,
                responsiveClass: true,
                nav: true,
                dot: true,
                navText: [
          '<i class="ti-arrow-left"></i>',
          '<i class="ti-arrow-right"></i>',
        ],
                navContainer: ".nav_container",
            });
        }
    }
    app_testimonialSlider();

    /*-------------------------------------------------------------------------------
	  app_screenshot_slider js
	-------------------------------------------------------------------------------*/
    function appScreenshot() {
        var app_screenshotSlider = $(".app_screenshot_slider");
        if (app_screenshotSlider.length) {
            app_screenshotSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 5,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    776: {
                        items: 4,
                    },
                    1199: {
                        items: 5,
                    },
                },
            });
        }
    }
    appScreenshot();

    /*-------------------------------------------------------------------------------
	  pr_slider js
	-------------------------------------------------------------------------------*/
    function prslider() {
        var p_Slider = $(".pr_slider");
        if (p_Slider.length) {
            p_Slider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
                navContainer: ".pr_slider",
            });
        }
    }
    prslider();

    /*-------------------------------------------------------------------------------
	  app_testimonial_slider js
	-------------------------------------------------------------------------------*/
    function tslider() {
        var tSlider = $(".testimonial_slider_four");
        if (tSlider.length) {
            tSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: [
          '<i class="ti-angle-left"></i>',
          '<i class="ti-angle-right"></i>',
        ],
                navContainer: ".testimonial_title",
            });
        }
    }
    tslider();

    /*-------------------------------------------------------------------------------
	  case_studies_slider js
	-------------------------------------------------------------------------------*/
    function caseStudies() {
        var CSlider = $(".case_studies_slider");
        if (CSlider.length) {
            CSlider.owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    776: {
                        items: 3,
                    },
                    1199: {
                        items: 3,
                    },
                },
            });
        }
    }
    caseStudies();

    /*-------------------------------------------------------------------------------
	  app_testimonial_slider js
	-------------------------------------------------------------------------------*/
    function videoslider() {
        var dSlider = $(".digital_video_slider");
        if (dSlider.length) {
            dSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                center: true,
                autoplay: true,
                smartSpeed: 1000,
                stagePadding: 200,
                responsiveClass: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    575: {
                        items: 1,
                        stagePadding: 100,
                    },
                    768: {
                        items: 1,
                        stagePadding: 40,
                    },
                    992: {
                        items: 1,
                        stagePadding: 100,
                    },
                    1250: {
                        items: 1,
                        stagePadding: 200,
                    },
                },
            });
        }
    }
    videoslider();

    /*-------------------------------------------------------------------------------
	  Saasslider js
	-------------------------------------------------------------------------------*/
    function Saasslider() {
        var SSlider = $(".saas_banner_area_three");
        if (SSlider.length) {
            SSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                animateOut: "fadeOut",
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
            });
        }
    }
    Saasslider();

    /*-------------------------------------------------------------------------------
	  price tab js
	-------------------------------------------------------------------------------*/
    function tab_hover() {
        var tab = $(".price_tab");
        if ($(window).width() > 450) {
            if ($(tab).length > 0) {
                tab.append('<li class="hover_bg"></li>');
                if ($(".price_tab li a").hasClass("active_hover")) {
                    var pLeft = $(".price_tab li a.active_hover").position().left,
                        pWidth = $(".price_tab li a.active_hover").css("width");
                    $(".hover_bg").css({
                        left: pLeft,
                        width: pWidth,
                    });
                }
                $(".price_tab li a").on("click", function () {
                    $(".price_tab li a").removeClass("active_hover");
                    $(this).addClass("active_hover");
                    var pLeft = $(".price_tab li a.active_hover").position().left,
                        pWidth = $(".price_tab li a.active_hover").css("width");
                    $(".hover_bg").css({
                        left: pLeft,
                        width: pWidth,
                    });
                });
            }
        }
    }
    tab_hover();

    /*-------------------------------------------------------------------------------
	  selectpickers js
	-------------------------------------------------------------------------------*/
    if ($(".selectpickers").length > 0) {
        $(".selectpickers").niceSelect();
    }

    /*-------------------------------------------------------------------------------
	  pr_slider js
	-------------------------------------------------------------------------------*/
    function pr_slider() {
        var pr_image = $(".pr_image");
        if (pr_image.length) {
            pr_image.owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                dots: false,
                thumbs: true,
                thumbImage: true,
            });
        }
    }
    pr_slider();

    /*-------------------------------------------------------------------------------
	  cart js
	-------------------------------------------------------------------------------*/
    $(".ar_top").on("click", function () {
        var getID = $(this).next().attr("id");
        var result = document.getElementById(getID);
        var qty = result.value;
        $(".proceed_to_checkout .update-cart").removeAttr("disabled");
        if (!isNaN(qty)) {
            result.value++;
        } else {
            return false;
        }
    });

    $(".ar_down").on("click", function () {
        var getID = $(this).prev().attr("id");
        var result = document.getElementById(getID);
        var qty = result.value;
        $(".proceed_to_checkout .update-cart").removeAttr("disabled");
        if (!isNaN(qty) && qty > 0) {
            result.value--;
        } else {
            return false;
        }
    });

    /*-------------------------------------------------------------------------------
	  Portfolio isotope js
	-------------------------------------------------------------------------------*/
    function portfolioMasonry() {
        var portfolio = $("#work-portfolio");
        if (portfolio.length) {
            portfolio.imagesLoaded(function () {
                // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    // itemSelector: ".portfolio_item",
                    layoutMode: "masonry",
                    filter: "*",
                    animationOptions: {
                        duration: 1000,
                    },
                    transitionDuration: "0.5s",
                    masonry: {},
                });

                // Add isotope click function
                $("#portfolio_filter div").on("click", function () {
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    return false;
                });
            });
        }
    }
    portfolioMasonry();

    /*-------------------------------------------------------------------------------
	  jobFilter js
	-------------------------------------------------------------------------------*/
    function jobFilter() {
        var jobsfilter = $("#tab_filter");
        if (jobsfilter.length) {
            jobsfilter.imagesLoaded(function () {
                // images have loaded
                // Activate isotope in container
                jobsfilter.isotope({
                    itemSelector: ".item",
                });

                // Add isotope click function
                $("#job_filter div").on("click", function () {
                    $("#job_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    jobsfilter.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    return false;
                });
            });
        }
    }
    jobFilter();

    /*-------------------------------------------------------------------------------
	  blogMasonry js
	-------------------------------------------------------------------------------*/
    function blogMasonry() {
        var blog = $("#blog_masonry");
        if (blog.length) {
            blog.imagesLoaded(function () {
                blog.isotope({
                    layoutMode: "masonry",
                });
            });
        }
    }
    blogMasonry();

    /*-------------------------------------------------------------------------------
	  popup js
	-------------------------------------------------------------------------------*/
    function popupGallery() {
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function () {
                $(".img_popup,.image-link").magnificPopup({
                    type: "image",
                    tLoading: "Loading image #%curr%...",
                    removalDelay: 300,
                    mainClass: "mfp-with-zoom mfp-img-mobile",
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image,
                    },
                });
            });
        }
        if ($(".popup-youtube").length) {
            $(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: "iframe",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: "mfp-with-zoom mfp-img-mobile",
            });
            $(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        }
    }
    popupGallery();

    /*-------------------------------------------------------------------------------
	  mapBox js
	-------------------------------------------------------------------------------*/
    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
            el: "#mapBox",
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info,
            },
        });
    }

    /*-------------------------------------------------------------------------------
	  MAILCHIMP js
	-------------------------------------------------------------------------------*/
    if ($(".mailchimp").length > 0) {
        $(".mailchimp").ajaxChimp({
            callback: mailchimpCallback,
            url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0", //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }
    if ($(".mailchimp_two").length > 0) {
        $(".mailchimp_two").ajaxChimp({
            callback: mailchimpCallback,
            url: "https://droitthemes.us19.list-manage.com/subscribe/post?u=5d334217e146b083fe74171bf&amp;id=0e45662e8c", //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }
    $(".memail").on("focus", function () {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("keydown", function () {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("click", function () {
        $(".memail").val("");
    });

    function mailchimpCallback(resp) {
        if (resp.result === "success") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
            $(".mchimp-sucmessage").fadeOut(500);
        } else if (resp.result === "error") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
        }
    }

    /*-------------------------------------------------------------------------------
	  Parallax Effect js
	-------------------------------------------------------------------------------*/
    function parallaxEffect() {
        if ($(".parallax-effect,#apps_craft_animation").length) {
            $(".parallax-effect,#apps_craft_animation").parallax();
        }
    }
    parallaxEffect();

    /*-------------------------------------------------------------------------------
	  Counter js
	-------------------------------------------------------------------------------*/
    function counterUp() {
        if ($(".counter").length) {
            $(".counter").counterUp({
                delay: 1,
                time: 500,
            });
        }
    }

    counterUp();

    /*-------------------------------------------------------------------------------
	  progress bar js
	-------------------------------------------------------------------------------*/
    function circle_progress() {
        if ($(".circle").length) {
            $(".circle").each(function () {
                $(".circle").appear(
                    function () {
                        $(".circle").circleProgress({
                            startAngle: -14.1,
                            size: 200,
                            duration: 9000,
                            easing: "circleProgressEase",
                            emptyFill: "#f1f1fa ",
                            lineCap: "round",
                            thickness: 10,
                        });
                    }, {
                        triggerOnce: true,
                        offset: "bottom-in-view",
                    }
                );
            });
        }
    }
    circle_progress();

    /*-------------------------------------------------------------------------------
	  preloader js
	-------------------------------------------------------------------------------*/
    function loader() {
        $(window).on("load", function () {
            $("#ctn-preloader").addClass("loaded");
            // Una vez haya terminado el preloader aparezca el scroll

            if ($("#ctn-preloader").hasClass("loaded")) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $("#preloader")
                    .delay(900)
                    .queue(function () {
                        $(this).remove();
                    });
            }
        });
    }
    loader();

    /*-------------------------------------------------------------------------------
	  tooltip js
	-------------------------------------------------------------------------------*/
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    /*-------------------------------------------------------------------------------
	  Pricing Filter js
	-------------------------------------------------------------------------------*/
    if ($("#slider-range").length) {
        $("#slider-range").slider({
            range: true,
            min: 5,
            max: 150,
            values: [5, 100],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
        });
        $("#amount").val(
            "$" +
            $("#slider-range").slider("values", 0) +
            " - $" +
            $("#slider-range").slider("values", 1)
        );
    }

    /*-------------------------------------------------------------------------------
	  search js
	-------------------------------------------------------------------------------*/
    $(".search-btn").on("click", function () {
        $("body").addClass("open");
        setTimeout(function () {
            $(".search-input").focus();
        }, 500);
        return false;
    });
    $(".close_icon").on("click", function () {
        $("body").removeClass("open");
        return false;
    });

    /*-------------------------------------------------------------------------------
	  develor tab js
	-------------------------------------------------------------------------------*/
    if ($(".develor_tab li a").length > 0) {
        $(".develor_tab li a").click(function () {
            var tab_id = $(this).attr("data-tab");
            $(".tab_img").removeClass("active");
            $("#" + tab_id).addClass("active");
        });
    }

    /*-------------------------------------------------------------------------------
	  alert js
	-------------------------------------------------------------------------------*/
    $(".alert_close").on("click", function (e) {
        $(this).parent().hide();
    });

    /*-------------------------------------------------------------------------------
	  active dropdown
	-------------------------------------------------------------------------------*/
    function active_dropdown() {
        if ($(window).width() < 992) {
            $(".menu li.submenu > a").on("click", function (event) {
                event.preventDefault();
                $(this).parent().find("ul").first().toggle(700);
                $(this).parent().siblings().find("ul").hide(700);
            });
        }
    }
    active_dropdown();

    /*-------------------------------------------------------------------------------
	  hamberger menu
	-------------------------------------------------------------------------------*/
    function hamberger_menu() {
        if ($(".burger_menu").length) {
            $(".burger_menu").on("click", function () {
                $(this).toggleClass("open");
                $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
            });
            $(".close, .click-capture").on("click", function () {
                $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
            });
        }
    }
    hamberger_menu();

    /*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/
    if ($(".pagepiling").length > 0) {
        $(".pagepiling").pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            navigation: {
                position: "right_position",
            },
        });
        $.fn.pagepiling.setAllowScrolling(false);
    }

    function ppTestislider() {
        var PSlider = $(".pp_testimonial_slider");
        if (PSlider.length) {
            PSlider.slick({
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed: 1000,
                vertical: true,
                dots: false,
                arrows: true,
                prevArrow: ".prev",
                nextArrow: ".next",
            });
        }
    }
    ppTestislider();
    
    var heading = $(".typed");
    if(heading.length){
        heading.typed({
            strings: ["Startups", "Business", "Agencies"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            typeSpeed: 100,
            startDelay: 500,
            backSpeed: 100,
            backDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });
    }
    
    $('.slick.marquee').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        pauseOnHover:true,
        buttons: false
    });
    
    function slider(){
        $('.utility_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
            arrows: false,
            dots: false,
            speed: 1000,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                }
            ]
        })
    }
    slider();
    
    function sliderTwo(){
        $('.shop_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        })
    }
    sliderTwo();
    
    function BlogSlider(){
        $('.blog_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false,
            cssEase: 'linear',
            rows: 0,
            fade: true,
            infinite: true,
            prevArrow: ('.prev'),
            nextArrow: ('.next'),
        })
    }
    BlogSlider();
    
    function portfolioSlider(){
        $('.portfolio_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrow: true,
            centerMode: true,
            centerPadding: '450px',
            speed: 800,
            autoplay: true,
            infinite: true,
            prevArrow: ('.prevs'),
            nextArrow: ('.nexts'),
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '250px',
                    }
            },
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '150px',
                    }
            },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '50px',
                    }
            }
            ]
        })
    }
    portfolioSlider();
    
    
    function portfolioSliderTwo(){
        $('.portfolio_slider_two').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrow: false,
            centerMode: true,
            centerPadding: '200px',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '150px',
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                }
            ]
        })
    }
    portfolioSliderTwo();
    
    $('#testimonial_demo_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrow: true,
        centerMode: true,
        centerPadding: '400px',
        speed: 1000,
        autoplay: true,
        infinite: true,
        lazyLoad:'ondemand',
        pauseOnHover:true,
        prevArrow: ('.tprevs'),
        nextArrow: ('.tnexts'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '400px',
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            }
        ]
    })
    
    /*---------------navbar js ---------------*/
    $('#landing_page ul li a,.scrolls,.menu_top').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('#landing_page ul .nav-item:not(.dropdown) .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
})(jQuery);