const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg;
var bunny,bunnyImg;
var watermelon;
var button
function preload(){
bg = loadImage("background.png");
bunnyImg = loadImage("Rabbit-01.png");
watermelon = loadImage("melon.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
bunny = createSprite(250,600,10,30)
bunny.addImage("feedBunny",bunnyImg)
bunny.scale=0.3;
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  button = createImg("cut.png")
  button.size(50,50)
  button.position(220,10)
  button.mouseClicked(drop)

  fruit_con = new Link(rope,fruit);
createImg
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(bg)
  rope.show();
  imageMode(CENTER);
  image(watermelon,fruit.position.x,fruit.position.y,100,100);
  
  Engine.update(engine);
  ground.show();
drawSprites();
 
   
}
function drop(){
rope.break()
fruit_con.detach()
fruit_con=null;



}