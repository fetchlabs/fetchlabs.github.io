(function() {
  const UTIL = {
		convert: {
			color: function (prefix, alpha, hexadecimal) {
        return prefix + alpha + hexadecimal;
      },
      alpha: function (decimal) {
        let opacity = false;
        let alpha;

        if (decimal == undefined) {
          return opacity
        } else if (decimal < 0 || decimal > 1) {

        } else {
          alpha = Math.round(255 * decimal);
        }

        alpha = alpha.toString(16).toUpperCase();

        while (alpha.length < 2) { // Hex colours use pairs
          alpha = "0" + alpha;
        }

        return alpha;
      },
      decimal: function (hexadecimal) {
        if (typeof hexadecimal === "string") { hexadecimal = Number(hexadecimal); }
        return parseInt(hexadecimal, 10);
      }
		},
  };

  const FTX = {
		$: function (selector) {
			if (selector.charAt(0) === "#" && selector.indexOf(" ") === -1) {
				return document.querySelector(selector);
			} else {
				return document.querySelectorAll(selector);
			}
		},
    emend: function (event) {
      let string = event.target.value;

      if (string.charAt(0) === "#") {
        string = string.substr(1);
      }

      event.target.value = string.toUpperCase();
    },
    process: function (event) {
      event.preventDefault();
      event.stopPropagation();

      let prefix = "0x";
      let opacity = FTX.$("#opacity").value;
      let hexcolor = FTX.$("#hexcolor").value;
      let alpha;
      let color;
      let decimal;

      if (opacity) {
        alpha = UTIL.convert.alpha(opacity);
      } else {
        opacity = 1;
        alpha = "FF";
      }

      color = UTIL.convert.color(prefix, alpha, hexcolor);
      decimal = UTIL.convert.decimal(color);

      FTX.$("#swatch").setAttribute("style", "background-color:#" + hexcolor + ";opacity:" + opacity);
      FTX.$("#hexadecimal").value = color;
      FTX.$("#decimal").value = decimal;
    },
		listen: function () {
      FTX.$("#hexcolor").addEventListener("blur", FTX.emend);
      FTX.$("#convert").addEventListener("click", FTX.process);
		},
		init: function() {
			this.listen();
		}
	};

	window.FTX = FTX;
	FTX.init();
}());
