/**
 * Created by Administrator on 2017/12/28.
 */
$(window).scroll(function(){
    var h=$(this).scrollTop();//获得滚动条距top的高度
    //alert(h);
    if(h>800){
        $("#xianshi").fadeIn();
        //$("#one").addClass("active");
        //$("#one").siblings().removeClass("active");
        if(h>1200){
            $('#two').siblings().removeClass('twoActive');
            $('#two').siblings().removeClass('threeActive');
            $('#two').siblings().removeClass('fourActive');
            $('#two').siblings().removeClass('fiveActive');
            $('#two').siblings().removeClass('sixActive');
            $('#two').siblings().removeClass('sevenActive');
            $('#two').siblings().removeClass('eightActive');
            $('#two').siblings().removeClass('noneActive');
            $('#two').addClass('twoActive');
        }
        if(h>1800){
            $('#three').siblings().removeClass('twoActive');
            $('#three').siblings().removeClass('threeActive');
            $('#three').siblings().removeClass('fourActive');
            $('#three').siblings().removeClass('fiveActive');
            $('#three').siblings().removeClass('sixActive');
            $('#three').siblings().removeClass('sevenActive');
            $('#three').siblings().removeClass('eightActive');
            $('#three').siblings().removeClass('noneActive');
            $('#three').addClass('threeActive');
        }
        if(h>2500){
            $('#four').siblings().removeClass('twoActive');
            $('#four').siblings().removeClass('threeActive');
            $('#four').siblings().removeClass('fourActive');
            $('#four').siblings().removeClass('fiveActive');
            $('#four').siblings().removeClass('sixActive');
            $('#four').siblings().removeClass('sevenActive');
            $('#four').siblings().removeClass('eightActive');
            $('#four').siblings().removeClass('noneActive');
            $('#four').addClass('fourActive');
        }
        if(h>3200){
            $('#five').siblings().removeClass('twoActive');
            $('#five').siblings().removeClass('threeActive');
            $('#five').siblings().removeClass('fourActive');
            $('#five').siblings().removeClass('fiveActive');
            $('#five').siblings().removeClass('sixActive');
            $('#five').siblings().removeClass('sevenActive');
            $('#five').siblings().removeClass('eightActive');
            $('#five').siblings().removeClass('noneActive');
            $('#five').addClass('fiveActive');
        }
        if(h>3900){
            $('#six').siblings().removeClass('twoActive');
            $('#six').siblings().removeClass('threeActive');
            $('#six').siblings().removeClass('fourActive');
            $('#six').siblings().removeClass('fiveActive');
            $('#six').siblings().removeClass('sixActive');
            $('#six').siblings().removeClass('sevenActive');
            $('#six').siblings().removeClass('eightActive');
            $('#six').siblings().removeClass('noneActive');
            $('#six').addClass('sixActive');
        }
        if(h>4600){
            $('#seven').siblings().removeClass('twoActive');
            $('#seven').siblings().removeClass('threeActive');
            $('#seven').siblings().removeClass('fourActive');
            $('#seven').siblings().removeClass('fiveActive');
            $('#seven').siblings().removeClass('sixActive');
            $('#seven').siblings().removeClass('sevenActive');
            $('#seven').siblings().removeClass('eightActive');
            $('#seven').siblings().removeClass('noneActive');
            $('#seven').addClass('sevenActive');
        }
        if(h>5200){
            $('#eight').siblings().removeClass('twoActive');
            $('#eight').siblings().removeClass('threeActive');
            $('#eight').siblings().removeClass('fourActive');
            $('#eight').siblings().removeClass('fiveActive');
            $('#eight').siblings().removeClass('sixActive');
            $('#eight').siblings().removeClass('sevenActive');
            $('#eight').siblings().removeClass('eightActive');
            $('#eight').siblings().removeClass('noneActive');
            $('#eight').addClass('eightActive');
        }
        if(h>6000){
            $('#none').siblings().removeClass('twoActive');
            $('#none').siblings().removeClass('threeActive');
            $('#none').siblings().removeClass('fourActive');
            $('#none').siblings().removeClass('fiveActive');
            $('#none').siblings().removeClass('sixActive');
            $('#none').siblings().removeClass('sevenActive');
            $('#none').siblings().removeClass('eightActive');
            $('#none').siblings().removeClass('noneActive');
            $('#none').addClass('noneActive');
        }else if(h>7000){
            $('#ten').siblings().removeClass('twoActive');
            $('#ten').siblings().removeClass('threeActive');
            $('#ten').siblings().removeClass('fourActive');
            $('#ten').siblings().removeClass('fiveActive');
            $('#ten').siblings().removeClass('sixActive');
            $('#ten').siblings().removeClass('sevenActive');
            $('#ten').siblings().removeClass('eightActive');
            $('#ten').siblings().removeClass('noneActive');
            //$('#ten').addClass('active');
        }
    }else{
        $("#xianshi").fadeOut();
    };

});
$("#two").click(function(){
    $('html,body').animate({scrollTop: 1580}, 200);
    return false;
});
$("#three").click(function(){
    $('html,body').animate({scrollTop: 2268}, 200);
    return false;
});
$("#four").click(function(){
    $('html,body').animate({scrollTop: 3046}, 200);
    return false;
});
$("#five").click(function(){
    $('html,body').animate({scrollTop: 3734}, 200);
    return false;
});
$("#six").click(function(){
    $('html,body').animate({scrollTop: 4512}, 200);
    return false;
});
$("#seven").click(function(){
    $('html,body').animate({scrollTop: 5200}, 200);
    return false;
});
$("#eight").click(function(){
    $('html,body').animate({scrollTop: 5978}, 200);
    return false;
});
$("#none").click(function(){
    $('html,body').animate({scrollTop: 6666}, 200);
    return false;
});
$("#ten").click(function(){
    $('html,body').animate({scrollTop: 0}, 200);
    return false;
})
