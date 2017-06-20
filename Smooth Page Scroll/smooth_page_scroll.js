$('#screen1-link').on('click',function(){
	var x = $('.first-screen').offset().top;
	$('html,body').animate({scrollTop:x},600,function(){
		//animation complete
	});
});

$('#screen2-link').on('click',function(){
	var x = $('.second-screen').offset().top;
	$('html,body').animate({scrollTop:x},600,function(){
		//animation complete
	});
});

$('#screen3-link').on('click',function(){
	var x = $('.third-screen').offset().top;
	$('html,body').animate({scrollTop:x},600,function(){
		//animation complete
	});
});

$('#screen4-link').on('click',function(){
	var x = $('.fourth-screen').offset().top;
	$('html,body').animate({scrollTop:x},600,function(){
		//animation complete
	});
});