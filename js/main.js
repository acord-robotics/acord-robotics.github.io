/*====================
	Version: 1.0
======================*/

/**************************************************************
	
	MAIN JS INDEXING
	
    	01. Wow Active 
    	02. Counter Up
    	03. Mainmenu Activation
    	03. Testimonial Horizontal Activation
    	04. Creative Portfolio    
    	05. Flexable Image Ativation        
    	06. Blog Activation
        07. Youtub Popup
    	08. Fixed Footer Area        
    	09. Slick Activation
    	10. Headroom For Sticky Header
    	11. Search Popup
    	12. Sidebar Mobile Menu  Active
        13. Option Demo
    	14. Minicart Activation        
    	15. Sidebar Mobile Menu
    	16. Hamberger Menu
        17. All Animation For Fade Up 
    	18. Countdown        
    	19. Countdown Time Circles
    	20. Radial Progress 02 
    	21. Draw Svg 
    	22. LightBox
    	23. Gallery Mesonry Activation
    	24. Image Justify Activation
        25. Portfolio Masonry Activation
    	26. Blog Masonry Activation        
    	27. Ajax Filter 
    	28. Tilt Hover Animation
    	29. Portfolio Type Hover
    	30. Portfolio Type Hover 02
    	31. Portfolio Type Hover 02
        32. Digital Broadsheets
    	33. Single Product Sticky Sidebar        
        34. Price Slider Active
        35. Preloadder 
        36. Firefly 
        37. Fullpage Scroll Animation 
        38. Scroll Up Activation
        39. Scroll Up COlor Change
        40. Background Marque
        41. Quantity
        42. Shipping Form Toggle
    	43. Payment Method Select        
    	44. Add To Cart Animation
        45. Scrollnavigation
        46. Player Js
        47. Background Image
        48. Scroll Revealm
        49. Svg Icon Draw
        50. Snowfall
        51. One Page Nav
	
	__ END MAIN JS INDEXING

***************************************************************/


(function ($) {
    'use strict';


    // Code Goes Here

    /*======================= 
    	01. Wow Active 
    ======================*/

    new WOW().init();


    /*==================================
    	02. Counter Up
    ===================================*/

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*=====================================
    	03. Mainmenu Activation
    =========================================*/


    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });


    /*==================================================
    	03. Testimonial Horizontal Activation
    ====================================================*/

    
    var swiper2 = $('.testimonial--horizontal--active');
    if (swiper2.length > 0) {
        var sliderView = 4;
        var ww = $(window).width();
        if (ww >= 1700) sliderView = 4;
        if (ww <= 1700) sliderView = 4;
        if (ww <= 1560) sliderView = 4;
        if (ww <= 1400) sliderView = 3;
        if (ww <= 1060) sliderView = 3;
        if (ww <= 800) sliderView = 2;
        if (ww <= 580) sliderView = 1;
        var swiper = new Swiper('.testimonial--horizontal--active', {
            spaceBetween: 20,
            autoplay: false,
            loop: true,
            slidesPerView: sliderView,
            loopedSlides: 9,
            autoplayDisableOnInteraction: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (e, t, i) {
                    var a = (100 / i) * t;
                    return a = a.toFixed(6), '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + '"></div></div>'
                }
            }
        });
        $(window).resize(function () {
            var ww = $(window).width();
            if (ww >= 1700) swiper.params.slidesPerView = 4;
            if (ww <= 1700) swiper.params.slidesPerView = 4;
            if (ww <= 1560) swiper.params.slidesPerView = 4;
            if (ww <= 1400) swiper.params.slidesPerView = 3;
            if (ww <= 1060) swiper.params.slidesPerView = 3;
            if (ww <= 800) swiper.params.slidesPerView = 3;
            if (ww <= 580) swiper.params.slidesPerView = 1;
        });

        $(window).trigger('resize');
    }


    /*==================================
    	04. Creative Portfolio
    ===================================*/

    var portfolioHorizontal = new Swiper('.porfolio-swip-horizontal', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'custom',

            renderCustom: function (e, t, i) {
                var a = (100 / i) * t;
                var n = t.toString(),
                    s = i.toString();
                return '<div class="fraction"><span class="current">' + (n = n.padStart(2, "0")) + '</span><span class="separator"> / </span><span class="total">' + (s = s.padStart(2, "0")) + "</span></div>" + '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + ' "></div></div>'
            },
        }
    });

    /*=====================================
    	05. Flexable Image Ativation
    ======================================*/

    
    /*=====================================
    	05. Flexable Image Ativation
    ======================================*/

    var flexaleImage = new Swiper('.flexable-carousle-activation', {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-btn-prev',
            prevEl: '.swiper-btn-next',
        },
    });

    var flexaleImage2 = new Swiper('.flexable-carousle-activation--2', {
        spaceBetween: 15,
        slidesPerView: 3,
        centeredSlides: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-btn-prev',
            prevEl: '.swiper-btn-next',
        },
    });



    var flexaleImage = new Swiper('.flexable-carousle-activation-two', {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-btn-prev',
            prevEl: '.swiper-btn-next',
        },
    });

    /* ==================================
    	06. Blog Activation
    =====================================*/

    $('.blog-slick-initial').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        easing: 'ease-in-out',
        dots: false,
        arrows: true,
        prevArrow: '<button class="blog-arrow-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="blog-arrow-next"><i class="fa fa-angle-right"></i></button>',
    });

    /*=========================== 
    	07. Youtub Popup 
    ============================*/

    $('.play__btn').yu2fvl();

    /*=========================== 
    	08. Fixed Footer Area
    ============================*/

    var $fixedFooter = $('.page-footer-wrapper');
    $('.all-wrapper').css({
        'margin-bottom': $fixedFooter.height() + 'px'
    });

    /*=========================== 
    	09. Slick Activation
    ============================*/


    (function ($) {
        'use strict';
        // Check if element exists
        $.fn.elExists = function () {
            return this.length > 0;
        };
        // Variables
        var $html = $('html'),
            $elementCarousel = $('.brook-element-carousel');

        function customPagingNumb($pagingOptions){
            var i = ($pagingOptions.currentSlide ? $pagingOptions.currentSlide : 0) + 1;
            var $current = i.toString().padStart(2, '0');
            var $total = $pagingOptions.slick.slideCount.toString().padStart(2, '0');
            $pagingOptions.selector.html('<span class="current">'+$current+'</span>/<span class="total">'+$total+'</span>');
        }

        if ($elementCarousel.elExists()) {
            var slickInstances = [];
            $elementCarousel.each(function (index, element) {
                var $this = $(this);
                var $parent = $(this).parent()[0];
                var $status = $($parent).find('.custom-paging');
                // Carousel Options
                var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
                var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                    $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                    $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                    $customPaging = $options.customPaging ? $options.customPaging : false,
                    $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                    $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                    $vertical = $options.vertical ? $options.vertical : false,
                    $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                    $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                    $fade = $options.fade ? $options.fade : false,
                    $autoplay = $options.autoplay ? $options.autoplay : false,
                    $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                    $swipe = $options.swipe ? $options.swipe : false,
                    $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,

                    $arrows = $options.arrows ? $options.arrows : false,
                    $dots = $options.dots ? $options.dots : false,
                    $infinite = $options.infinite ? $options.infinite : false,
                    $centerMode = $options.centerMode ? $options.centerMode : false,
                    $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                    $speed = $options.speed ? parseInt($options.speed) : 1000,
                    $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                    $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                    $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                    $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

                /*Responsive Variable, Array & Loops*/
                var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                    $responsiveSettingLength = $responsiveSetting.length,
                    $responsiveArray = [];
                for (var i = 0; i < $responsiveSettingLength; i++) {
                    $responsiveArray[i] = $responsiveSetting[i];

                }

                // Adding Class to instances
                $this.addClass('slick-carousel-' + index);
                $this.parent().find('.slick-dots').addClass('dots-' + index);
                $this.parent().find('.slick-btn').addClass('btn-' + index);

                if ($spaceBetween != 0) {
                    $this.addClass('slick-gutter-' + $spaceBetween);
                }
                if ($spaceBetween_xl != 0) {
                    $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
                }
                var $slideCount = null;
                $this.on('init', function(event, slick){
                    $slideCount = slick.slideCount;
                    if($slideCount <= $slidesToShow){
                        $this.children('.slick-dots').hide();	
                    }
                    if($customPaging == true){
                        var $current = '01';
                        var $total = $slideCount.toString().padStart(2, '0');
                        $status.html('<span class="current">'+$current+'</span>/<span class="total">'+$total+'</span>');
                    }
                });

                $this.slick({
                    slidesToShow: $slidesToShow,
                    slidesToScroll: $slidesToScroll,
                    asNavFor: $asNavFor,
                    autoplay: $autoplay,
                    autoplaySpeed: $autoplaySpeed,
                    speed: $speed,
                    infinite: $infinite,
                    arrows: $arrows,
                    dots: $dots,
                    vertical: $vertical,
                    focusOnSelect: $focusOnSelect,
                    centerMode: $centerMode,
                    centerPadding: $centerPadding,
                    fade: $fade,
                    adaptiveHeight: $adaptiveHeight,
                    prevArrow: $prevArrow,
                    nextArrow: $nextArrow,
                    responsive: $responsiveArray,
                });

                if ($isCustomArrow === true) {
                    $($customPrev).on('click', function () {
                        $this.slick('slickPrev');
                    });
                    $($customNext).on('click', function () {
                        $this.slick('slickNext');
                    });
                }
                $this.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                    var $pagingOptions = {
                        event: event,
                        slick: slick,
                        currentSlide: currentSlide,
                        nextSlide: nextSlide,
                        selector: $status
                    }
                    if($customPaging == true){
                        customPagingNumb($pagingOptions);
                    }
                });
            });

            // Updating the sliders in tab
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $elementCarousel.slick('setPosition');
            });
        }

    })(jQuery);



    /*==================================== 
    	10. Headroom For Sticky Header
    ======================================*/

    $('.headroom--sticky').headroom();


    /*================================ 
    	11. Search Popup
    ==================================*/

    var $html = $('html'),
        $demoOption = $('.demo-option-container'),
        $body = $('body');

    function searchClose() {
        $body.removeClass('page-search-popup-opened'), $html.css({
            overflow: ""
        })
    }


    $('.btn-search-click').on("click", function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('page-search-popup-opened'), $html.css({
                    overflow: "hidden"
                });
                var e = $('.brook-search-popup').find("form input[type='search']");
                setTimeout(function () {
                    e.focus()
                }, 500)
            }()
    });


    $('.search-close').on('click', function (e) {
        e.preventDefault();
        searchClose();
    });

    $('.brook-search-popup').on('click', function (e) {
        e.target === this && searchClose();
    });

    /* ===================================
    	12. Sidebar Mobile Menu  Active
    =====================================*/

    function menuClose() {
        $body.removeClass('popup-mobile-menu-wrapper'), $html.css({
            overflow: ""
        })
    };

    $('.popup-mobile-click').on('click', function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('popup-mobile-menu-wrapper'), $html.css({
                    overflow: "hidden"
                });
            }()
    });
    

    $('.mobile-close').on('click', function (e) {
        e.preventDefault();
        menuClose();
    });
    $('.popup-mobile-visiable').on('click', function (e) {
        e.target === this && menuClose();
    });

    /* =============================
    	13. Option Demo
    =================================*/

    $('.quick-option').on('click', function (e) {
        e.preventDefault(),
            function () {
                $demoOption.toggleClass('open')
            }()
    });

    /*================================ 
    	14. Minicart Activation
    ==================================*/

    $('.minicart-trigger').on('click', function (e) {
        e.stopPropagation();
        $(this).siblings('.shopping-cart').slideToggle('400');
        $(this).siblings('.shopping-cart').toggleClass('show');
        var $cartWrapper = $(this).parents('.mini-cart').siblings().children('.shopping-cart');
        $(this).parents('.mini-cart').siblings().children('.shopping-cart').slideUp('400');
    })

    function clickBody() {
        $('body').on('click', function (e) {
            $('.shopping-cart').slideUp('500');
        });
        $('.shopping-cart').on('click', function (e) {
            e.stopPropagation();
        })
    };
    clickBody();


    /* =============================
    	15. Sidebar Mobile Menu 
    ================================*/

    $('.object-custom-menu > li.has-mega-menu > a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.object-submenu').slideToggle('400');
        $(this).toggleClass('active').siblings('.object-submenu').toggleClass('is-visiable');
    })

    /* =====================
    	16. Hamberger Menu 
    =========================*/

    $('.hamberger-trigger').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').addClass('is-visiable');
    });

    $('.page-close').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').removeClass('is-visiable');
    });

    /* ===================================
    	17. All Animation For Fade Up 
    =======================================*/

    $(window).on('load', function () {
        function allAnimation() {
            $('.move-up').css('opacity', 0);
            $('.move-up').waypoint(function () {
                $('.move-up').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimation();

        function allAnimationx() {
            $('.move-up-x').css('opacity', 0);
            $('.move-up-x').waypoint(function () {
                $('.move-up-x').addClass('animate');
            }, {
                offset: '90%'
            });
        }
        allAnimationx();
    })

    /*============================== 
    	18. Countdown
    ===============================*/


    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> <p>Days</p></span></span> <span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> <p>Hours</p></span></span> <span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> <p>Minutes</p></span></span> <span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> <p>Seconds</p></span></span>'));
        });
    });

    /*==================================
    	19. Countdown Time Circles
    ======================================*/

    $('#DateCountdown').TimeCircles({
        "animation": "smooth",
        "bg_width": 0.60,
        "fg_width": 0.025,
        "circle_bg_color": "#eeeeee",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#0038E3",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#0038E3",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#0038E3",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#0038E3",
                "show": true
            }
        }
    });


    /* ============================
    	20. Radial Progress 02 
    ==============================*/

    $('.radial-progress').waypoint(function () {
        $('.radial-progress').easyPieChart({
            lineWidth: 5,
            scaleLength: 0,
            rotate: -45,
            trackColor: false,
            lineCap: 'square',
            size: 200
        });

    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });

    /* ========================
    	21. Draw Svg 
    ===========================*/

    var $svg = $('.my_svg_element').drawsvg({
        duration: 3000,
    });
    $svg.drawsvg('animate');


    /* ========================
    	22. LightBox
    ===========================*/

    lightGallery(document.getElementById('animated-thumbnials'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false
    });

    lightGallery(document.getElementById('animated-thumbnials2'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    });

    lightGallery(document.getElementById('animated-thumbnials3'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    });

    lightGallery(document.getElementById('animated-thumbnials4'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    });

    lightGallery(document.getElementById('animated-thumbnials5'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    });


    /*==================================
    	23. Gallery Mesonry Activation
    ===================================*/

    $('.masonry-activation').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.masonry-wrap').isotope({
            itemSelector: '.masonary-item',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });


    /*=====================================
    	24. Image Justify Activation
    =========================================*/

    $('#npgallery2').justifiedGallery({
        rowHeight: 320,
        maxRowHeight: null,
        margins: 2,
        border: 0,
        rel: 'npgallery2',
        lastRow: 'nojustify',
        captions: true,
        randomize: false,
        sizeRangeSuffixes: {
            lt100: '_t',
            lt240: '_m',
            lt320: '_n',
            lt500: '',
            lt640: '_z',
            lt1024: '_b'
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });

    ScrollReveal().reveal('.npreveal', {
        delay: 500,
        useDelay: 'onload',
        reset: true,

    })

    /*=====================================
    	25. Portfolio Masonry Activation
    =========================================*/

    $(window).load(function () {
        $('.bk-masonary-wrapper').imagesLoaded(function () {

            // filter items on button click
            $('.messonry-button , .mesonary-button-active').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // init Isotope
            var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.resizer',
                }
            });
        });
    })


    /*=====================================
    	26. Blog Masonry Activation
    =========================================*/

    $(window).load(function () {
        $('.bk-blog-masonry').imagesLoaded(function () {

            // filter items on button click
            $('.messonry-button').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.resizer',
                }
            });
        });
    })

    /* ========================
    	27. Ajax Filter 
    ===========================*/

    function itemToggler() {
        $('.ajax-filter-single').slice(0, 3).show();
        $('.ajax-filter').find(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(this).parents('.ajax-filter').find('.ajax-filter-single:hidden').slice(0, 3).slideDown();
            if ($('.ajax-filter-single:hidden').length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();

    function itemToggler2() {
        $('.ajax-filter-single2').slice(0, 3).show();
        $('.ajax-filter2').find(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(this).parents('.ajax-filter2').find('.ajax-filter-single2:hidden').slice(0, 6).slideDown();
            if ($('.ajax-filter-single2:hidden').length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler2();

    /* =============================
    	28. Tilt Hover Animation
    =================================*/

    $('.paralax-portfolio').tilt({
        maxTilt: 50,
        perspective: 1400,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        speed: 1200,
        glare: true,
        maxGlare: 0.3,
        scale: 1.04
    });


    /* ======================================
    	29. Portfolio Type Hover
    ========================================*/


    function portfolioTypeHOver() {
        $('.type-portfolio h3 a').on('mouseover', function () {
            var image = $(this).data('image');
            $('.type-portfolio h3 a').removeClass('active');
            $(this).addClass('active');
            $('.type-thumbnail-bg').toggleClass('active');
            $('.bg-thumb').css({
                'background-image': 'url("' + image + '")'
            });
        });
    }
    portfolioTypeHOver();


    /* ======================================
    	30. Portfolio Type Hover 02
    ========================================*/


    function portfolioTypeHOver2() {
        $('.type-portfolio2 h3 a').on('mouseover', function () {
            var image = $(this).data('image2');
            $('.type-portfolio2 h3 a').removeClass('active');
            $(this).addClass('active');
            $('.type-thumbnail-bg2').toggleClass('active');
            $('.bg-thumb').css({
                'background-image': 'url("' + image + '")'
            });
        });
    }
    portfolioTypeHOver2();


    /* ======================================
    	31. Portfolio Type Hover 02
    ========================================*/


    function architecture() {
        $('.architecture-service').on('mouseover', function () {
            var image = $(this).data('image3');
            $('.architecture-service').removeClass('active');
            $(this).addClass('active');

            $('.architecture-hover-image').toggleClass('active');
            $('.bg-thumb').css({
                'background-image': 'url("' + image + '")'
            });
        });
    }
    architecture();


    /* ======================================
    	32. Digital Broadsheets
    ========================================*/


    function digitalbroadsheets() {
        $('.type-portfolio3 h3 a').on('mouseover', function () {
            var image = $(this).data('image2');
            $('.type-portfolio3 h3 a').removeClass('active');
            $(this).addClass('active');
            $('.type-thumbnail-bg3').toggleClass('active');
            $('.bg-thumb').css({
                'background-image': 'url("' + image + '")'
            });
        });
    }
    digitalbroadsheets();


    /* ======================================
    	33. Single Product Sticky Sidebar 
    =========================================*/

    $('#is_stuck_inner').theiaStickySidebar({
        additionalMarginTop: 80
    });


    /*==============================
        34. Price Slider Active
    ================================*/

    $('#slider-range').slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function (event, ui) {
            $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    $('#amount').val('$' + $('#slider-range').slider('values', 0) +
        " - $" + $('#slider-range').slider('values', 1));

    /* ========================
        35. Preloadder   
    ===========================*/

    $(window).load(function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 200);
    })

    /* ========================
        36. Firefly   
    ===========================*/
    $(window).on('load', function () {
        if ($('.firefly').length) {
            $.firefly({
                color: '#fff',
                minPixel: 2,
                maxPixel: 3,
                total: 50,
                on: '.firefly',
                borderRadius: 50
            });
        }
    })

    /* =====================================
        37. Fullpage Scroll Animation   
    ======================================*/
    if ($('#fullpage').length) {
        $('#fullpage').fullpage({
            scrollBar: true,
            navigation: false,
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
        });
    }

    if ($('#fullpage3').length) {
        $('#fullpage3').fullpage({
            scrollBar: false,
            navigation: true,
            navigationPosition: 'right',
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
        });
    }

    if ($('#fullpage2').length) {
        var header = $('.br_header');
        $('#fullpage2').fullpage({
            scrollBar: false,
            navigation: true,
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            afterLoad: function () {
                var activeSetion = $('.fp-section.active');
                header.removeClass('light-logo--version black-logo--version').addClass(activeSetion
                    .data('skin') + '-logo--version');
            },
            onLeave: function (direction) {
                var activeSetion = $('.fp-section.active');

                if (direction == 'down') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                } else if (direction == 'up') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                };
            },
        });
    }


    if ($('#fullpage6').length) {
        var header = $('.br_header');
        $('#fullpage6').fullpage({
            scrollBar: false,
            navigation: true,
            loopBottom: true,
            sectionSelector: 'section',
            scrollingSpeed: 1000,
            responsiveWidth: 991,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            afterLoad: function () {
                var activeSetion = $('.fp-section.active');
                header.removeClass('light-logo--version black-logo--version').addClass(activeSetion
                    .data('skin') + '-logo--version');
            },
            onLeave: function (direction) {
                var activeSetion = $('.fp-section.active');

                if (direction == 'down') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                } else if (direction == 'up') {
                    header.removeClass('light-logo--version black-logo--version').addClass(
                        activeSetion.data('skin') + '-logo--version');
                };
            },
        });
    }


    /*============================== 
        38. Scroll Up Activation
    ================================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });

    /*================================= 
        39. Scroll Up COlor Change
    ==================================*/

    $('.rslide')
        .height('.rslide')
        .scrollie({
            scrollOffset: 0,
            scrollingInView: function (elem) {
                console.log(elem);
                var bgColor = elem.data('background');
                $('.rvbody').css('background-color', bgColor);
            }
        });


    /*=============================
        40. Background Marque 
    =============================*/

    $('.background-marque').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });

    $('.background-marque2').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });


    /*===============================
        41. Quantity
    =================================*/

    $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
    $('.pro-qty').append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*=============================== 
    	42. Shipping Form Toggle
    =================================*/

    $('[data-shipping]').on('click', function () {
        if ($('[data-shipping]:checked').length > 0) {
            $('#shipping-form').slideDown();
        } else {
            $('#shipping-form').slideUp();
        }
    })


    /*================================== 
    	43. Payment Method Select
    ====================================*/
    $('[name="payment-method"]').on('click', function () {
        var $value = $(this).attr('value');
        $('.single-method p').slideUp();
        $('[data-method="' + $value + '"]').slideDown();
    })


    /*===================================
    	44. Add To Cart Animation
    ====================================*/

    $('.add-to-cart').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('added')) {
            $(this).removeClass('added').find('i').removeClass('ti-check').addClass('ti-shopping-cart').siblings('span').text('add to cart');
        } else {
            $(this).addClass('added').find('i').addClass('ti-check').removeClass('ti-shopping-cart').siblings('span').text('added');
        }
    });


    /*===================================
    	45. Scrollnavigation
    ====================================*/


    $('scrollnavigation').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html.preview-html, body.preview-html').animate({
                scrollTop: $(hash).offset().top
            }, 5000, function () {
                window.location.hash = hash;
            });
        }
    });

    /*===================================
    	46. Player Js
    ====================================*/
    const player = new Plyr('#player');
    const player_1 = new Plyr('#player-1');
    const player_2 = new Plyr('#player-2');
    const player_3 = new Plyr('#player-3');
    const player_4 = new Plyr('#player-4');
    const player_5 = new Plyr('#player-5');
    const youtube_video = new Plyr('#youtube-video');
    const vimeo_player = new Plyr('#vimeo-player');

    /*===================================
        47. Background Image
    ====================================*/
    var $backgroundImage = $('.bg-image');
    $backgroundImage.each(function() {
        var $this = $(this),
            $bgImage = $this.data('bg');
        $this.css('background-image', 'url('+$bgImage+')');
    });

    /*===================================
        48. Scroll Reveal
    ====================================*/  
    ScrollReveal({
        scale: 0.85,
        duration: 1000,
    });
    ScrollReveal().reveal('.reveal-wrap .reveal-child', {
        delay: 500,
        useDelay: 'onload',
        reset: true,
    });
    ScrollReveal().reveal('.reveal-wrap:first-child .reveal-child', {
        delay: 0,
        interval: 80
    });


    /*===================================
        48. Coustom Audio Player
    ====================================*/ 
    $(function() {

        /* Audio List Tab For Section Background */
        $('.audio-list-tab').on('click', 'a', function () {
            var $this = $(this),
                $imageSrc = $this.data('image');
            $this.closest('.brook-coustom-audio-player-area').css('background-image', 'url('+ $imageSrc + ')');
        })

        $(".audio-track-area").each(function(index, el) {
            init($(this));
        });
    
        function init(card) {
            card.children(".audio-track").append('<button class="play"></button><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><path id="circle" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/></svg>');
    
            var audio = card.find("audio"),
                play = card.find('.play'),
                circle = card.find('#circle'),
                getCircle = circle.get(0),
                totalLength = getCircle.getTotalLength();
    
            circle.attr({
                    'stroke-dasharray': totalLength,
                    'stroke-dashoffset': totalLength
            });
    
            play.on('click', function() {
                if (audio[0].paused) {
                    $("audio").each(function(index, el) {
                        $("audio")[index].pause();
                    });
                    $(".track").removeClass('playing');
                    audio[0].play();
                    card.addClass('playing');
                } else {
                    audio[0].pause();
                    card.removeClass('playing');
                }
            });
    
            audio.on('timeupdate', function() {
                var currentTime = audio[0].currentTime,
                    maxduration = audio[0].duration,
                    calc = totalLength - ( currentTime / maxduration * totalLength );
    
                circle.attr('stroke-dashoffset', calc);
            });
    
            audio.on('ended', function() {
                card.removeClass('playing');
                circle.attr('stroke-dashoffset', totalLength);
            });
            
        }
    
    });

    /*===================================
        49. Svg Icon Draw
    ====================================*/ 
    var $svgIconBox = $('.single-svg-icon-box');
        $svgIconBox.each(function() {
            var $this = $(this),
                $svgIcon = $this.find('.svg-icon'),
                $id = $svgIcon.attr('id'),
                $icon = $svgIcon.data('svg-icon');
            var $vivus = new Vivus($id, { duration: 100, file: $icon });
            $this.on('mouseenter', function () {
                $vivus.reset().play();
            });
        });

    /*===================================
        50. Snowfall
    ====================================*/
        document.className  = "darkBg";
        $('.christmas-snow').snowfall({image :"img/flake.png", minSize: 10, maxSize:32});


    /*===================================
        51. One Page Nav
    ====================================*/
    $('.page_nav .onePageNavi').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        offsetHeight: 80,
    });
    

    // Map JS
    //     var data = [{
    //         lat: 23.76161,
    //         lon: 90.4357444,
    //         title: 'Title A1',
    //         html: '<h3>Content A1</h3>',
    //         zoom: 8,
    //         icon: 'http://www.google.com/mapfiles/markerA.png'
    //     },{
    //         lat: 23.7614699,
    //         lon: 90.4093081,
    //         title: 'Title B1',
    //         html: '<h3>Content B1</h3>',
    //         zoom: 8,
    //         icon: 'http://www.google.com/mapfiles/markerA.png'
    //     }
    // ];

    // new Maplace({
    //     locations: data,
    //     controls_type: 'list',
    //     controls_on_map: false
    // }).Load();

})(jQuery);
