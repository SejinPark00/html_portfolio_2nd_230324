$(document).ready(function(){
    $(".ct").click(function(){
        $(".b").slideToggle();
    });


$(window).resize(function(){
    if(window.innerWidth >= 1000){
        $(".b").show();
    }
    });

$(window).resize(function(){
    if(window.innerWidth <= 999){
        $(".b").hide();
    }
    });
});

