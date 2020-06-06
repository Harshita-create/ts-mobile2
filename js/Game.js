class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
   // car1.debug =true
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    //car2.debug =true
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    //car3.debug =true
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    //car4.debug =true
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          if(keyIsDown(RIGHT_ARROW) ){
            console.log("move RIGHT")
            cars[index-1].x = x+50
          }
          if(keyIsDown(LEFT_ARROW) ){
            console.log("move LEFT")
            cars[index-1].x = x-50
          }
          for(var i = 0;i<obstacles.length;i++){
            obstacles[i].display()
            console.log("in forloop to display" + i)

            if(obstacles [i].touches(cars[index - 1] ) ){
              reset = 1
              console.log("touching obt")
              player.distance = 0
             
            }
          } 
          //if
          /*if(player.touches(obstacles)){
            player.distance = 0
          }*/
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    /*if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }*/

    if(player.distance === 3860){
      gameState = 2;
      player.rank=player.rank+1
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
    var win = createElement("h1")
    win.html("U Have Reached Ur Destination Without Any Accindents")
    //win.innerHTML.fontcolor("white");
    win.position(displayWidth/4 -100,displayHeight/2-200)
    
    var win2 = createElement("h1")
    win2.html("Ur Rank is  :" + player.rank)
    //win2.innerHTML.fontcolor("white");
    win2.position(displayWidth/4 - 100,displayHeight/2-150)
  }
}
