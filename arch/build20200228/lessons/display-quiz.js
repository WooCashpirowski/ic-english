const buttons = document.querySelectorAll(".mm-btn"),
  mmItem = document.querySelectorAll(".mm-wrapper");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    mmItem.forEach(items => {
      items.className = "mm-wrapper";
      document.getElementById(this.dataset.id).className = "mm-wrapper active";
      buttons.forEach(i => {
        i.className = "mm-btn";
      });
      this.className = "mm-btn active";
    });
  });
});
