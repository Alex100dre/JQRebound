/**
 * A jQuery plugin JQRebound
 * Author: Alex100dre
 */
 // Permet de ne pas entrer en conflits avec d'autres pluggins se servant du dollar comme déclaration de variable
(function($){

	//attache la fonction rebound à jQuery
	$.fn.rebound = function(options){
		
		//paramètres par défaut
		var settings =$.extend({
			
			
		}, options);
		
			//----------------------------variables
			var up =50;
			var speed = 800
			var run = true;
			var replay = true;
			//----------------------------animation
			function loop(){
				if (run==true){
					if(replay==true){
						$(".rebound").animate({"top":"0px"},speed,'easeOutCirc').animate({top: up+'px' },speed, 'easeInCirc', loop );
					}else{
						$(".rebound").animate({"top":"0px"},speed,'easeOutCirc').animate({top: up+'px' },speed, 'easeOutBounce');
					}
				}
			};
			//----------------------------au survole
			$('.rebound').mouseover(function(){
				run=true;
				loop();
			});
			//-----------------------------en dehors
			$('.rebound').mouseout(function(){
				$(".rebound").stop().animate({"top":"0px"},100);
				run=false;

			});
	}

})(jQuery);