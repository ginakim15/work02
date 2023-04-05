$(function(){ //로드후실행


    










    $('.tab-news').click(function(e){
        e.preventDefault();

        target = $(this).data('target');


        $(this).addClass('active').siblings().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');

    })







    $('.sc-plus .text').click(function(e){

        e.preventDefault();


            if($(this).hasClass('on')){
                $('.sc-plus .text').removeClass('on').siblings('.open-list').slideUp();
                return false;
            }
            $('.sc-plus .text').removeClass('on').siblings('.open-list').slideUp();
            $(this).addClass('on').siblings('.open-list').slideDown();
        // $(this).toggleClass('on');
        // $(this).siblings('.open-list').slideToggle();

        // $(this).addClass('active').siblings().removeClass('active');
        // $(this).children('.open-list').stop().slideDown().css('border','1px solid #d0d0d0');

        // if ($(this).hasClass('on')) {
        //     $(this).removeClass('on');
        //     $(this).siblings('.open-list').slideUp();


        // } else {
        //     $(this).addClass('on');
        //     $(this).siblings('.open-list').slideDown();

       
        // }

        // $('.open-list').stop().slideUp();

    })


    // $(document).on("hover",".plus-item",function(){

    //     $(this).children('.open-list').stop().slideDown();

    // },function(){

    //     $('.open-list').stop().slideUp();
    // })



    const mainSlide = new Swiper('.main-slide',{
        loop:true,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },
        pagination:{
            el:'.swiper-pagination',
            type:'fraction'
        }
    })
    
    
    const subSlide = new Swiper('.sub-slide',{
        spaceBetween:43,
        slidesPerView:3,
        loop:true,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },
        pagination:{
            el:'.swiper-pagination',
            type:'fraction'
        }

    })



    $(window).scroll(function(){

        let lastScroll = 0;

        
        curr = $(this).scrollTop();

        if (curr > lastScroll) {
            $('.btn-up').removeClass('hide');
        } else {
            $('.btn-up').addClass('hide');
            
        }

    })













    
}) //end