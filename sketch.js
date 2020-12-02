var ball,updatedBallPos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var ballpos=database.ref('ball/position');
    ballpos.on("value",changePos,showError)
}

function draw(){
    background("white");
    if(updatedBallPos!==undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
    }
}

function changePosition(x,y){
    database.ref('ball/position').set(
        {
            x:updatedBallPos.x+x,
            y:updatedBallPos.y+y
        }
    )
}
function changePos(data){
    updatedBallPos=data.val();
    ball.x=updatedBallPos.x;
    ball.y=updatedBallPos.y;

}
function showError(){

}
