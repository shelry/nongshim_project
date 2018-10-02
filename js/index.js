$(function(){   
    
    $('#visual .owl-carousel').owlCarousel({
        items : 1,
        loop: true,
        autoplay : true,
        autoplayTimeout : 4000,
        autoplayHoverPause : true,
        nav : true,
       onInitialized : load,
        onTranslate : before,
        onTranslated : after
    })
     function load(){
        $('.slider1').find('img').animate({opacity:1},500)
        $('.slider1').find('.v_desc').delay(500).animate({top:30, opacity:1})
    }   
    function before(){
        $('.v_desc').css({top:70, opacity:0})
    }       
    function after(event){     
        var page = event.page.index;
        if(page == 0){
                    $('.slider1 .v_desc').delay(100).animate({top:30,opacity:1},800)
                } else if(page==1){
                    $('.slider2 .v_desc').delay(100).animate({top:30,opacity:1},800)
                }
                else if(page==2){
                    $('.slider3 .v_desc').delay(100).animate({top:30,opacity:1},800)
                }
     }
    
   
    // sub_menu
//    var subMenu = function(){
//        $(this).toggleClass('on')
//        $(this).siblings($slideSubMenuBox).slideToggle()
//        
//        $(this).parent().siblings().find($slideMenuTit).removeClass('on')
//        $(this).parent().siblings().find($slideSubMenuBox).slideUp()
//    }
//    $slideMenuTit.click(subMenu)
})