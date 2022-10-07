		// Thank you Russel Goldenberg
		// https://github.com/russellgoldenberg/scrollama
		// https://russellgoldenberg.github.io/scrollama/sticky-side/
		// https://pudding.cool/process/introducing-scrollama/

		// using d3 for convenience
		var main = d3.select("main");
	
		// for the Favorite Smell section
		var springSection = main.select("#spring");
		var favoriteSmell = springSection.select("#favoriteSmell");
		var favoriteSmellText = favoriteSmell.select(".text");
		var springImages = springSection.select("#springImages");
		var springImage = springImages.selectAll("figure");
	

		// initialize the scrollama
		var scroller = scrollama();

		// Spring Favorite Smell section
		function handleResizeSpring() {
			// 1. update height of step elements
			var stepH = Math.floor(window.innerHeight * 0.8);
			springImage.style("height", stepH + "px");

			favoriteSmell
				.style('height', window.innerHeight + 'px');

			var figureHeight = window.innerHeight / 2;
			// var figureMarginTop = (window.innerHeight - figureHeight);
			var figureMarginTop = (window.innerHeight - figureHeight) / 2;

			favoriteSmellText
				.style("height", figureHeight + "px")
				.style("top", figureMarginTop + "px");

			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnterSpring(response) {
			console.log(response);
			// response = { element, direction, index }

			// add color to current step only
			springImage.classed("is-active", function (d, i) {
				return i === response.index;
			});

			// update graphic based on step
			// figure.select("p").text(response.index + 1);
		}

		function handleContainerEnter(response) {
			// response = { direction }

			// sticky the graphic
			favoriteSmell.classed('is-fixed', true);
			favoriteSmell.classed('is-bottom', false);
		}

		function handleContainerExit(response) {
			// response = { direction }
		
			// un-sticky the graphic, and pin to top/bottom of container
			favoriteSmell.classed('is-fixed', false);
			favoriteSmell.classed('is-bottom', response.direction === 'down');
		}
				
		function spring() {

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResizeSpring();

			// 2. setup the scroller passing options
			// 		this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller
				.setup({
					step: "#spring #springImages figure",
					offset: 0.33,
					debug: false
				})
				.onStepEnter(handleStepEnterSpring);
		}


		// kick things off
		spring();
			