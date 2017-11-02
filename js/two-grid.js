//$('.table-list').each(function(){                   // Find lists of tabs
//    var $this = $(this);                            // Store this list
//    var $tab = $this.find('li.active');             // Get the active list item
//    var $link = $tab.find('a');                     // Get link from active tab
//    var $panel = $($link.attr('href'));             // Get active panel
//
//    $this.on('click', '.tab-title', function(e) { // When click on a tab
//        e.preventDefault();                           // Prevent link behavior
//        var $link = $(this),                          // Store the current link
//            id = this.hash;                           // Get href of clicked tab
//
//        if (id && !$link.is('.active')) {             // If not currently active
//            $panel.removeClass('active');               // Make panel inactive
//            $tab.removeClass('active');                 // Make tab inactive
//
//            $panel = $(id).addClass('active');          // Make new panel active
//            $tab = $link.parent().addClass('active');   // Make new tab active
//        }
//    });
//});

window.onload = function(){
    tabPanel('table-list','floor-current-tab','floor-tabs-content','floor-tabs-detail','onmouseover');
    function tabPanel($ul,$li,pannelBox,pannel,evt){
        var $ul = document.getElementsByClassName('table-list');
        var $li =$ul.getElementsByClassName('floor-current-tab');//$li里面存放了所有的li的标签
        var pannelBox = document.getElementsByClassName('floor-tabs-content');
        var pannel = pannelBox.getElementsByClassName('floor-tabs-detail');//pannel里面存放了所有的内容面板的标签
        var len = $li.length;
        console.log(len);
        var i=0;
        var timer = null;
        var num=0;

        for(i = 0; i <len;i++){
            $li[i].index = i;
            $li[i][evt] = function(){
                clearInterval(timer);
                num = this.index;
                tab_change()
            }
            $li[i].onmouseout = function(){
                autoplay();
            }
        }

        function tab_change(){
            for(i = 0 ;i<len;i++){
                $li[i].removeClass('active');
                pannel[i].removeClass('active');
            }
            $li[i].addClass('active');
            pannel[i].addClass('active');
        }

        function autoplay(){
            timer = setInterval(function(){
                num++;
                if(num>=len) num=0;
                tab_change();
            },1000);
        }
        autoplay();
    }
}