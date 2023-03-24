$(function(){
    // 예매안내
    $(".gdjion dd").hide();

    $(".gdjion dt").click( function(){  

    if(  $(this).next().css("display") == "none" ){  

        $(".gdjion dd").slideUp("fast");
        $(this).next().slideDown("fast");

        }else{
            $(".gdjion dd").slideUp("fast");
            }
    });

    // 입장안내
    $(".gdcome1 dd").hide();

    $(".gdcome1 dt").click( function(){  

    if(  $(this).next().css("display") == "none" ){  

        $(".gdcome1 dd").slideUp("fast");
        $(this).next().slideDown("fast");

        }else{
            $(".gdcome1 dd").slideUp("fast");
            }
    });

    // 반입가능물품
    $(".gdcome2 dd").hide();

    $(".gdcome2 dt").click( function(){  

    if(  $(this).next().css("display") == "none" ){  

        $(".gdcome2 dd").slideUp("fast");
        $(this).next().slideDown("fast");

        }else{
            $(".gdcome2 dd").slideUp("fast");
            }
    });

    // 관람안내
    $(".gdwatch1 dd").hide();

    $(".gdwatch1 dt").click( function(){  

    if(  $(this).next().css("display") == "none" ){  

        $(".gdwatch1 dd").slideUp("fast");
        $(this).next().slideDown("fast");

        }else{
            $(".gdwatch1 dd").slideUp("fast");
            }
    });

    // 관람가능연령
    $(".gdwatch2 dd").hide();

    $(".gdwatch2 dt").click( function(){  

    if(  $(this).next().css("display") == "none" ){  

        $(".gdwatch2 dd").slideUp("fast");
        $(this).next().slideDown("fast");

        }else{
            $(".gdwatch2 dd").slideUp("fast");
            }
    });
});