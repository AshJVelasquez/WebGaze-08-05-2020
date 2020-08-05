//Webgazer set up

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    console.log(elapsedTime); //elapsed time is based on time since begin was called
})
.showPredictionPoints(true)
.begin();


//Game Logic
var canvas = document.getElementById("playArea");
var ctx =canvas.getContext("2d");

let screenWidth = 800;
let screenHeight= 500;
//var isGameLive = true;

class Cat{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color="rgb(255,255,30)";
    }
}

var ippo = new Cat(screenWidth/2,screenHeight/2,50,50);
var catImages ={};

var loadCatImages = function(){
    catImages.ippo = new Image();
    catImages.ippo.src = "img/cat_smoler2.png";
}

var draw = function(){
    ctx.clearRect(0,0,screenWidth,screenHeight);
    //cat
        //ears
        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.lineTo(160,150);
        ctx.lineTo(160,120);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(200,150);
        ctx.lineTo(190,150);
        ctx.lineTo(190,120);
        ctx.fill();
        //head
        ctx.fillRect(150,150,50,50);
    //ctx.drawImage(catImages.ippo,ippo.x,ippo.y);
}

//Collisison Section


    //refresh step
var step = function(){
    draw();
    if(isGameLive){
        window.requestAnimationFrame(step);
    }
}
loadCatImages();
draw();