window.addEventListener("keydown", function (e) {
  //storing all the div with class key in an array
  const keys = this.document.querySelectorAll(`.key`);
  
  //finding the div which contain the pressed letter
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!key) return; //will return null if an unspecified key is pressed
  
  //checking if any div has playing class, if they have then remove it
  keys.forEach(key => {
    if (key.classList.contains("playing")) {
      key.classList.remove("playing");
    }
  });
  
  //adding playing class to that key whose value has been pressed
  key.classList.add("playing");
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
});
