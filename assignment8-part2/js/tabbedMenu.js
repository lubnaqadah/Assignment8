$(function(){
	$("#container").addClass("tabs");
	
	$('ul.menu li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.menu li').removeClass('current');
		$('.content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	
	
	
})