var starImg, fairyImg, bgImg,bg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	 fairyVoice.play();

      bg = createSprite(400,350,50,50);
	  bg.addImage(bgImg);
	  bg.scale=0.0;

	fairy = createSprite(130, 490);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  if(star.position.y>470){
     star.velocityX = 0;
	 star.velocityY = 0;

  }



   keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
  if(keyDown("left")){
    fairy.x = fairy.x-5;
  }

  if(keyDown("right")){
    fairy.x = fairy.x+5;
  }
 if(keyDown("down")){
   star.velocityX=0;
   star.velocityY=5;
 }
 
}
