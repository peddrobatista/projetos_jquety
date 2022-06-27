$(document).ready(function(){
    //função que vai ler e executar ação no botão
  $("#btn-1").click(function(){
    $("p").hide();
    $("#test").hide();
    $(".test").hide();
  });
  $("#btn-2").click(function(){
    $(".content-text-1").hide(1000);
  });
  $("#btn-3").click(function(){
    $(".content-text-2").hide(1000);
  });
  $("#btn-4").click(function(){
    $(".content-text-3").toggle(500);
  });
});