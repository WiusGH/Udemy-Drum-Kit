 

//Detecting button press (with JQuery)

var handleClick = $(".drum");
   $(".drum").click(function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
 });

//Detecting button press(with normal Javascript)

/*var handleClick = document.querySelectorAll('.drum');
for(var i = 0; i < handleClick.length; i++) {
handleClick[i].addEventListener("click", function(){

   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML)
   buttonAnimation(buttonInnerHTML);

});
}*/

//Detecting keyboard press (with JQuery)

$("body").keydown(function(event) {
   makeSound(event.key);
   buttonAnimation(event.key);
});

//Detecting keyboard press (with normal Javascript)

/*document.addEventListener("keydown", function(event) { 
   makeSound(event.key);
   buttonAnimation(event.key);
});*/

//Make sound (with JQuery)





//Make sound (with normal Javascript)

function makeSound(key) {

   switch (key) {
      case "a":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;

      case "s":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;

      case "d":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

      case "f":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

      case "j":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

      case "k":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

      case "l":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
                  
      default: console.log(buttonInnerHTML);
   }
}

function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function() {   
   activeButton.classList.remove("pressed");
}, 100);
}
