// we were intrested in adding event listner to all buttons so we added for
// loop here to add eventlistner to each button of list.

// for loop is only initializing it not seeing whats inside this functions
// function will called only when button got clicked
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        // this keyword contain value of whole tag which is triggered
        
        // console.log(event); aakhu list aape kai type ni event nekey value etc
        
        // this keyword tyarej vapri sakia jyare tag select karta hoia 
        // aaya apde drum vada badhay tag select karya atle this aapdne te class 
        // hare attached tag aapi dye
        // verify using console.log(this);
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// when we pass any value to function(value) then this value will capture all the
// information about particular triggered event here in this case it caputuring
// all information of keyboard event

document.addEventListener("keypress",function(event){
    // event have all information it also have value of key which presses
    // crosschecked using console.log(event);

    // here its diffrent when we press any key it will generate 
    // KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(ch){
    switch (ch) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log("Wrong Key Pressed!");
    }
}

function buttonAnimation(btnClass){
    var activeBtn = document.querySelector("." + btnClass);
    activeBtn.classList.add("pressed");

    // after some time i want to remove class bcz it don't looks good so we 
    // used setTimeout(function(),time in ms)
    setTimeout(function(){ 
        activeBtn.classList.remove("pressed");
    },100);
}