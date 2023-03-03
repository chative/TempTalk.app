$(document).ready(function(){
    $(".bnner-btn-right").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    })
    $(".bnner-btn-right").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-right").click(function () {
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
      return false;
    });
    $(".bnner-btn-left").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    });
    $(".bnner-btn-left").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-left").click(function () {
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
    });
    $('.dropdown-val').click(function(){
      $(".mac_name").html($(this).html());
      $('.dropdown-val').css({background:"#1E2329"});
      $(this).css({background:"#001C4E"});
      return false;
    });
    $('.dropdown-val').mouseout(function(){
      $(this).css({color:"#FFFFFF"});
    });
    $(".app_store").mouseover(function(){
      $(".qcode").css({"padding-bottom":"5px"});
      $(".app_store_q").show();
    });
    $(".app_store").mouseout(function(){
      $(".qcode").css({"padding-bottom":"0"});
      $(".app_store_q").hide();
    });

  });