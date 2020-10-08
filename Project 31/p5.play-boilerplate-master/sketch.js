const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinkos=[]
var particles= []


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(260,390,580,20)
  d1 = new Division(7,390,10,350)
  d2 = new Division(80,390,10,350)
  d3 = new Division(150,390,10,350)
  d4 = new Division(230,390,10,350)
  d5 = new Division(310,390,10,350)
  d6 = new Division(390,390,10,350)
  d7 = new Division(470,390,10,350)
  d8 = new Division(550,390,10,350)

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();

  for (var j= 40; j <=width; j=j+50)
  {
  plinkos.push (new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50) 
  {
  plinkos.push(new Plinko(j, 175));
  } 
    

}