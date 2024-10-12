
Y.use('squarespace-gallery-stacked', 'squarespace-gallery-strip', function(Y) {
	Y.on('domready', function() {
  
  
	// primary gallery = stacked (#slideshow)
	var stacked;
	stacked = new Y.Squarespace.Gallery({
	
		// REQUIRED SETTINGS
		
		slideshowElement: '#slideshow',  			// slideshow wrapper element
		       
		// OPTIONAL SETTINGS						// omitting results in default setting
		
		itemSelector: false,						//  slide elements (default: children of slideshowElement)
		startIndex: 0,								//  initial slide index (default: 0)
		loop: true,									// slideshow looping (default: false)
		keyboard: {									// keystroke bindings (default: L/R arrow keys)
			next: 'down:39',
			previous: 'down:37'
		},
		
		// DESIGN SETTINGS
		       
		design: 'stacked',							// standard, one image at a time slideshow
		designOptions: {							// (optional)
			speed: 0.3,							// slide transition animation speed (default: 0.3)
			easing: Y.Easing.easeOutStrong,			// slide transition animation easing (default: Y.Easing.easeOutStrong)
			transition: 'fade'						// slide transition animation type [fade - more coming soon] (default: fade)
		}
	         
	});

	// linked gallery = strip (#thumbnails)
	var strip;
    strip = new Y.Squarespace.Gallery({
   
		// REQUIRED SETTINGS
    
		slideshowElement: '#thumbnails',  			// slideshow wrapper element
              
		// OPTIONAL SETTINGS						// omitting results in default setting
      
		loop: true,									// must match the linked gallery
		keyboard: false,							// set false so it doesnt interfere
      
		// DESIGN SETTINGS
              
			design: 'strip',						// usually used for thumbnails strips
			designOptions: {						// (optional)
				direction: 'horizontal',			// strip orientation [horizontal, vertical] (default: horizontal)
				alignment: 'start',					// position of active slide [start, middle, end] (default: middle)
				wrapper: false,						// gallery.js adds a default wrapper around slide items, use this if you have your own wrapper
				easing: Y.Easing.easeOutStrong,		// slide transition animation easing (default: Y.Easing.easeOutStrong)
				duration: 0.3,						// slide transition animation duration (default: 0.3)
				offset: 0							// offsets the active slide if alignment is start or end
		}
              
	});
    
	// link 'em up
	stacked.linkGallery(strip);
        
	});
});
