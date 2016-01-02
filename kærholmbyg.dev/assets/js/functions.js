$( document ).ready(function() {

   // Navigation scroll
   $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      if(wScroll >= 200) {
         $("nav").addClass("scrolled");
      }else if(wScroll === 0) {
         $("nav").removeClass("scrolled");
      }
   });


   // Responsive Navigation
   $('.toggle-menu').on('click', function() {
      $('.nav-items').toggleClass('active');
      $(this).toggleClass('cross');
   });
   $(window).resize(function(){
     var wWidth = $(this).width();
     if( wWidth > 992) {
        $('.nav-items').removeClass('active');
        $('.toggle-menu').removeClass('cross');
     }
  });


   // Button Click
   $('.button').mousedown(function (e) {
      var target = e.target;
      var rect = target.getBoundingClientRect();
      var ripple = target.querySelector('.ripple');
      $(ripple).remove();
      ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
      target.appendChild(ripple);
      var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
      var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
      ripple.style.top = top + 'px';
      ripple.style.left = left + 'px';
      return false;
   });


   // Unslider config
   $(function() {
      $('.banner').unslider({
         speed: 300,               //  The speed to animate each slide (in milliseconds)
         delay: 4000,              //  The delay between slide animations (in milliseconds)
         complete: function() {},  //  A function that gets called after every slide animation
         keys: true,               //  Enable keyboard (left, right) arrow shortcuts
         dots: true,               //  Display dot navigation
         fluid: true              //  Support responsive design. May break non-responsive designs
      });
   });


});
