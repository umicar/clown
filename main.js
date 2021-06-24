nosex = 0;
nosey = 0;
function preload() {
    clownnose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    img = createCapture(VIDEO);
    img.size(300,300);
    img.hide();

    poseNet = ml5.poseNet(img, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 5;
        nosey = results[0].pose.nose.y - 5;
        console.log("nosex=" + nosex);
        console.log("nosey=" + nosey);
    }
}

function draw() {
    image(img, 0, 0, 300, 300);
    fill(200,0,0);
    stroke(200,0,0);
    circle(nosex,nosey,30);
    image(clownnose,nosex-10,nosey-10,20,20);
}

function take_snapshot() {
    save('My Filter.png');
}
