$(".burger").click(function(){
   $(".ham-nav").toggleClass("out");
});

$(".moveup").click(function() {
   $('html, body').animate({
       scrollTop: $("html").offset().top
   }, 100)});