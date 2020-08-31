(function($) {
  "use strict";
    //dark and light theme trigger 
    var checkbox = document.querySelector('input[name=mode]');
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
      }
    })
    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000)
    }
  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });
  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
  // Initiate venobox (lightbox feature used in portofilo)
  $('.venobox').venobox({
    titleBackground: 'transparent',
    share: ['facebook', 'twitter', 'linkedin']
  });
  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  return false;
})(jQuery);