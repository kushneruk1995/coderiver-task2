$(document).ready(function(){
  $('.accordion__link').click(function (e){
      e.preventDefault();
      if($(this).hasClass('accordion__link-is__active')) {
        $(this).removeClass('accordion__link-is__active');
        $(this).addClass('no__active');
        $(this).siblings('.accordion__content').slideUp(200);
        $(this).find('.accordion__icon').removeClass('active');
      } else {
        $(this).removeClass('accordion__link-no__active');
        $(this).addClass('accordion__link-is__active');
        $(this).find('.accordion__icon').addClass('active');
        $(this).siblings('.accordion__content').slideDown(200);
      }
    })
  });

$(".hamburger-icon").click(function() {
  $('.hamburger').toggleClass("hamburger-open");
  $('.wrapper__blur').toggleClass("wrapper__blur-open");
});

$(".hamburger__menu-list").click(function() {
  $(this).find('.hamburger__nav').toggleClass('open');
});
