function preload() {
	treeImg = loadImage("pictures/tree.png");
	boyImg = loadImage("pictures/boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Matter.Engine.create();
	world = engine.world;

	tree = createSprite(800, 300);
	tree.addImage(treeImg);
	tree.scale = 0.5;
	boy = createSprite(200, 600);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	mango = new MANGO(800, 150, 60);
	mango1 = new MANGO(930, 200, 60);
	mango2 = new MANGO(730, 200, 60);
	mango3 = new MANGO(700, 100, 60);
	mango4 = new MANGO(800, 50, 60);
	mango5 = new MANGO(890, 120, 60);
	mango6 = new MANGO(630, 200, 60);
	ground = new GROUND(500, 690, 1000, 10);
	stone = new STONE(230, 500);
	lin = new LIN(stone.body, { x: 140, y: 540 });

	Matter.Engine.run(engine);
}


function draw() {
	background(200);
	drawSprites();
	Matter.Engine.update(engine);

	mango.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	stone.display();
	lin.display();
	ground.display();

	fall(stone, mango);
	fall(stone, mango1);
	fall(stone, mango2);
	fall(stone, mango3);
	fall(stone, mango4);
	fall(stone, mango5);
	fall(stone, mango6);

}


function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	lin.shoot();
}

function fall(stone, mango) {
	var mangoPos = mango.body.position;
	var stonePos = stone.body.position;
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if (distance < 80)
		Matter.Body.setStatic(mango.body, false);
}