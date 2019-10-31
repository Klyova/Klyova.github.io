(function() {

	$(document).ready(function() {

		var options = {
			ovalWidth: 450,
			ovalHeight: 50,
			offsetX: 100,
			offsetY: 325,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'item'
		}

		var carousel = $('.carousel').CircularCarousel(options);

		/* Fires when an item is about to start it's activate animation */
		carousel.on('itemBeforeActive', function(e, item) {
		

		});

		/* Fires after an item finishes it's activate animation */
		carousel.on('itemActive', function(e, item) {
			let i = $(item).attr("data-i");
			$('.dots li').removeClass("active");
			$('.dots li').eq(i).addClass("active");


			$(item).removeClass("grayscale");

			let color = String($(item).attr('data-color'));
			$('.controls .circle-button-previous, .controls .circle-button-next, .dots li ').css('background', color );
			$('h2, .more a').css('color', color)

			let head = String($(item).attr('data-head'));
			$("h2").text(head);

			let link = String($(item).attr('data-link'));
			$(".more a").attr("href",link);
			

		});



		/* Fires when an active item starts it's de-activate animation */
		carousel.on('itemBeforeDeactivate', function(e, item) {
			
		})

		/* Fires after an active item has finished it's de-activate animation */
		carousel.on('itemAfterDeactivate', function(e, item) {
			$(item).addClass("grayscale");
			if($(item).hasClass("active")){$(item).removeClass("grayscale");}

		})

		
		/* Previous button */
		$('.controls .circle-button-previous').click(function(e) {
			carousel.cycleActive('circle-button-previous');
			e.preventDefault();
		});

		/* Next button */
		$('.controls .circle-button-next').click(function(e) {
			carousel.cycleActive('circle-button-next');
			e.preventDefault();
		});

		/* Manaully click an item anywhere in the carousel */
		$('.carousel .item').click(function(e) {
			var index = $(this).index('li');
			carousel.cycleActiveTo(index);
			e.preventDefault();
		});

		$('.dots li').click(function(e) {
			let i = $(this).data("i");
			$('.dots li').removeClass("active");
			$('.dots li').eq(i).addClass("active");
			carousel.cycleActiveTo(i);
			e.preventDefault();
	
		});
						

});



})();