$(function() {
	$(".equal-height").equalHeights();
	$(document).ready(function(){
  	$('.bxslider').bxSlider({
			pager: false,
			auto: true,
			controls: false,
			mode: 'fade',
			speed: 1500
		});
		$('.article-featured').bxSlider({
			auto: true,
			controls: false,
			mode: 'fade',
			speed: 1500
		});
	});

});
