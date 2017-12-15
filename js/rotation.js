/**
 * Created by Administrator on 2017/10/20.
 */
window.onload = function(){
    var list = document.getElementById('list');
    //var prev = document.getElementById('prev');
    //var next = document.getElementById('next');
    var container = document.getElementById('container');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var containerBox = document.getElementById('containerBox');
    var index = 1;
    function animate(offset){
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';

        if(newLeft < -5960){
            list.style.left = -1192 + 'px';
        }
        if(newLeft > -1192){
            list.style.left = -5960 + 'px';
        }
    }

    var timer;
    function play(){
        timer = setInterval(function(){
            index += 1;
            if(index > 5){
                index = 1;
            }
            buttonsShow();
            animate(1192);
        },3000)
    }
    play();

    function stop(){
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;


    function buttonsShow() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }

        }
        buttons[index - 1].className = 'on';
    }

    for (var i = 0; i < buttons.length; i++) {
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 1192 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                buttonsShow();
            }
        })(i)
    }

}