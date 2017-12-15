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

//$('.table-list').each(function(){
//    var $this = $(this);
//    var $tab = $this.find('li');
//    var $tabActive = $tab.find('li.active');
//    var $link = $tab.find('a');
//    var $panel = $($link.attr('href'));
//    var len = $tab.length;
//    console.log(len);
//    var i=0;
//    var timer = null;
//    var num=0;
//
//    for(i=0;i<len;i++){
//        $tab[i].index = i;
//        $tab[i].onmouseover = function(){
//            clearInterval(timer);
//            num = this.index;
//            tab_change();
//        }
//        $tab[i].onmouseout = function(){
//            autoplay();
//        }
//
//    }
//    function tab_change(){
//        for(i = 0 ;i<len;i++){
//            $tab[i].removeClass('active');
//            //pannel[i].removeClass('active');
//        }
//        $tab[num].addClass('active');
//        $panel.addClass('active');
//    }
//
//    function autoplay(){
//        timer = setInterval(function(){
//            num++;
//            if(num>=len) num=0;
//            tab_change();
//        },1000);
//    }
//        autoplay();
//
//})

var $ul = document.getElementById('table-list');
var $li =$ul.getElementsByClassName('floor-current-tab');
var pannelBox = document.getElementsByClassName('floor-tabs-content');
var pannel = document.getElementsByClassName('floor-tabs-detail');
console.log(len);
var len = $li.length;

tabPanel();

function tabPanel(){
    var i=0;
    var timer = null;
    var num=0;

    for(i = 0; i <len;i++){
        $li[i].index = i;
        $li[i].onmouseover = function(){
            clearInterval(timer);
            num = this.index;
            tab_change();
        }
        $li[i].onmouseout = function(){
            autoplay();
        }
    }

    function tab_change(){
        for(i = 0 ;i<len;i++){
            $li[i].classList.remove("active");
            pannel[i].classList.remove('active');
        }
        $li[num].classList.add('active');
        pannel[num].classList.add('active');
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