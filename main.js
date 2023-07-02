


function setup(){
canvas = createCanvas(800, 600)
canvas.position(150, 325)
video = createCapture(VIDEO);
video.hide()
}


function draw(){
image(video, 200, 125, 400, 400)
fill("green");
rect(50,50, 650, 20)
rect(50,560, 670, 20)
rect(50,50, 20, 530)
rect(700,50, 20, 520)
fill("red");
circle(60,50,50)
circle(60,560,50)
circle(720,570,50)
circle(720,50,50)
}


function applytint(){
    color = document.getElementById("colorname").value; 
    tint(color);
}

function take_snapshot(){
    save("name.png");
}
