/*
 *  jQuery lockScroll - v0.1.0
 *  Lock the scroll of an element.
 *  
 *
 *  Made by Jonathan Cutrell
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

		$.fn.lockScroll = function() {
			var scrollPos = [ this.scrollTop(), this.scrollLeft() ];
			this.data({
				'scroll-position': scrollPos,
				'scroll-locked' : true,
				'prev-overflow' : this.css('overflow')
			});
			this.css('overflow', 'hidden');
			this[0].scrollTo(scrollPos[0], scrollPos[1]);
		};
		$.fn.unlockScroll = function() {
			var scrollPos = this.data('scroll-position');
			this.data('scroll-locked', false);
			this.css('overflow', this.data('prev-overflow'));
			this.scrollTo(scrollPos[0], scrollPos[1]);
		};

})( jQuery, window, document );