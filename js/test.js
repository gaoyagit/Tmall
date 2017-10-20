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
        //���ֲ�ͼ���������л�ͼƬ
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
        //������Ҫ���֮ǰ����ʽ
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //�����0��ʼ����index��Ҫ-1
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
        //�����ϱ߶�ʱ�������ã�index��һֱ������ȥ������ֻ��5��СԲ�㣬������Ҫ�����ж�
        index += 1;
        if (index > 5) {
            index = 1;
        }
        buttonsShow();
        animate(-1180);
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            // ��������Ŀ���̨��ӡһ�£��������
            console.log(i);

            /* ƫ������ȡ������������ƶ���СԲ���λ�ã���this��index�󶨵�����buttons[i]�ϣ�ȥ�ȸ�this���÷�  */
            /* ���������index���Զ������ԣ���Ҫ�õ�getAttribute()���DOM2��������ȥ��ȡ�Զ���index������*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 600 * (index - clickIndex);
            animate(offset); //�����������λ�ã�����СԲ���������ʾ
            index = clickIndex;
            buttonsShow();
        }
    }
    for (var i = 0; i < buttons.length; i++) {
        // ����ʹ�õ�������ִ�к�����
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