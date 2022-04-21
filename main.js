leftX = 0;
rightX = 0;
difference = 0;
 
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550, 550);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("rgb(255, 112, 112)");
    fill("rgb(0, 187, 255)");
    textSize(difference);
    text("The sixth sick sheikh's sixth sheep's sick", 58, 300);
    document.getElementById("mainSpan").innerHTML = "text size = " + difference + "px";
}

function modelLoaded(){
    console.log("ml5 loaded succesfully");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftX - rightX);
    }
}

