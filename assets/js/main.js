$(function () {

  // Mobile burger menu
  $('#burgerBtn').on('click', function () {
    $('#mobileMenu').slideToggle(180);
  });

  // Callback modal
  function openModal() {
    $('#callbackModal').removeClass('hidden').addClass('flex');
    $('body').css('overflow', 'hidden');
  }
  function closeModal() {
    $('#callbackModal').addClass('hidden').removeClass('flex');
    $('body').css('overflow', '');
  }

  $('#openCallback, #openCallback2, #openCallback3').on('click', openModal);
  $('#closeCallback').on('click', closeModal);
  $('#callbackModal').on('click', function (e) {
    if (e.target === this) closeModal();
  });
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Callback form submit (demo only, no backend)
  $('#callbackForm').on('submit', function (e) {
    e.preventDefault();
    $(this).slideUp(150, function () {
      $('#callbackSuccess').removeClass('hidden');
    });
    setTimeout(function () {
      closeModal();
      $('#callbackForm')[0].reset();
      $('#callbackForm').show();
      $('#callbackSuccess').addClass('hidden');
    }, 2500);
  });

  // Smooth scroll for in-page anchors
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.length > 1 && $(target).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 90 }, 500);
      $('#mobileMenu').slideUp(150);
    }
  });

  // Scroll-to-top button
  var $scrollTop = $('#scrollTop');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
      $scrollTop.fadeIn(150).css('display', 'flex');
    } else {
      $scrollTop.fadeOut(150);
    }
  });
  $scrollTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  // Simple search filter -> scroll to categories on enter
  $('#searchInput').on('keypress', function (e) {
    if (e.which === 13) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#categories').offset().top - 90 }, 500);
    }
  });

});
