var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            readPosition();
          }
          else if(keyDown(RIGHT_ARROW)){
            readPosition();
          }
          else if(keyDown(UP_ARROW)){
            readPosition();
          }
          else if(keyDown(DOWN_ARROW)){
            readPosition();
          }
    }
    
    drawSprites();
  
}


function readPosition(data){
  position = data.val();
  console.log(position.x);
  console.log(position.y);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error al escribir en la base de datos");
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  });
}

function changePosition(x,y){
  hypnoticBall.x = hypnoticBall.x + x;
  hypnoticBall.y = hypnoticBall.y + y;
}