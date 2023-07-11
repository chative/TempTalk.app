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

    $(".bnner-btn-right").click(function () {


      if (null != navigator.userAgent.match(/Android/)) {
        //$(".bnner-btn-right").html("Download APK");
        $(".bnner-btn-right").html("Install");
        window.open("https://play.google.com/store/apps/details?id=org.difft.chative&pli=1");
      } else {
        window.open("https://apps.apple.com/us/app/chative-messenger/id6443719300");
      }
     
      return false;
    });
    // $(".navbar-toggle").click(function(){
    //     console.log("ccc");
    //     $(this).css({background:"background: linear-gradient(0deg, rgba(77, 231, 220, 0.05), rgba(77, 231, 220, 0.05)), #FFFFFF;"});
    // });
    // Detect OS version
    if (null != navigator.userAgent.match(/Android/)) {
      $(".bnner-btn-right").html("Install");
        console.log(navigator.userAgent);
    } else {
      $(".bnner-btn-right").html("Install on App store");
    }

  });