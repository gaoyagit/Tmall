// function getTop(){
//     var Topnav = document.getElementById('J_ASTotalContainer');
//    var topMax = window.innerHeight;
//    var scrollTop = document.documentElement.scrollTop;
//    if(scrollTop > topMax){
//        Topnav.style.display = "block";
//    }else{
//        Topnav.style.display = "none";
//    }
// }
// function addEventHandler(target,type,func) {
//     if(target.addEventListener()){
//         target.addEventListener(type, func, false);
//     }else if(window.attachEvent()){
//         target.attachEvent("on" + type, func);
//     }else{
//         target["on" + type] = func;
//     }
// }
// window.onload = function () {
//     addEventHandler(window,'scroll',getTop());
// }
// $(window).scroll(function(){
//     var Topnav = document.getElementById('J_ASTotalContainer');
//     var topMax = window.innerHeight;
//     var scrollTop = $(window).scrollTop();
//     if(scrollTop > topMax){
//         Topnav.style.display = "block";
//     }else{
//         Topnav.style.display = "none";
//     }
// })
//这个也可�?
// window.onscroll = function(){
//     var Topnav = document.getElementById('J_ASTotalContainer');
//     var topMax = window.innerHeight;//网页屏幕可用高度
//     var scrollTop = document.documentElement.scrollTop;
//     if(scrollTop > topMax){
//         Topnav.style.display = "block";
//     }else{
//         Topnav.style.display = "none";
//     }
// }
window.addEventListener('scroll',function(){
    var Topnav = document.getElementById('J_ASTotalContainer');
    var topMax = window.innerHeight;//网页屏幕可用高度
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > topMax){
        Topnav.style.display = "block";
    }else{
        Topnav.style.display = "none";
    }
})


