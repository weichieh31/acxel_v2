var menuopen = false;
$(document).on('tap','#mobile-btn',function(){
	
	if( menuopen ){
		$('.m-btn').removeClass('m-btn-a');
		$('#mobile-menu').slideUp();
		$('html body').css({'overflow':'auto'});
		menuopen = false;
	}else{
		$('.m-btn').addClass('m-btn-a');
		$('#mobile-menu').slideDown();
		$('html').css({'height':'100%','overflow':'hidden'});
		$('body').css({'height':'100%','overflow':'hidden'});
		menuopen = true;
	}
});