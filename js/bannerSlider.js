var content = $('div.bannerSliderContent');
var dot = $("span.buttonDot");
var bannerSliderLen = content.length;//起名字起重了
var i = 0;
function rotation(){
    if(i % bannerSliderLen == 0){
        i = 0;
        $('div.bannerSliderOne').siblings().css({"z-index": 0, "opacity": 0})
        $('div.bannerSliderOne').css({"z-index": 1, "opacity": 1})
        $('span.buttonDotOne').siblings().removeClass('on');
        $('span.buttonDotOne').addClass('on');
        i++;
    }else{
        if(i==1){
            $('div.bannerSliderTwo').siblings().css({"z-index": 0, "opacity": 0})
            $('div.bannerSliderTwo').css({"z-index": 1, "opacity": 1})
            $('span.buttonDotTwo').siblings().removeClass('on');
            $('span.buttonDotTwo').addClass('on');
        }
        if(i==2){
            $('div.bannerSliderThree').siblings().css({"z-index": 0, "opacity": 0})
            $('div.bannerSliderThree').css({"z-index": 1, "opacity": 1})
            $('span.buttonDotThree').siblings().removeClass('on');
            $('span.buttonDotThree').addClass('on');
        }
        if(i==3){
            $('div.bannerSliderFour').siblings().css({"z-index": 0, "opacity": 0})
            $('div.bannerSliderFour').css({"z-index": 1, "opacity": 1})
            $('span.buttonDotFour').siblings().removeClass('on');
            $('span.buttonDotFour').addClass('on');
        }
        if(i==4){
            $('div.bannerSliderFive').siblings().css({"z-index": 0, "opacity": 0})
            $('div.bannerSliderFive').css({"z-index": 1, "opacity": 1})
            $('span.buttonDotFive').siblings().removeClass('on');
            $('span.buttonDotFive').addClass('on');
        }
        i++;
    }

}
setInterval(rotation, 2000);