(function () {
	const QRCD = {
		encode: function ({ path, size, border }) {
			path = path ? encodeURIComponent(path) : "Hello%20world";
			size = size ? String(size).indexOf("x") ? size : size + "x" + size : "320x320";
			border = border ? border : "4";

			const segments = ["https://chart.googleapis.com/chart?cht=qr&choe=UTF-8"];

			segments.push("chld=H|" + border);
			segments.push("chs=" + size);
			segments.push("chl=" + path);

			return segments.join("&");
		}
	};

	const FTX = {
		encode: function (path) {
			const qrcode = $("figure img").element;
			qrcode.src = QRCD.encode(path);
			qrcode.removeAttribute("hidden");
		},
		listen: function () {

    },
		setup: function () {
			$("body > footer date").html(String((new Date()).getFullYear()));
			this.encode({
				path: "https://thefetchables.fetchtv.com.au/"
			});
		},
		init: function () {
      this.listen();
      this.setup();
    }
  };

	window.FTX = FTX;
  FTX.init();
}());
