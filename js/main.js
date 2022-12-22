let options={
    startAngle:-1.55,
    size:150,
    value:0.90,
    fill:{gradient:["#30bae7"]}		
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2))+"%")
    });
    $(".html-css .bar").circleProgress({
        value:0.75,
        fill:{gradient:["#d74680"]},
        autoControl:true
    })
    $(".graphic-design .bar").circleProgress({
        value:0.70,
        fill:{gradient:["#15c7a8"]}
    })
    $(".ui-ux .bar").circleProgress({
        value:0.85,
        fill:{gradient:["#eb7d4b"]}
    })

    //Portfolio section filtering

    $(document).ready(function(){
        var mixer = mixitup('.container');
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.header-area').addClass('sticky')
            }
            else{
                $('.header-area').removeClass('sticky')
            }
        });

        //resoponsive menu
        $('.header-area').meanmenu({
		    meanScreenWidth:947
        });
    });
