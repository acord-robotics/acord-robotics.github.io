(function ($) {
    "use strict";

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // custom nav trigger function for owl casousel
    function customTrigger(slideNext, slidePrev, targetSlider) {
        $(slideNext).on('click', function () {
            targetSlider.trigger('next.owl.carousel');
        });
        $(slidePrev).on('click', function () {
            targetSlider.trigger('prev.owl.carousel');
        });
    }

    /* MOBILE MENU JS*/
    function mobileMenu(triggerElem, dropdown) {
        var $dropDownTrigger = $(triggerElem + ' > a');

        $dropDownTrigger.append('<span class="lnr lnr-plus-circle"></span>');
        $dropDownTrigger.find('span').on('click', function (e) {
            e.preventDefault();
            $(this).parents(triggerElem).find(dropdown).slideToggle().parents(triggerElem).siblings().find(dropdown).slideUp();
        });
    }

    if (windowWidth < 767) {
        mobileMenu('.has_dropdown', '.dropdowns');
        mobileMenu('.has_megamenu', '.dropdown_megamenu');
    }


    $('body').scrollspy({ target: '#for_mobile' });


    /* offcanvas menu */
    $('.close_menu').on('click', function () {
        $(this).parent('.offcanvas-menu').addClass('closed');
    });

    /* filter menu reveal on click*/
    // $('.filter__menu_icon').on('click', function () {
    //     $('.filter_dropdown').toggleClass('active');
    // });

    /**/
    $('.menu_icon').on('click', function () {
        $(this).siblings('.offcanvas-menu').removeClass('closed');
    });

    // Click event to scroll to top
    var scrollTop = $('.go_top');
    scrollTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


    //  for mobile
    if (windowWidth <= 991) {
        var $slideNav = $('#for_mobile .nav');
        $slideNav.slideUp();
        $('.navbar-toggle').on('click', function () {
            $slideNav.slideToggle();
        })
    }


    /* setting background images */
    $('.bg_image_holder').each(function () {
        var $this = $(this);
        var imgLink = $this.children().attr('src');
        $this.css({
            "background-image": "url(" + imgLink + ")",
            "opacity": "1"
        }).children().attr('alt', imgLink);
    });

    /*COUNTER UP*/
    $('.count').counterUp({
        delay: 10,
        time: 1500
    });


    // jquery ui range
    var $priceFrom = $('.price-ranges .from'),
        $priceTo = $('.price-ranges .to');

    $(".price-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [30, 300],
        slide: function (event, ui) {
            $priceFrom.text("$" + ui.values[0]);
            $priceTo.text("$" + ui.values[1]);
        }
    });

    /* preloader js */
    $(window).load(function () {
        $('.preloader_inner').fadeOut(1000);
        $('.preloader-bg').delay('500').fadeOut(1000);
        $("body").removeClass("preload");
    });

    /* Reply comment area js goes here */
    var $replyForm = $('.reply-comment'),
        $replylink = $('.reply-link');

    $replyForm.hide();
    $replylink.on('click', function (e) {
        e.preventDefault();
        $(this).parents('.media').siblings('.reply-comment').toggle().find('textarea').focus();
    });

    /* COUNTDOWN INIT */
    $('.countdown').countdown('2020/11/25', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<li>%D <span>days</span></li>  '
            + '<li>%H <span>hours</span></li>  '
            + '<li>%M <span>minutes</span></li>  '
            + '<li>%S <span>seconds</span></li> '));
    });


    // accordion js
    var $accordionTrigger = $('.single_acco_title a');
    $accordionTrigger.on('click', function () {
        $accordionTrigger.not(this).removeClass('active').find('.lnr').not($(this).find('.lnr')).removeClass('lnr-chevron-up').addClass('lnr-chevron-down');
        $(this).toggleClass('active').find('.lnr').toggleClass('lnr-chevron-up lnr-chevron-down');
    });


    /* date picker js */
    $('.dattaPikkara').datepicker();


    // price selection js
    var $licenseText = $('.card--pricing2 .pricing-options li p'),
        $price = $('.card--pricing2 .price h1 span');
    $licenseText.slideUp();

    $('.card--pricing2 .custom-radio label').on('click', function () {
        var $this = $(this);
        $licenseText.slideUp(200);
        $this.parents('li').find('p').slideDown(200);
        $price.text($this.data('price') + '.00');
    });


    /*removing extra margin from the last child of item description-area */
    $('.tab-content-wrapper').length ? $('#product-details').children().children().last().css({ 'margin-bottom': 0, 'padding-bottom': 0 }) : $('#product-details').children().last().css({ 'margin-bottom': 0, 'padding-bottom': 0 });


    /* ADD CREDIT PAGE JS */
    var $amount = $('.amounts ul li');
    $amount.on('click', function () {
        $(this).find('p').addClass('selected');
        $(this).siblings($amount).find('p').removeClass('selected');
        $('.selected_price').val($(this).data('price'));
    });


    /* settng files name */
    $('.attachment_field').on('change', function (e) {
        var files = e.target.files;
        var attached = $('.attached');
        for (var i = 0; files.length > i; i++) {
            attached.append('<p>' + files[i].name + '<span class="lnr lnr-cross"></span></p>');
        }
    });


    $('.vote a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings('a').removeClass('active');
    });


    /* starring */
    var starring = $('.actions span.fa');
    starring.on('click', function () {
        $(this).toggleClass('fa-star-o fa-star');
    });


    /* remove uploaded files name when clicked on cross */
    $('.attached').on('click', 'p>span', function () {
        $(this).parent().remove();
    });


    /* followers following js */
    $('.user--following .btn').on('mouseenter', function () {
        $(this).text('unfollow');
    }).on('mouseleave', function () {
        $(this).text('following');
    });


    /* bar rating plugin installation */
    $('.give_rating').barrating({
        theme: 'fontawesome-stars'
    });


    /* custom slick slider navigation */
    function slickCustomTrigger(slider, prev, next) {
        prev.on('click', function () {
            slider.slick('slickNext');
        });
        next.on('click', function () {
            slider.slick('slickPrev');
        });
    }


    /* featured product slider */
    var $featuredProd = $('.prod-slider1');
    $featuredProd.owlCarousel({
        items: 1,
        autoplay: false,
        autoplaySpeed: 1000

    });
    customTrigger('.product__slider-nav .nav_right', '.product__slider-nav .nav_left', $featuredProd);


    var $featuredProd2 = $('.prod-slider2');
    $featuredProd2.owlCarousel({
        items: 1,
        autoplay: false
    });
    customTrigger('.prod_slide_prev', '.prod_slide_next', $featuredProd2);


    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class="lnr lnr-chevron-left"></span>',
        nextArrow: '<span class="lnr lnr-chevron-right"></span>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });


    /* newest product slider */
    var productSlider = $('.product_slider');
    productSlider.owlCarousel({
        items: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /* follow feed slider */
    customTrigger('.follow_feed_nav .nav_right', '.follow_feed_nav .nav_left', productSlider);


    /* partners slider */
    $('.partners').owlCarousel({
        items: 5,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });


    /* sponsors slider */
    $('.sponsores').owlCarousel({
        items: 4,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // this is product preview slider
    $('.item__preview-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumb-slider'
    });

    var thumbSlider = $('.thumb-slider');
    thumbSlider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        asNavFor: '.item__preview-slider',
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    // assign custom trigger for thubmSlider
    slickCustomTrigger(thumbSlider, $('.thumb-nav .nav-left'), $('.thumb-nav .nav-right'));


    /* trumbowyg init*/
    var trmbg_container = $('#trumbowyg-demo');
    if (trmbg_container.length) {
        trmbg_container.trumbowyg();
    }


    /* bootstrap tooltip activation */
    $('[data-toggle="tooltip"]').tooltip();

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
})(jQuery);