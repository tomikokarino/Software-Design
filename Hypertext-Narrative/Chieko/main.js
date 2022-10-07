		// https://www.youtube.com/watch?v=fa8kZNhdHOk
		
		// Thank you Russel Goldenberg
		// https://github.com/russellgoldenberg/scrollama
		// https://russellgoldenberg.github.io/scrollama/basic/
		
		let scrolly = document.querySelector("#scrolly");
		let article = scrolly.querySelector("article");
		let text = article.querySelectorAll(".text");
		let step = article.querySelectorAll("p");

	
		// initialize the scrollama
		var scroller = scrollama();

		// scrollama event handlers
		function handleStepEnter(response) {
			// response = { element, direction, index }
			console.log(response);
			// add to color to current step
			response.element.classList.add("is-active");
		}

		function handleStepExit(response) {
			// response = { element, direction, index }
			console.log(response);
			// remove color from current step
			response.element.classList.remove("is-active");
		}

		function init() {
			// set random padding for different step heights (not required)
			step.forEach(function (step) {
				// var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
				step.style.padding = 150 + "px 0px";
			});

			// 1. setup the scroller with the bare-bones options
			// 		this will also initialize trigger observations
			// 2. bind scrollama event handlers (this can be chained like below)
			scroller
				.setup({
					step: "#scrolly article .text",
					debug: false,
					offset: 0.4,
					progress: true
				})
				.onStepEnter(handleStepEnter)
				.onStepExit(handleStepExit);

		}

		// kick things off
		init();
	
