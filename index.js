
// variable to get number of drum buttons from the DOM
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// loop through the buttons
for (var i=0; i<numberOfDrumButtons; i++) {

//  eventListener for 'click' event on the selected button to play proper sound    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//      variable to capture the text of the button (used to switch based on the value)            
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        }
    )};

// eventListener for keypress event to trigger playing the proper sound    
document.addEventListener("keydown", function(keydown) {
    
    makeSound(keydown.key);

    buttonAnimation(keydown.key);

})

function makeSound(key) {

    //      switch case for the right sound to play for each button        
    switch(key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

//      default switch value in case none of the button values returned was expected
        default:
            console.log("An unmapped key "+ key +" was pressed");

    }}

//  function to call a css class that will create an animation on the drum button pressed
    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);

//      add the 'pressed' css class to the button object
        activeButton.classList.add("pressed");

//      remove the 'pressed' css class from the button object after a delay
        setTimeout(function () { 
            activeButton.classList.remove("pressed"); 
        }, 100);
    }