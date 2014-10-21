;(function ( $, window, document, undefined ) {

		$.fn.lockScroll = function() {
			var scrollPos = [ this.scrollTop(), this.scrollLeft() ];
			this.data({
				'scroll-position': scrollPos,
				'scroll-locked' : true,
				'prev-overflow' : (this[0] === window) ? 'initial' : this.css('overflow')
			});
			this.css('overflow', 'hidden');
			this.scrollTop(scrollPos[0]);
			this.scrollLeft(scrollPos[1]);
		};
		$.fn.unlockScroll = function() {
			var scrollPos = this.data('scroll-position');
			this.data('scroll-locked', false);
			this.css('overflow', this.data('prev-overflow'));
			this.scrollTop(scrollPos[0]);
			this.scrollLeft(scrollPos[1]);
		};

})( jQuery, window, document );