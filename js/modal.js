jQuery(function() {
    $('.box__video').on('click', function () {
        $('.modal').addClass('modal__active');
    });
    const modal = $('.modal').filter('modal__block');
    $('.modal').not('modal__block').on('click', function () {
        $(this).removeClass('modal__active');
        
    });
});

