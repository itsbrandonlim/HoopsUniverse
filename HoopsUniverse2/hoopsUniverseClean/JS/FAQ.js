$(document).ready(function(){
    $("dt").click(function(){

      if($(this).next("dd").hasClass("active")){
          //$(this).next().slideToggle("slow");
          $(this).next().slideToggle("slow")
          $(this).next("dd").removeClass("active")
          $(this).children("span").removeClass("garis-ilang").addClass("garis")
      }
      else{
        $(this).next().slideToggle("slow")
        $(this).next("dd").addClass("active")
        $(this).children("span").removeClass("garis").addClass("garis-ilang")
      }
    });
});
