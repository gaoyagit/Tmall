/**
 * Created by Administrator on 2017/10/27.
 */
//function getTop(){
//    var Topnav = document.getElementById('J_ASTotalContainer');
//    var topMax = window.innerHeight;//网页屏幕可用高度
//    var scrollTop = document.documentElement.scrollHeight;//滚动条的高度
//    if(scrollTop > topMax){
//        Topnav.style.display = "block";
//    }else{
//        Topnav.style.display = "none";
//    }
//}

$(window).scroll(function(){
    var Topnav = document.getElementById('J_ASTotalContainer');
    var topMax = window.innerHeight;//网页屏幕可用高度
    var scrollTop = $(window).scrollTop();
    if(scrollTop > topMax){
        Topnav.style.display = "block";
    }else{
        Topnav.style.display = "none";
    }
})
