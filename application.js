$(document).ready(function() {
    $('.menu').click(function() {
        $(this).toggleClass('active');
    })
});

function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function() {

	$('.js-menu-button').click(function(e){

		e.preventDefault();
		updateMenuButton();

	});


});

$(document).ready(function () {
    $('.slider').slick({
    });
});