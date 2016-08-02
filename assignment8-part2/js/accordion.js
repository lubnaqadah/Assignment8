$(function(){
    $('#accordion .heading').click(function(){

      $(this).next().slideToggle('fast');
	  $(this).toggleClass('active');	
     $(".cont").not($(this).next()).slideUp('fast');
	});
})