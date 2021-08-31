function setup(){
canvas = createCanvas(640, 480);
canvas.position(150, 150);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video, 230, 150, 220, 200);

fill(191,0,255);
stroke(255, 0 ,0);
circle(50,50,80);

fill(0, 255, 255);
stroke(0, 255, 255);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);


fill(191,0,255);
stroke(255, 0 ,0);
circle(585,50,80);



fill(0, 255, 255);
stroke(0, 255, 255);
rect(575, 90, 20, 300);

rect(40, 90, 20, 300);

fill(191,0,255);
stroke(255, 0 ,0);
circle(585,430,80);


fill(191,0,255);
stroke(255, 0 ,0);
circle(50,430,80);


}

function take_snapshot(){
    save('name.png');
}