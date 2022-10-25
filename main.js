nose_x=0 ;
nose_y=0 ; 

function preload() {
nariz_de_payaso = loadImage('https://i.postimg.cc/W46h4ffR/pngegg.png');
}


function setup()  {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet esta inicialisada");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x-15;
        nose_y = results[0].pose.nose.y-15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
      image(nariz_de_payaso, nose_x, nose_y, 50, 50);
}

function take_snapshot() {
    save('mateo_payaso.png');
}