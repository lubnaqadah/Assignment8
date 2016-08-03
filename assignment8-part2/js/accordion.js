$(function(){
    $('#accordion .heading').click(function(){
	$(".heading").not($(this)).removeClass("active");	
	$(this).next().slideToggle('fast');
	$(this).toggleClass('active');	
	$(".cont").not($(this).next()).slideUp('fast');
	});
})
