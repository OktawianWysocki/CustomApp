var horse = document.getElementById("horse");
var cactus = document.getElementById("cactus");
var counter=0;
function jump(){
    if(horse.classList == "animate"){return}
    horse.classList.add("animate");
    setTimeout(function(){
        horse.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let horseTop = parseInt(window.getComputedStyle(horse).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft<20 && cactusLeft>-20 && horseTop>=130){
        cactus.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "cactus 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);