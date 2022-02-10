$(".burger").click(function(){
   $(".ham-nav").toggleClass("out");
});

$(".moveup").click(function() {
   $('html, body').animate({
       scrollTop: $(".navigation").offset().top
   }, 100)});