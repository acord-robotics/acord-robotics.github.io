$( document ).ready(function() {

    // animsition
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 2000,
        outDuration: 1000,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });
    
    // Scrollspy 
    $('a[href*=#]').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 0;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 800);
                return false;
            }
        }
    });

    // Active Nav Link
    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // burger button
    $('.burger').click(function () {
        if (!$('.burger').hasClass('cross'))
            $('.burger').addClass('cross');
        else
            $('.burger').removeClass('cross');
    });

    // resize
    $('.grid-item').height($('.grid-item').width() / 1);

    $('.grid').resize(function () {
        $('.grid-item').height($('.grid-item').width() / 1);
    });

    var height = $('.about-box-text').height();
    $('.about-box-video').height(height);

    // call popup
    $(".popup").on('click', function () {
        $(".popup").removeClass("active-popup");
        $(".popup").addClass("n-active-popup");
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        horizontalOrder: true,
        masonry: {
            horizontalOrder: true,
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('.filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.filter').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // gallery
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function () {
            console.log('Requested for showing');
        })
        .on('shown.simplelightbox', function () {
            console.log('Shown');
        })
        .on('close.simplelightbox', function () {
            console.log('Requested for closing');
        })
        .on('closed.simplelightbox', function () {
            console.log('Closed');
        })
        .on('change.simplelightbox', function () {
            console.log('Requested for change');
        })
        .on('next.simplelightbox', function () {
            console.log('Requested for next');
        })
        .on('prev.simplelightbox', function () {
            console.log('Requested for prev');
        })
        .on('nextImageLoaded.simplelightbox', function () {
            console.log('Next image loaded');
        })
        .on('prevImageLoaded.simplelightbox', function () {
            console.log('Prev image loaded');
        })
        .on('changed.simplelightbox', function () {
            console.log('Image changed');
        })
        .on('nextDone.simplelightbox', function () {
            console.log('Image changed to next');
        })
        .on('prevDone.simplelightbox', function () {
            console.log('Image changed to prev');
        })
        .on('error.simplelightbox', function (e) {
            console.log('No image found, go to the next/prev');
            console.log(e);
        });

    $(document).on('click', '[data-lightbox]', lity);

    // testimonial slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        smartSpeed: 500,
        autoplay: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                autoplay: false,
                items: 1
            },
            600: {
                autoplay: false,
                items: 2
            },
            1000: {
                autoplay: false,
                items: 3
            }
        }
    });

    // brands slider
    $('.brands-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});
