$(".burger").click(function(){
   $(".ham-nav").toggleClass("out");
});

$(".moveup").click(function() {
   $('html, body').animate({
       scrollTop: $("html").offset().top
   }, 100)});

   $('.lsp_btn').click(function() {
      window.location = "https://awiatros.github.io/UX_UI_HW_20/" + this.id;
   });