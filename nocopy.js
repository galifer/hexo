**功能：屏蔽鼠标右键、复制、粘贴、CTRL、ALT、SHIFT、F2~F12等，仅建议对文章内容独特性要求或不愿意被随意复制内容的站点**
//屏蔽鼠标右键、ALT翻页、CTRL+N、CTRL+R、F2~F12、SHIFT+左键
jQuery(document).ready(function($){
    $(document).bind("contextmenu",function(){return false;});
    $(document).bind("selectstart",function(){return false;});
    $(document).keydown(function(){return key(arguments[0])});
    function key(e){
        var keyCode;
        if(window.event) //IE
        {
            keyCode = e.keyCode;
        }
        else if(e.which) //firefox/opera/chrome/netscape
        {
            keyCode = e.which;
        }
        if(
    (keyCode==112)||       //F2
    (keyCode==113)||       //F2
    (keyCode==114)||       //F3
    (keyCode==115)||       //F4
 // (keyCode==116)||       //F5
    (keyCode==117)||       //F6
    (keyCode==118)||       //F7
    (keyCode==119)||       //F8
    (keyCode==120)||       //F9
    (keyCode==121)||       //F10
 // (keyCode==122)||       //F11
    (keyCode==123)||       //F12
    (keyCode==17)||        //CTRL
    (keyCode==16)          //shift
    //此处填写后续条件
    ){
 //  alert("别再按了，你节操碎了！");     
    return false;
    }
}
});