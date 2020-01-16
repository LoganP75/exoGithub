 
//app var
var app = {};
 
(function($){
	"use strict";


/*************************
  Predefined Variables
*************************/ 

	var $window = $(window),
	$document = $(document);

// Segmenter ses différentes app en fonction de leur type d'intervention sur le DOM

	app.event = function () {


	}

	//Document ready functions
	$document.ready(function () {
		app.event();
	});

})(jQuery);