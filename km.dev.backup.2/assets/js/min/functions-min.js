$(document).ready(function(){$(window).scroll(function(){var e=$(this).scrollTop();e>=200?$("nav").addClass("scrolled"):0===e&&$("nav").removeClass("scrolled")}),$(".button").mousedown(function(e){var t=e.target,o=t.getBoundingClientRect(),l=t.querySelector(".ripple");$(l).remove(),l=document.createElement("span"),l.className="ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",t.appendChild(l);var n=e.pageY-o.top-l.offsetHeight/2-document.body.scrollTop,r=e.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft;return l.style.top=n+"px",l.style.left=r+"px",!1}),$(".img-link").mousedown(function(e){var t=e.target,o=t.getBoundingClientRect(),l=t.querySelector(".ripple");$(l).remove(),l=document.createElement("span"),l.className="ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",t.appendChild(l);var n=e.pageY-o.top-l.offsetHeight/2-document.body.scrollTop,r=e.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft;return l.style.top=n+"px",l.style.left=r+"px",!1})});