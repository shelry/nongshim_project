$(function(){
    //초기값 설정 
    var $desc = $('.v_desc')
     var $con_box = $('.con_box')
     var $menu = $('.product_index li')
     var $con = $('.product_con')
     var $win = $(window)
     var $top = $('.top')
    var topPos = $('.top').position().top
     /*비주얼 슬라이드 설정*/
   function menu(){
       $('.smenu_wrap').stop().slideToggle()
   } 
    $('.gnb').hover(menu)
    
        function selectBox(){
        $(this).toggleClass('slideOn')
        $(this).find('.list').slideToggle(300)
        $(this).toggleClass('rot')
    }
 $('.baro li').click(selectBox)
    function top(){
    $('html,body').animate({scrollTop:0},300)
    }
    $('.top').click(top)
    
    /*탭 메뉴 기능 정의*/
   $menu.click(add)
    function add(){
        $menu.find('img').removeClass('on')
        $(this).find('img').addClass('on')
        var index = $(this).index()
        $con.hide()
        $con.eq(index).fadeIn(300)
    }
    $menu.first().trigger('click')

    function scrollMove(){
        var nowScroll = $win.scrollTop()
        if(nowScroll >= topPos-1){        
           $top.fadeIn(300)
        }else{
            $top.hide()
        }
    }
    
    
      $win.scroll(scrollMove)
    
         
    //모바일 메뉴
    
    var $slideOpenBtn = $('.btn-gnb')
    var $slideCloseBtn = $('.btn-close')
    var $slideMenuBox = $('.mobile_slide')
    var $dimmed = $('.dimmed')
  //  var $slideMenuTit = $('.gnb_wrap > .gnb > .stit')
  //  var $slideSubMenuBox = $('.smenu_wrap')
    
    // slide_box open
    $slideOpenBtn.click(slideOpen)
    function slideOpen(){
        $dimmed.fadeIn()
        $slideMenuBox.delay(300).animate({right:0})
    }
    
    // slide_box close
    $slideCloseBtn.click(slideClose)
    function slideClose(){
        $slideMenuBox.animate({right:'-200%'}, function(){
            $dimmed.fadeOut()
        })
        //$dimmed.delay(300).fadeOut()
    }
    
})
