	
	function addIconToList() {
		var targets = $('h3 i');
		
		if(targets.length > 1 ){
			$(targets).each( function(x, y){ _mapIcons(y) });
		} else {
			_mapIcons(targets);
		}
	}

	function _mapIcons(element){
		var x = $(element)
		if(x.hasClass('code')) {
			x.addClass('icon-terminal');
		} else if (x.hasClass('music')) {
			x.addClass('icon-music');
		} else if (x.hasClass('beer')) {
			x.addClass('icon-music');
		} else if (x.hasClass('life')) {
			x.addClass('icon-globe');
		}
	}


	function addIconsToTitle() { 
		var heading = $('.header h2');

		if(heading.hasClass('code')) {
			heading.append('<i class="icon-terminal"></i>');
		} else if (heading.hasClass('music')) {
			heading.append('<i class="icon-music"></i>');
		} else if (heading.hasClass('beer')) {
			heading.append('<i class="icon-music"></i>');
		} else if (heading.hasClass('life')) {
			heading.append('<i class="icon-globe"></i>');
		}
	}

	$(document).ready(function(){
		addIconsToTitle();
		addIconToList();
	})
