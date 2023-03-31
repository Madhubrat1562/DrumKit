for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonkey = this.innerHTML;
        sound(buttonkey);
        buttonanimation(buttonkey);
    }); 
}
function sound (soundkey){
    switch(soundkey) {
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s" :
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d" :
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j" :
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k" :
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l" :
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
    }
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonanimation(event.key);
});
function buttonanimation(soundkey){
    var activebutton = document.querySelector("."+soundkey);
    activebutton.classList.add("pressed");
    activebutton.classList.add("colored");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
        activebutton.classList.remove("colored");
    },90);
}