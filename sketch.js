
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var myEngine,mtWorld;
var tree,ground,boyimg;
var stone,rope;
var mango1,mango2,mango3,mango4,mango5;
var treeimg;

function preload()
{
	boyimg= loadImage("images/boy.png");
	treeimg=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	//tree = new Tree(900,500,400,600);

	ground = new Ground(600,790,1200,20);

	stone= new Stone(300,500,20,10);

	mango1 = new Mango(900,370,25,25);
	mango2 = new Mango(850,340,20,25);
	mango3 = new Mango(930,310,25,25);
	mango4 = new Mango(810,410,25,20);
	mango5 = new Mango(970,390,20,15);

	rope = new Rope(stone.body,{x:290,y:625});
/*
	var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 1200,
		  height: 800,
		  wireframes: false
		}
	  });
	  Render.run(render);	*/

	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightskyblue");
  
 // tree.display();
  image(boyimg,250,550,200,300);
  image(treeimg,700,200,400,600);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

 rope.display();

 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:300,y:500});
		rope.attach(stone.body);
	}
}

function detectcollision(st,mg){
	/*var collision = Matter.SAT.collides(st,mg);
	if(collision.collided){
		Matter.Body.setStatic(mg.body,false);
	}*/
	mangopos=mg.body.position;
	stonepos=st.body.position;
	var distance =dist(mangopos.x,mangopos.y,stonepos.x,stonepos.y);
	if(distance<=st.r+mg.r){
		Matter.Body.setStatic(mg.body,false);
	}


}



