

$(document).ready(function(){
    $('#about, #about').click(function(){
        $('article.blurb').toggleClass('open1')
    });
    $('#contact, #contact').click(function(){
        $('article.info').toggleClass('open2')
    });
    $('#spinning').click(function(){
        $('#spinning').fadeOut(0);
    });
    $('#spinning').click(function(){
        $('#still').fadeIn(0);
    });
    $('#still').click(function(){
        $('#still').fadeOut(0);
    });
    $('#still').click(function(){
        $('#spinning').fadeIn(0);
    });


    $('#p1, #home1, #next1').click(function(){
        $('article.navigation1').toggleClass('nav_open')
    });
    $('#p1, #home1, #next1, #back2').click(function(){
        $('article.caption_p1').toggleClass('capt1_open')
    });
    $('#p1').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home1').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p1').click(function(){
        $('#fullscreen1').fadeIn(500);
    });
    $('#home1, next1').click(function(){
        $('#fullscreen1').fadeOut(250);
    });
    $('#next1').click(function(){
        $('#fullscreen2').fadeIn(500);
    });
    $('#next1').click(function(){
        $('#fullscreen1').fadeOut(250);
    });


    $('#p2, #home2, #next1, #next2, #back2').click(function(){
        $('article.navigation2').toggleClass('nav_open')
    });
    $('#next2').click(function(){
        $('article.navigation3').toggleClass('nav_open')
    });
    $('#back2').click(function(){
        $('article.navigation1').toggleClass('nav_open')
    });
    $('#p2, #home2, #next1, #next2, #back2, #back3').click(function(){
        $('article.caption_p2').toggleClass('capt2_open')
    });
    $('#p2').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home2').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p2').click(function(){
        $('#fullscreen2').fadeIn(500);
    });
    $('#home2, #next2, #back2').click(function(){
        $('#fullscreen2').fadeOut(250);
    });
    $('#next2').click(function(){
        $('#fullscreen3').fadeIn(500);
    });
    $('#back2').click(function(){
        $('#fullscreen1').fadeIn(500);
    });


    $('#p3, #home3, #next3, #back3').click(function(){
        $('article.navigation3').toggleClass('nav_open')
    });
    $('#next3').click(function(){
        $('article.navigation4').toggleClass('nav_open')
    });
    $('#back3').click(function(){
        $('article.navigation2').toggleClass('nav_open')
    });
    $('#p3, #home3, #next2, #next3, #back3, #back4').click(function(){
        $('article.caption_p3').toggleClass('capt3_open')
    });
    $('#p3').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home3').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p3').click(function(){
        $('#fullscreen3').fadeIn(500);
    });
    $('#home3, #next3, #back3').click(function(){
        $('#fullscreen3').fadeOut(250);
    });
    $('#next3').click(function(){
        $('#fullscreen4').fadeIn(500);
    });
    $('#back3').click(function(){
        $('#fullscreen2').fadeIn(500);
    });

    
    $('#p4, #home4, #next4, #back4').click(function(){
        $('article.navigation4').toggleClass('nav_open')
    });
    $('#next4').click(function(){
        $('article.navigation5').toggleClass('nav_open')
    });
    $('#back4').click(function(){
        $('article.navigation3').toggleClass('nav_open')
    });
    $('#p4, #home4, #next3, #next4, #back4, #back5').click(function(){
        $('article.caption_p4').toggleClass('capt4_open')
    });
    $('#p4').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home4').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p4').click(function(){
        $('#fullscreen4').fadeIn(500);
    });
    $('#home4, #next4, #back4').click(function(){
        $('#fullscreen4').fadeOut(250);
    });
    $('#next4').click(function(){
        $('#fullscreen5').fadeIn(500);
    });
    $('#back4').click(function(){
        $('#fullscreen3').fadeIn(500);
    });

    
    $('#p5, #home5, #next5, #back5').click(function(){
        $('article.navigation5').toggleClass('nav_open')
    });
    $('#next5').click(function(){
        $('article.navigation6').toggleClass('nav_open')
    });
    $('#back5').click(function(){
        $('article.navigation4').toggleClass('nav_open')
    });
    $('#p5, #home5, #next4, #next5, #back5, #back6').click(function(){
        $('article.caption_p5').toggleClass('capt5_open')
    });
    $('#p5').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home5').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p5').click(function(){
        $('#fullscreen5').fadeIn(500);
    });
    $('#home5, #next5, #back5').click(function(){
        $('#fullscreen5').fadeOut(250);
    });
    $('#next5').click(function(){
        $('#fullscreen6').fadeIn(500);
    });
    $('#back5').click(function(){
        $('#fullscreen4').fadeIn(500);
    });

    
    $('#p6, #home6, #next6, #back6').click(function(){
        $('article.navigation6').toggleClass('nav_open')
    });
    $('#next6').click(function(){
        $('article.navigation7').toggleClass('nav_open')
    });
    $('#back6').click(function(){
        $('article.navigation5').toggleClass('nav_open')
    });
    $('#p6, #home6, #next5, #next6, #back6, #back7').click(function(){
        $('article.caption_p6').toggleClass('capt6_open')
    });
    $('#p6').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home6').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p6').click(function(){
        $('#fullscreen6').fadeIn(500);
    });
    $('#home6, #next6, #back6').click(function(){
        $('#fullscreen6').fadeOut(250);
    });
    $('#next6').click(function(){
        $('#fullscreen7').fadeIn(500);
    });
    $('#back6').click(function(){
        $('#fullscreen5').fadeIn(500);
    });

    
    $('#p7, #home7, #next7, #back7').click(function(){
        $('article.navigation7').toggleClass('nav_open')
    });
    $('#next7').click(function(){
        $('article.navigation8').toggleClass('nav_open')
    });
    $('#back7').click(function(){
        $('article.navigation6').toggleClass('nav_open')
    });
    $('#p7, #home7, #next6, #next7, #back7, #back8').click(function(){
        $('article.caption_p7').toggleClass('capt7_open')
    });
    $('#p7').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home7').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p7').click(function(){
        $('#fullscreen7').fadeIn(500);
    });
    $('#home7, #next7, #back7').click(function(){
        $('#fullscreen7').fadeOut(250);
    });
    $('#next7').click(function(){
        $('#fullscreen8').fadeIn(500);
    });
    $('#back7').click(function(){
        $('#fullscreen6').fadeIn(500);
    });

    
    $('#p8, #home8, #next8, #back8').click(function(){
        $('article.navigation8').toggleClass('nav_open')
    });
    $('#next8').click(function(){
        $('article.navigation9').toggleClass('nav_open')
    });
    $('#back8').click(function(){
        $('article.navigation7').toggleClass('nav_open')
    });
    $('#p8, #home8, #next7, #next8, #back8, #back9').click(function(){
        $('article.caption_p8').toggleClass('capt8_open')
    });
    $('#p8').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home8').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p8').click(function(){
        $('#fullscreen8').fadeIn(500);
    });
    $('#home8, #next8, #back8').click(function(){
        $('#fullscreen8').fadeOut(250);
    });
    $('#next8').click(function(){
        $('#fullscreen9').fadeIn(500);
    });
    $('#back8').click(function(){
        $('#fullscreen7').fadeIn(500);
    });

    
    $('#p9, #home9, #next9, #back9').click(function(){
        $('article.navigation9').toggleClass('nav_open')
    });
    $('#next9').click(function(){
        $('article.navigation10').toggleClass('nav_open')
    });
    $('#back9').click(function(){
        $('article.navigation8').toggleClass('nav_open')
    });
    $('#p9, #home9, #next8, #next9, #back9, #back10').click(function(){
        $('article.caption_p9').toggleClass('capt9_open')
    });
    $('#p9').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home9').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p9').click(function(){
        $('#fullscreen9').fadeIn(500);
    });
    $('#home9, #next9, #back9').click(function(){
        $('#fullscreen9').fadeOut(250);
    });
    $('#next9').click(function(){
        $('#fullscreen10').fadeIn(500);
    });
    $('#back9').click(function(){
        $('#fullscreen8').fadeIn(500);
    });

    
    $('#p10, #home10, #next10, #back10').click(function(){
        $('article.navigation10').toggleClass('nav_open')
    });
    $('#next10').click(function(){
        $('article.navigation11').toggleClass('nav_open')
    });
    $('#back10').click(function(){
        $('article.navigation9').toggleClass('nav_open')
    });
    $('#p10, #home10, #next9, #next10, #back10, #back11').click(function(){
        $('article.caption_p10').toggleClass('capt10_open')
    });
    $('#p10').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home10').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p10').click(function(){
        $('#fullscreen10').fadeIn(500);
    });
    $('#home10, #next10, #back10').click(function(){
        $('#fullscreen10').fadeOut(250);
    });
    $('#next10').click(function(){
        $('#fullscreen11').fadeIn(500);
    });
    $('#back10').click(function(){
        $('#fullscreen9').fadeIn(500);
    });

    
    $('#p11, #home11, #next11, #back11').click(function(){
        $('article.navigation11').toggleClass('nav_open')
    });
    $('#next11').click(function(){
        $('article.navigation12').toggleClass('nav_open')
    });
    $('#back11').click(function(){
        $('article.navigation10').toggleClass('nav_open')
    });
    $('#p11, #home11, #next10, #next11, #back11, #back12').click(function(){
        $('article.caption_p11').toggleClass('capt11_open')
    });
    $('#p11').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home11').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p11').click(function(){
        $('#fullscreen11').fadeIn(500);
    });
    $('#home11, #next11, #back11').click(function(){
        $('#fullscreen11').fadeOut(250);
    });
    $('#next11').click(function(){
        $('#fullscreen12').fadeIn(500);
    });
    $('#back11').click(function(){
        $('#fullscreen10').fadeIn(500);
    });

    
    $('#p12, #home12, #back12').click(function(){
        $('article.navigation12').toggleClass('nav_open')
    });
    $('#back12').click(function(){
        $('article.navigation11').toggleClass('nav_open')
    });
    $('#p12, #home12, #next11, #back12').click(function(){
        $('article.caption_p12').toggleClass('capt12_open')
    });
    $('#p12').click(function(){
        $('#thumbs, #sidebar').fadeOut(250);
    });
    $('#home12').click(function(){
        $('#thumbs, #sidebar').fadeIn(500);
    });
    $('#p12').click(function(){
        $('#fullscreen12').fadeIn(500);
    });
    $('#home12, #back12').click(function(){
        $('#fullscreen12').fadeOut(250);
    });
    $('#back12').click(function(){
        $('#fullscreen11').fadeIn(500);
    });
})