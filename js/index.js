$(document).ready(function(){
    $(".bnner-btn-right").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    })
    $(".bnner-btn-right").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-right").click(function () {
      var info = $(".mac_name").html();
      if( info == "Intel"){
        //window.open("https://file-1307206075.file.myqcloud.com/chative/chative-desktop-mac-x64-latest.dmg");
        window.open("https://chative.com/d/chative-desktop-mac-x64-latest.dmg");
      }else{
        //window.open("https://file-1307206075.file.myqcloud.com/chative/chative-desktop-mac-arm64-latest.dmg");
        window.open("https://chative.com/d/chative-desktop-mac-arm64-latest.dmg");
      }
   
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
      return false;
    });
    $(".bnner-btn-right-desktop").click(function(){
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
    });
    $(".bnner-btn-left").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    });
    $(".bnner-btn-left").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-left").click(function () {
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
      // $(".dropdown-menu").show();
    });

    $('.dropdown-val').click(function(){
      $(".mac_name").html($(this).html());
      // var mac_name = $(this).html()+"1";
      // $('.dropdown-val').css({background:"#1E2329"});
      // $(this).css({background:"#001C4E"});
      // $('.dropdown-val').each(function(index,domEle){
      //   console.log(mac_name);
      //   if($(domEle).html() == mac_name){
      //     $(".dropdown-val:eq("+index+")").css({background:"#001C4E"});
      //   }else{
      //     $(".dropdown-val:eq("+index+")").css({background:"#1E2329"});
      //   }
      // })
    });
    $('.dropdown-val').mouseover(function(){
      $(this).css({color:"#FFFFFF","background":"linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #181A20"});
    });
    $('.dropdown-val').mouseout(function(){
      if($(this).html() == $(".mac_name").html()){
        $('.dropdown-val').css({background:"#1E2329"});
        $(this).css({background:"#001C4E"});
      }else{
        $(this).css({color:"#FFFFFF","background":"#1E2329"});
      }
    });


    $(".app_store").mouseover(function(){
      $(".qcode").css({"padding-bottom":"5px"});
      $(".app_store_q").show();
    });
    $(".app_store").mouseout(function(){
      $(".qcode").css({"padding-bottom":"0"});
      $(".app_store_q").hide();
    });
    $(".app_android").mouseover(function(){
      $(".qcode_android").css({"padding-bottom":"5px"});
      $(".app_android_q").show();
    });
    $(".app_android").mouseout(function(){
      $(".qcode_android").css({"padding-bottom":"0"});
      $(".app_android_q").hide();
    });
    $(".btn_linux_right").click(function(){
      $("#copy_info").select();
      document.execCommand("Copy");
    });
    $(".m1-chip").click(function(){
      window.open("https://chative.com/d/chative-desktop-mac-arm64-latest.dmg");
    });
    $(".intel-chip").click(function(){
      //window.open("https://chative.com/d/chative-desktop-mac-arm64-latest.dmg");
      window.open("https://chative.com/d/chative-desktop-mac-x64-latest.dmg");
    });
 
    // Detect OS version
    if (null != navigator.userAgent.match(/Intel Mac OS/)) {
        $(".mac_name").html("Intel");
    } else {
        $(".mac_name").html("M1");
    }
  });