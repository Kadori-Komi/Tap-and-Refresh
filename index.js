window.addEventListener('load', () => {
    const sound = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#17e3f1",
        "#0004f7"
    ];


    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sound[index].currectTime = 0;
            sound[index].play();

            createBubbles(index);
        });
    });

    //create a function that make bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removechild(this);
    });
    }; 
});
