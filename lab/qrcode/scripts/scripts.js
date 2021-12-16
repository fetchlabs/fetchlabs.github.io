(function () {
  const FTX = {
    listen: function () {

    },
		setup: function () {
			$("body > footer date").html(String((new Date()).getFullYear()));
		},
		init: function () {
      this.listen();
      this.setup();
    }
  };
  window.FTX = FTX;
  FTX.init();













}());