class Obstacle{
    constructor(x,y){
      this.xposition = x;
      this.yposition = y;
      this.width = 50;
      this.height = 50;
      this.obt = createSprite(this.xposition,this.yposition,this.width,this.height)
      this.obt2 = createSprite(this.xposition,this.yposition,this.width,this.height)
      //this.obt.debug = true
      //this.image = loadImage("images/obstacle.png")
      //this.image2 = loadImage("images/boulder.png")
     // var obstacleImg = Math.round(random(1,2))
    }
    display(){
      image(this.image,this.xposition,this.yposition,80,50)

      /*var obstacleImg = Math.round(random(1,2))
    
      if(obstacleImg === 1)(
        this.image = loadImage("images/obstacle.png")
        
      )
      else{
        this.image2 = loadImage("images/boulder.png")
      }

      this.obt.addImage("obstacleImg",this.image)
      this.obt2.addImage("obstacleImg2",this.image2)
      this.obt.scale = 0.08
      this.obt2.scale = 0.3
      console.log("in display of obstacle")

  
      
      //drawSprites()
    }

    touches(player){
      if(this.obt.isTouching(player)){
        return true;
      }
    }











    /*spawnObstacles() {
        if(World.frameCount % 60 === 0) {
          var obstacle = createSprite(400,365,10,40);
          obstacle.velocityX = - (6 + 3*count/100);
          
          //generate random obstacles
          var rand = randomNumber(1,6);
          obstacle.setAnimation("images/obstacle.png" + rand);
          
          //assign scale and lifetime to the obstacle           
          obstacle.scale = 0.5;
          obstacle.lifetime = 70;
          //add each obstacle to the group
          ObstaclesGroup.add(obstacle);*/
        /*}
      }
      ObstaclesGroup.setLifetimeEach(-1);
      ObstaclesGroup.setVelocityXEach(0);
    if(ObstaclesGroup.isTouching(trex)){
     gameState = END;
      
    }*/



}