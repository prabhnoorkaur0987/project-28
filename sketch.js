
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground
var dustbin1,dustbin2,dustbin3
var dustbinImg,bin
var paperImg,paper


function preload()
{
	dustbinImg=loadImage ("dustbingreen.png")
 paperImg=loadImage("paper2.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  Engine.run(engine);
	//Create the Bodies Here.





 
  
paper=new Paper (100,650,50)





bin=createSprite(600,600,200,20)
  bin.addImage(dustbinImg)
  bin.scale=0.45
ground = new Ground(600,height,1200,20)
dustbin1=new Dustbin(600,680,150,20)
dustbin2=new Dustbin(520,600,20,180)
dustbin3=new Dustbin(680,600,20,180)
sling1=new Launcher(paper.body,{x:100,y:650})
  
}


function draw()
 {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgreen");
  
  drawSprites()

 
  paper.display()
  ground.display();
  dustbin1.display()
  dustbin2.display ()
  dustbin3.display()
sling1.display()
}
function keyPressed()
  {

if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-500})
}


  }
  function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    sling1.fly()
  }
