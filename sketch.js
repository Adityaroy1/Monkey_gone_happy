
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var  Survival_Time
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1
  
 ground= createSprite(400,350,900,10);
 ground.velocityX=-4
 ground.x=ground.width/2
 Survival_Time=0

  
}


function draw() {
background(255)
    //jump when the space key is pressed
   if(keyDown("space")) {
      monkey.velocityY = -12;
        
    }
    stroke("black")
   textSize(20)
  fill("black")
    text("Survival_Time: "+ Survival_Time,200,50)
    //add gravity
   monkey.velocityY =  monkey.velocityY + 0.8
  console.log( monkey.x)
  
  monkey. collide (ground)
  if(ground.x>0){
     ground.x=ground.width/2
  }
  food();
  obstacles();
   Survival_Time = Survival_Time + Math.round(getFrameRate()/65 );

  drawSprites();
}
function food() {   
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    banana.lifetime=210;
 }
}
function obstacles(){
 if (frameCount%300===0){
  var obstacles=createSprite(600,314,40,10); 
   obstacles.addImage(obstaceImage);
   obstacles.scale = 0.15;
   obstacles.velocityX = -3;
    obstacles.lifetime=210;
 }
  
}  
  
  
  




