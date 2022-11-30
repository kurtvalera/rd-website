// Sorting buttons active

$(document).ready(function () {
    $('.filtr-controls').click(function(e) {

        $('.filtr-controls.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});

const filterizr = $('.filter-container').filterizr({
    controlsSelector: '.filtr-controls',
    gridItemsSelector: '.filtr-item',
    spinner: {
        enabled:false,
    },
 
     
});