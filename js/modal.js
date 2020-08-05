jQuery(function() {
    $('.box__video').on('click', function () {
        $('.modal').addClass('modal__active');
    });
    $('.modal__hide-bg').on('click', function () {
        $('.modal').removeClass('modal__active');
    });
});

