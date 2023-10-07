var bg,bgImg;
var shooterimg,shooter;
var heart1img,heart2img,heart3img;
var heart1,heart2,heart3;
var zombie,zombieimg,zombieGroup
var bullet;
var score=0;


function preload(){
  shooterimg= loadImage("assets/hunter.png")
  zombieimg = loadImage("assets/zombie.png")
  heart1img = loadImage("assets/heart_1.png")
  heart2img = loadImage("assets/heart_2.png")
  heart3img = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/background_image.jpg")
 bullet = loadImage("assets/bulletimg.png")
 
}

function setup() {

  
  createCanvas(1000,500);

  //adding the background image
 // bg = createSprite(700,100,10,10);
 //bg.addImage(bgImg);

  shooter = createSprite(240,400,20,20);
  shooter.scale=0.3;
  shooter.addImage(shooterimg);

  heart1=createSprite(800,100,10,10);
 heart1.addImage(heart1img);
 heart1.scale=0.2;

 heart2=createSprite(820,100,10,10);
 heart2.addImage(heart2img);
 heart2.scale=0.2;

 heart3=createSprite(840,100,10,10);
 heart3.addImage(heart3img);
 heart3.scale=0.2;

zombieGroup = new Group();

}

function draw() {
  background(bgImg);
  textSize(20);
text("SCORE=" +score,150,80); 
  if(keyDown("space")){
    bullet = createSprite(240,403,10,10);
    bullet.scale=0.4;
   bullet.velocityX = +5;
   }
   if(zombieGroup.isTouching(bullet)){
    zombie.destroy();
    score = score+1;
   }
   


  



//release bullets and change the image of shooter to shooting position when space is pressed
spawnzombies()

 drawSprites();
}

function spawnzombies(){
  if(frameCount%100==0){
    zombie=createSprite(1000,400,20,20);
    zombie.addImage(zombieimg);
    zombie.scale=0.2;
    zombie.velocityX=-10;
    zombieGroup.add(zombie);
    
  }
}





