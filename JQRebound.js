/**
 * A jQuery plugin JQRebound
 * Author: Alex100dre
 */
 // Permet de ne pas entrer en conflits avec d'autres pluggins se servant du dollar comme d�claration de variable
(function($){

	//attache la fonction rebound � jQuery
	$.fn.JQRebound = function(options){
		
		//param�tres par d�faut
		var settings =$.extend({
			//----------------------------variables
			begin	:	0,
			up	:	50,
			speed	:	800,
			run	:	true,
			replay	:	true
		}, options);
		
		   
			//----------------------------animation
			function loop(){
				if (settings.run==true){
					if(settings.replay==true){
						$(".rebound").animate({"top":settings.begin+"px"},settings.speed,'easeOutCirc').animate({top: settings.up+'px' },settings.speed, 'easeInCirc', loop );
					}else {
						$(".rebound").animate({"top":settings.begin+"px"},settings.speed,'easeOutCirc').animate({top: settings.up+'px' },settings.speed, 'easeOutBounce');
					}
				}
			};
			//----------------------------au survole
			$('.rebound').mouseover(function(){
				settings.run=true;
				loop();
			});
			//-----------------------------en dehors
			$('.rebound').mouseout(function(){
				$(".rebound").stop().animate({"top":settings.begin+"px"},100);
				settings.run=false;

			});
		
	}

})(jQuery);