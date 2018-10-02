
        $(function(){
            function titShow(){
            $('.sv>.tit').animate({top:0, opacity:1},1000)
            $('.sv>.stit').delay(200).animate({top:0, opacity:0.5},800)
            }
            function subSlide(){
                 $(this).parent().find('.info_list').slideToggle(500)
            }
            $('.sban_menu li').click(subSlide)
            titShow()
        })