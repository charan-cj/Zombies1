var helicopterIMG, helicopter, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	imageMode(CENTER);

	// helicopter = new Helicopter(400,200,10,10);
	// World.add(world, helicopter);
	// helicopter.scale=0.6;




	// helicopterSprite=createSprite(width/2, 200, 10,10);
	// helicopterSprite.addImage(helicopterIMG);
	// helicopterSprite.scale=0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	helicopter = new Helicopter(400, 200, 100, 200);
	// helicopter.scale = 3;
	packageBody = new Pack(400, 200, 10, 20);

	// packageBody = Bodies.circle(width / 2, 500, 5, { restitution: 3, isStatic: true });
	// World.add(world, packageBody);
	// 



	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	Engine.update(engine);
	background(0);
	keyAction();
	helicopter.display();
	
	
	//   packageSprite.x= packageBody.position.x 
	//   packageSprite.y= packageBody.position.y 
	drawSprites();

}

function keyAction() {

	if (keyCode === 40) {
		
		packageBody.velocityY = 4;
		packageBody.display();
		
}

}

