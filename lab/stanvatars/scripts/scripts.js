(function () {
  const FTX = {
    AVATARS: 2,
    FOCUSED: 0,
    focus: function () {
      const avatars = document.querySelectorAll(".profileImage");
      const avatar = document.querySelector(".focused");

      avatar.classList.remove("focused");
      avatars[this.FOCUSED].classList.add("focused");
    },
    remote: function (direction) {
      if (direction === "<") {
        if (this.FOCUSED > 0) {
          this.FOCUSED--;
        } else {
          this.FOCUSED = this.AVATARS - 1;
        }
      } else {
        if (this.FOCUSED < this.AVATARS) {
          this.FOCUSED++;
        } else {
          this.FOCUSED = 0;
        }
      }

      this.focus();
    },
    listen: function () {
      document.addEventListener('keyup', (event) => {
        const keyName = event.key;
      
        switch (keyName) {
          case 37:
            this.remote("<");
            break;
          case 39:
            this.remote(">");
            break;
          default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
      }, false);
    },
    init: function () {
      this.listen();
    }
  };

  window.FTX = FTX;
  FTX.init();

}());
