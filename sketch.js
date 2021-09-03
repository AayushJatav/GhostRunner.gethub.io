  var tower,towerImg;
  var door,doorGroup,doorImg;
  var climber,climberImg,climberGroup;
  var ghost,ghostStand,ghostJumping;
  var score = 0;
  var spookySound;
  var ground;
  var gameOver,gameOverImg;


  function preload(){
    towerImg = loadImage("tower.png");
    doorImg = loadImage("door.png")
    doorGroup = new Group();
    climberImg = loadImage("climber.png")
    climberGroup = new Group();
    ghostStand = loadImage("ghost-standing.png")
    ghostJumping = loadImage("ghost-jumping.png")
    spookySound = loadSound("spooky.wav")
    gameOverImg = loadImage("gameOver.png")
  }

  function setup(){
    createCanvas(windowWidth,windowHeight)
 score = 0;
    tower = createSprite(width-650,height-300)
    tower.addImage("tower",towerImg);
    tower.velocityY = 2;
   // tower.visible = false;

    ghost = createSprite(width-650,200);
    ghost.addImage("ghost",ghostStand)
    ghost.scale = 0.5;
    
    gameOver = createSprite(width-650,height-336,10,10)
    gameOver.addImage("gameOver",gameOverImg)
    gameOver.visible = false;
    
    

  }

  function draw(){
    background(0);
    fill("white");
    text("Score: "+ score, 1050,50);
    
    if(tower.y>400){
      tower.y=300;
    }
    
    if (ghost.isTouching(doorGroup)) {
  
}
    spawnDoor();
    if(keyDown("left")){
      ghost.x = ghost.x-3;
    }
     if(keyDown("right")){
      ghost.x = ghost.x+3;
    }
     if(keyDown("space")){
      ghost.velocityY = -5;
      ghost.changeImage("ghost",ghostJumping);

    }
    
    if(frameCount%240===0 ){
      tower.velocityY = tower.velocityY+1;
    }

    if(frameCount%5===0 ){
     score = score+1;
    }
    
    if(touches.lemgth > 0 || keyDown("space")) {
      ghost.velocityY = -5;
      ghost.changeImage("ghost",ghostJumping);
      touches = [];
    }
    
    if(ghost.isTouching(doorGroup)){
      tower.velocityY = 0;
      doorGroup.setVelocityEach(0);
      climberGroup.setVelocityEach(0);
      spookySound.play();
      ghost.velocityY = ghost.velocityY-1;
      ghost.depth = 0;
      gameOver.visible = true;
    }


    ghost.velocityY = ghost.velocityY+0.8;
    ghost.depth = ghost.depth
    ghost.depth+1;
      drawSprites();
  }

  function spawnDoor(){
    if(frameCount%240===0 ){
      door = createSprite(200,-50)
      door.addImage("door",doorImg);
      door.x = Math.round(random(500,800))
      door.velocityY = 2;
      door.lifetime = 800;
      doorGroup.add(door);

      if(frameCount%240===0 ){
      climber = createSprite(200,10)
      climber.addImage("climber",climberImg);
      climber.x = Math.round(random(500,800))
      climber.velocityY = 2;
      climber.lifetime = 800;
      climberGroup.add(climber);
      climber.x = door.x;
  }
    }
  }



  