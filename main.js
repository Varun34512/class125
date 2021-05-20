function setup() {
    video = createCapture(VIDEO ) ;
    video.size(550, 500) ;
    canvas= createCanvas(550,550) ;
    canvas.position(560,150) ;
    poseNet= ml5.poseNet(video, modelLoaded ) ;
    poseNet.on('pose', gotPoses) ;
    }

    function draw() {
        background('#aba9a4') ;
        fill('#F90093') ;
        stroke('#F90093') ;
        square(noseX, noseY ,difference) ;
        document.getElementById("square_size").innerHTML = "Width and Height of the square will be "+ difference+"px" ;
    }

    function modelLoaded() {
        console.log("PoseNet model is innitialised") ;
    }

    var noseX=0 ;
    var noseY= 0 ;
    var difference= 0 ;
    var leftWristX=0 ;
    var rightWristX=0 ;

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results) ;
            noseX= results[0].pose.nose.x ;
            noseY= results[0].pose.nose.y ;
            console.log("NoseX = "+ noseX + " NoseY = " + noseY) ;
            leftWristX= results[0].pose.leftWrist.x ;
            rightWristX= results[0].pose.rightWrist.x ;
            difference= floor(leftWristX-rightWristX) ; 
            console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference) ;
        }
    }
    
