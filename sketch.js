const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
//var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    box1 = new Box(490,220,50,50);
    box2 = new Box(500,290,50,150);
    box3= new Box(550,270,50,100);
    box4= new Box(590,320,40,40);

    box5= new Box(590,280,40,40);
    box6 = new Box(590,240,40,20);
   // box7= new Box(630,210,40,20);
    box8 = new Box(630,270,50,100);
    box9 = new Box(690,290,50,150);
    box10= new Box(690,220,50,50);
    
}
function draw(){
    background(51);
    Engine.update(engine);
    text("WELCOME_TO_MY_CASTLE",500,120);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   // box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();

    
    
}