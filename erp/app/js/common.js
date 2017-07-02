$(document).ready(function(){
  $('.header__menu-button').click(function(){
    $('.main__navbar').toggleClass('hidden-xs');
  });

  $('#button-1').click(function(){
    $('#solution-1').slideToggle();
  });
  $('#button-2').click(function(){
    $('#solution-2').slideToggle();
  });
  $('#button-3').click(function(){
    $('#solution-3').slideToggle();
  });
  $('#button-4').click(function(){
    $('#solution-4').slideToggle();
  });
  $('#button-5').click(function(){
    $('#solution-5').slideToggle();
  });
  $('#button-6').click(function(){
    $('#solution-6').slideToggle();
  });
  $('#button-7').click(function(){
    $('#solution-7').slideToggle();
  });
  $('#button-8').click(function(){
    $('#solution-8').slideToggle();
  });
  $('#button-9').click(function(){
    $('#solution-9').slideToggle();
  });

  var flag=0;
  $('.solutions__load-button').click(function(){
    if (flag==0){
      $('.solutions__hidden-1').removeClass('hidden-xs');
      flag=1;
    }
    else {
      $('.solutions__hidden-2').removeClass('hidden-xs');
      $('.solutions__load-button').addClass('hidden')
    }
  });

  var $menu = $(".menu--hidden");
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 100 && $menu.hasClass("hidden") ){
      $menu.removeClass("hidden").addClass("fixed");
    } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("hidden");
    }
  });

  $('.stages__item-1').click(function(){
    $('.stages__open').hide();
    $('.stages__item').removeClass('stages__item--active');
    $('.stages__item-1').addClass('stages__item--active');
    $('.stages__open-1').show();
  });
  $('.stages__item-2').click(function(){
    $('.stages__open').hide();
    $('.stages__item').removeClass('stages__item--active');
    $('.stages__item-2').addClass('stages__item--active');
    $('.stages__open-2').show();
  });
  $('.stages__item-3').click(function(){
    $('.stages__open').hide();
    $('.stages__item').removeClass('stages__item--active');
    $('.stages__item-3').addClass('stages__item--active');
    $('.stages__open-3').show();
  });
  $('.stages__item-4').click(function(){
    $('.stages__open').hide();
    $('.stages__item').removeClass('stages__item--active');
    $('.stages__item-4').addClass('stages__item--active');
    $('.stages__open-4').show();
  });
  $('.stages__item-5').click(function(){
    $('.stages__open').hide();
    $('.stages__item').removeClass('stages__item--active');
    $('.stages__item-5').addClass('stages__item--active');
    $('.stages__open-5').show();
  });


  $('.stages__item-1').click(function(){
    $('.stages__mobile-1').slideToggle();
  });
  $('.stages__item-2').click(function(){
    $('.stages__mobile-2').slideToggle();
  });
  $('.stages__item-3').click(function(){
    $('.stages__mobile-3').slideToggle();
  });
  $('.stages__item-4').click(function(){
    $('.stages__mobile-4').slideToggle();
  });
  $('.stages__item-5').click(function(){
    $('.stages__mobile-5').slideToggle();
  });

  $('.content__button').click(function(){
    $('.popup').fadeIn();
  });
  $('.whatif__button').click(function(){
    $('.popup').fadeIn();
  });
  $('.popup__close-button').click(function(){
    $('.popup').fadeOut();
  });
  $('.popup__button').click(function(){
    $('.popup').fadeOut();
  });
});
