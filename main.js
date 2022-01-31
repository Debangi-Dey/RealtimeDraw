function setup(){
canvas=createCanvas(450,450)
canvas.position(800, 70)
video=createCapture(VIDEO)
video.size(350, 350)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('poseNet', gotPoses)
}

function draw(){
    background("pink")
}

function modelLoaded(){
    console.log("poseNet Laoded")
}

function gotPoses(results){
if (results.length>0) {
    console.log(results)
}
}