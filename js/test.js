/**
 * Created by Administrator on 2017/10/20.
 */
window.onload = function() {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(offset){
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft <-5900){
            list.style.left =-1180 + 'px';
        }
        if(newLeft > 5900){
            list.style.left = 5900 + 'px';
        }
    }

    prev.onclick = function(){
        animate(1180);
    }

    next.onclick = function(){
        animate(-1180);
    }

    var timer;
    function play() {
        //将轮播图换成向右切换图片
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }
    play();

    var container = document.getElementById('container');

    function stop() {
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;

    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;

    function buttonsShow() {
        //这里需要清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
    }

    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 5;
        }
        buttonsShow();
        animate(1180);
    }
    next.onclick = function() {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1;
        }
        buttonsShow();
        animate(-1180);
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            // 在浏览器的控制台打印一下，看看结果
            console.log(i);

            /* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 600 * (index - clickIndex);
            animate(offset); //存放鼠标点击后的位置，用于小圆点的正常显示
            index = clickIndex;
            buttonsShow();
        }
    }
    for (var i = 0; i < buttons.length; i++) {
        // 这里使用的是立即执行函数，
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 600 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                buttonsShow();
            }
        })(i)
    }

}