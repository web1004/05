$(document).ready(function(){

    //첫번째는 컬러이미지 처음에 보이게 함
    $(".wireframe ul li:first").find("a img").attr({"src":"image/prototype1.jpg"}).css({"border-radius":"20px","width":"182px","height":"378px"});


    //오버시 컬러이미지로 변경하기
    $(".wireframe ul li").hover(function(){
      //다른거에 오버시 첫번때 컬러이미지 흑백으로...
      $(".wireframe ul li:first").find("a img").attr({"src":"image/wireframe1.png"}).css({"border-radius":"0px","width":"195px","height":"389px"});

      path=$(this).find("a").attr("href");
      $(this).find("a img").attr({"src":path}).css({"border-radius":"20px","width":"182px","height":"378px"});

    },function(){
      numm=$(this).index()+1; 
      $(this).find("a img").attr({"src":"image/wireframe"+numm+".png"}).css({"border-radius":"0px","width":"195px","height":"389px"});

    });


    //목록 전체영역을 나갔을때는 첫번째 이미지 컬러로 보이고 프레임 첫번째로 이동하기
    $(".mleft").mouseleave(function(){
      $(".frame").stop(true,true).animate({top:"42px",left:"20px"},500);
      $(".frame_in").stop(true,true).animate({top:"38px",left:"20px"},500);
      $(".wireframe ul li:first").find("a img").attr({"src":"image/prototype1.jpg"}).css({"border-radius":"20px","width":"182px","height":"378px"});
    });


    //각 화면별 프레임 움직이기
    $(".wireframe>ul>li:nth-child(1)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"42px",left:"20px"},500);
      $(".frame_in").stop(true,true).animate({top:"38px",left:"20px"},500);
    });

    $(".wireframe>ul>li:nth-child(2)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"42px",left:"235px"},500);
      $(".frame_in").stop(true,true).animate({top:"38px",left:"235px"},500);
    });

    $(".wireframe>ul>li:nth-child(3)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"42px",left:"450px"},500);
      $(".frame_in").stop(true,true).animate({top:"38px",left:"450px"},500);
    });

    $(".wireframe>ul>li:nth-child(4)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"42px",left:"665px"},500);
      $(".frame_in").stop(true,true).animate({top:"38px",left:"665px"},500);
    });

    $(".wireframe>ul>li:nth-child(5)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"450px",left:"20px"},500);
      $(".frame_in").stop(true,true).animate({top:"449px",left:"20px"},500);
    });

    $(".wireframe>ul>li:nth-child(6)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"450px",left:"235px"},500);
      $(".frame_in").stop(true,true).animate({top:"449px",left:"235px"},500);
    });

    $(".wireframe>ul>li:nth-child(7)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"450px",left:"450px"},500);
      $(".frame_in").stop(true,true).animate({top:"449px",left:"450px"},500);
    });

    $(".wireframe>ul>li:nth-child(8)").mouseenter(function(){
      $(".frame").stop(true,true).animate({top:"450px",left:"665px"},500);
      $(".frame_in").stop(true,true).animate({top:"449px",left:"665px"},500);
    });

});