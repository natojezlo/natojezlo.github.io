/* Делаем адаптивное меню на jQuery */

$(function() {
	var menuLink = $('.hamburger');
	var menu = $('.menu');
	var close = $('.close-btn');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
	});
});