/**
 * Created by Administrator on 2017/10/27.
 */
//function getTop(){
//    var Topnav = document.getElementById('J_ASTotalContainer');
//    var topMax = window.innerHeight;//��ҳ��Ļ���ø߶�
//    var scrollTop = document.documentElement.scrollHeight;//�������ĸ߶�
//    if(scrollTop > topMax){
//        Topnav.style.display = "block";
//    }else{
//        Topnav.style.display = "none";
//    }
//}

$(window).scroll(function(){
    var Topnav = document.getElementById('J_ASTotalContainer');
    var topMax = window.innerHeight;//��ҳ��Ļ���ø߶�
    var scrollTop = $(window).scrollTop();
    if(scrollTop > topMax){
        Topnav.style.display = "block";
    }else{
        Topnav.style.display = "none";
    }
})
