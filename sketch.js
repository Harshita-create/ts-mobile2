var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var obstacles = []

//var to reset car to start
var reset = 0

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  for(var initialPosition = (displayHeight*4)-500 , position = 500, xposition = 1; initialPosition>0; initialPosition = initialPosition-500 , position = position - 500, xposition = xposition+1){
    var num = Math.round(random(1,2))
    //if(xposition%2 === 0){
      if(num === 2 ){
      obstacle1 = new Obstacle(displayWidth/2+91,position-50)
      obstacles.push(obstacle1)

        //car4
      obstacle2 = new Obstacle(displayWidth/2+291,position)
      obstacles.push(obstacle2)

      //car2
    obstacle3 = new Obstacle(displayWidth/2-85,position+50)
    obstacles.push(obstacle3)
        
     //car1
     obstacle4 = new Obstacle(displayWidth/2-295,position)
     obstacles.push(obstacle4)
 
    
    }
    else{
      obstacle1 = new Obstacle(displayWidth/2+111,position)
      obstacles.push(obstacle1)

      //car4
      obstacle2 = new Obstacle(displayWidth/2+291+20,position-50)
      obstacles.push(obstacle2)

      //car2
    obstacle3 = new Obstacle(displayWidth/2-85-20,position)
    obstacles.push(obstacle3)

       //car1
    obstacle4 = new Obstacle(displayWidth/2-295-20,position+50)
    obstacles.push(obstacle4)

  
    
    }
  
   
    

   
  console.log("in forloop "+position)
  
  }

 
}


function draw(){
//background(rgb(232, 249, 254))
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
    
  }
  if(gameState === 2){
    game.end();
  }
}
