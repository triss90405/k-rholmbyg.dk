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


   // Image link Click
   $('.img-link').mousedown(function (e) {
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


});
