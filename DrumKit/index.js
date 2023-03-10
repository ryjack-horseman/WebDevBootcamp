var drums = document.querySelectorAll(".drum");
var numDrumBtns = drums.length;

for (var i = 0; i < numDrumBtns; i++) {
  drums[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    playAudio(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml)

  });
}

document.addEventListener("keydown", function(event) {
    playAudio(event.key);
    buttonAnimation(event.key);
});

function playAudio(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
  
        default:
          console.log(key);
          break;
      }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}