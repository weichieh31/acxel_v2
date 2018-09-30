var menuopen = false;
$(document).on('tap','#mobile-btn',function(){
	console.log(menuopen);
	if( menuopen ){
		$('.m-btn').removeClass('m-btn-a');
		$('#mobile-menu').hide();
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

$(document).on('tap','.socialBox a',function(){
	var urltxt = $(this).attd("href");
	if( urltxt == '#' ){
		$('body').scrollTop(0);
	}
});