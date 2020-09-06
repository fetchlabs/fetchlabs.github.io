(function() {
  const FTX = {
    $: document.querySelector("#tablet"),
    _: document.querySelector("#wrapper"),
    notify: function() {
      const height = FTX.$.offsetHeight;
      const maxHeight = 288;

      if (height > maxHeight) {
        FTX.notification.warning();
      } else {
        FTX.notification.calming();
      }
    },
    notification: {
      calming: function() {
        FTX._.style.backgroundColor = "";
      },
      warning: function() {
        FTX._.style.backgroundColor = "rgba(255, 0, 0, .3)";
      }
    },
    listen: function() {
      FTX.$.addEventListener("mouseup", FTX.notify);
      FTX.$.addEventListener("keyup", FTX.notify);
    },
    init: function() {
      this.listen();
    }
  };

  window.FTX = FTX;
  FTX.init();
}());