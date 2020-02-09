$(document).ready(function() {
    $(".menu-reponsive").on("click", function() {
        $("#abc").animate({width:'toggle'}, 200);
    });
    $('.c-navigation-accordion__header').click(function(){
        $(this).next().toggleClass( "active" );
    });
    $("#iframe1").contents().find(".gui").addClass("myClass");
    // $('.Menu-list-item-sub').hide();
    // $('.navigation-link').click(function(e) {
    //     e.preventDefault();
    //     var $menuItem = $(this).next();
    //     $menuItem.slideToggle();
    //     $('.Menu-list-item-sub').not($menuItem).slideUp();
    // });


    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        
        if(pos_body>10){
            // alert('xin chao');
        //    $('.header').addClass('co-dinh-menu');
           $('.header').addClass("header-white");
           $('.c-navigation').addClass("c-navigation-black");
           $('.btn-login').attr("id","btn-login-black");
           $(".logo-text path").css("fill", "black");
           $("a.btn-signup").css("color", "white");
           $("a.btn-upload").css("color", "white");
           $(".navigation-link").attr("id", "btn-login-black");
        }
        else {
           $('.header').removeClass('header-white');
        //    $('.navigation-link-black').addClass("navigation-link");
           $('.c-navigation').removeClass("c-navigation-black");
           $('.btn-login').removeAttr('id');
           $('.navigation-link').removeAttr('id');
           $(".logo-text path").removeAttr( 'style');
           $("a.btn-signup").removeAttr('style');
           $("a.btn-upload").removeAttr('style');
        //    removeAttr( 'style' );
        }
        if(pos_body>1200){
           $('.back-to-top').addClass('hien-ra');
        }
        else{
           $('.back-to-top').removeClass('hien-ra');
        }
     });
     $('.back-to-top').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);
     });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

window.onload = function() {
    var cssLink = document.createElement("link");
    cssLink.href = "style.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "css"; 
    frames['#iframe1'].document.head.appendChild(cssLink);
  }