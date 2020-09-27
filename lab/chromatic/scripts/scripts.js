(function() {
	const FTX = {
		$: function (selector) {
			if (selector.charAt(0) === "#" && selector.indexOf(" ") === -1) {
				return document.querySelector(selector);
			} else {
				return document.querySelectorAll(selector);
			}
		},
		colourise: function () {
			let rgb = FTX.$("#rgb").value;
			let color = "#" + rgb;

			FTX.$("#swatch").style.backgroundColor = color;
		},
		convert: {
			case: function (event) {
				event.target.value = event.target.value.toUpperCase();
			},
			color: function () {




			}
		},
		expand: function (num) {
			if (num.length === 3) {
				let number = num.split("");

				return number[0] + number[0] + number[1] + number[1] + number[2] + number[2]; 
			}
			return num;
		},

		process: function () {
			FTX.validate();
			FTX.convert.color();
			FTX.colourise();
		},
		validate: function () {
			const inputs = {
				"rgb": [3, 6],
				"a": 2,
				"ox": 2, 
				"hexadecimal": 6
			};
			let valid = false;

			for (let input in inputs) {
				if (inputs.hasOwnProperty(input)) {
					var selector = input;
					var validate = FTX.$("#" + selector);
					if (typeof inputs[input] === "number") {
						if (validate.value.length === inputs[input]) {
							valid = true;
						}
					} else {
						if (inputs[input].indexOf(validate.value.length) !== -1) {
							validate.value = FTX.expand(validate.value);
							valid = true;
						}
					}
				}
			}

			// if (!valid ) { // Inform User }
			return valid;
		},
		listen: function () {
			FTX.$("input").forEach(element => {
				element.addEventListener("keyup", FTX.convert.case);
			});

			FTX.$("#form").addEventListener("submit", event => {
				event.preventDefault();
			});

			FTX.$("#convert").addEventListener("click", FTX.process);
		},
		init: function() {
			this.listen();
		}
	};

	window.FTX = FTX;
	FTX.init();
}());
