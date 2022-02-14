function setup(){
canvas=createCanvas(450,450)
canvas.position(800, 70)
video=createCapture(VIDEO)
video.size(350, 350)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose', gotPoses)
}
NoseX=0
NoseY=0
lwristX=0
rwristX=0
difference=0
function draw(){
    background("pink")
    document.getElementById("square_sides").innerHTML="The width & height of a square will be "+difference+"px"
    fill("blue")
    stroke("yellow")
    square(NoseX, NoseY,difference)
}

function modelLoaded(){
    console.log("poseNet Laoded")
}

function gotPoses(results){
if (results.length>0) {
    console.log(results)
    NoseX=results[0].pose.nose.x
    NoseY=results[0].pose.nose.y
    lwristX=results[0].pose.leftWrist.x
    rwristX=results[0].pose.rightWrist.x
    differnce=floor(lwristX-rwristX)
}
}