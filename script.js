$(document).ready(function(){
  $("#button1").click(function(){
    $("#a").fadeIn(3000);
    $("#b").fadeIn("slow");
    $("#c").fadeIn();
    $("#d").fadeIn("slow");
    $("#e").fadeIn(3000);
  });
  
  $("#button2").click(function(){
    $("#a").fadeOut(3000);
    $("#b").fadeOut("slow");
    $("#c").fadeOut();
    $("#d").fadeOut("slow");
    $("#e").fadeOut(3000);
  });
});