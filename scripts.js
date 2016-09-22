$('.expand').click(function(){
		// var portid = $(this).attr('rel');
		// $('html,body').animate({scrollTop: $('#showcase').offset().top}, 500, 'easeInOutQuad');
		// if (screen.width <= 767 || window.innerWidth <=767) {
		// $('#showcase').animate({opacity:'1', height:'650px'},500).css('display', 'block');
		// $('#inner-showcase').css('display', 'block');
		// 	$('#s-content').load('portfolio.html #'+portid);
    //
		// }
		// else{
			$('#showcase').animate({opacity:'1', height:'500px'},500).css('display', 'block');
			$('#inner-showcase').css('display', 'block');
			// $('#project-content').load('portfolio.html #'+portid, function(){
			// $('#vespa').addClass("animated");
			// });
			$('#project-content').hide().fadeIn(1000);
});
