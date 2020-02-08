$(document).ready(function() {
    $('.Menu-list-item-sub').hide();
    $('.c-checkbox__actor').click(function () {
        $(this).toggleClass('c-checkbox-tick__actor');
    });
    $('.c-checkbox__actor').hover(function () {
        $(this).toggleClass('c-checkbox-tick__actor-hover');
    });

    $(".Menu-list-item-sub").addClass('--active-dropdown');
    $('.c-dropdown__label-value__text').click(function(e) {
        e.preventDefault();
        var $menuItem = $(this).next();
        $menuItem.slideToggle();
        $('.Menu-list-item-sub').not($menuItem).slideUp();
    });
    // $(".c-search-header__type-item").click(function(e){
    //     e.preventDefault();
    //     $('.c-filters__side').addClass('--wide-models');
    //     $('.c-filters__side').removeClass('--wide-user');
    // });

});

// Scrolling Effect
