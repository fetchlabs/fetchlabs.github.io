<!DOCTYPE html>
<html lang="en">
  <style>
    html {
      font-family: monospace;
    }
  </style>

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
        return parseInt(Number(hexadecimal), 10);
      }
    },
  };

  const PLTT = {
    primary: 009BE4,
    secondary: D90B5E
  };

</html>
