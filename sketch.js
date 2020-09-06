const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;




var world, engine, ground;
var block1, block2, block3, block4,block5,block6,block7, block8, block9, block10,block11, block12, block13, block14, block15;
var totalBlocks;

var ball;
var string;

var x = 200
var y = 20

function setup()
{

  var bg = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

    engine.world.gravity.y = 4;

    // bottom.
    block1 = Bodies.rectangle(50, 200, 40, 40);
    World.add(world, block1);

    block2 = Bodies.rectangle(90, 200, 40, 40);
    World.add(world, block2);

    block3 = Bodies.rectangle(130, 200, 40, 40);
    World.add(world, block3);

    block4 = Bodies.rectangle(170, 200, 40, 40);
    World.add(world, block4);

    block5 = Bodies.rectangle(210, 200, 40, 40);
    World.add(world, block5);

    // second last.
    block6 = Bodies.rectangle(70, 160, 40, 40);
    World.add(world, block6);

    block7 = Bodies.rectangle(110, 160, 40, 40);
    World.add(world, block7);

    block8 = Bodies.rectangle(150, 160, 40, 40);
    World.add(world, block8);

    block9 = Bodies.rectangle(190, 160, 40, 40);
    World.add(world, block9);

    // 2nd line
    block10 = Bodies.rectangle(90, 120, 40, 40);
    World.add(world, block10);

    block11 = Bodies.rectangle(130, 120, 40, 40);
    World.add(world, block11);

    block12 = Bodies.rectangle(170, 120, 40, 40);
    World.add(world, block12);

    block13 = Bodies.rectangle(150, 80, 40, 40);
    World.add(world, block13);

    block14 = Bodies.rectangle(110, 80, 40, 40);
    World.add(world, block14);

    block15 = Bodies.rectangle(130, 40, 40, 40);
    World.add(world, block15);




    ball = Bodies.circle(600,100 , 20);
    World.add(world, ball);

    var options = { bodyA:ball ,pointB:{x: ball.position.x, y: ball.position.y} ,length:10, stiffness: 0.2};

    string = Matter.Constraint.create(options);
    World.add(world, string);

    ground = Bodies.rectangle(130, 225, 250, 10, {isStatic: true})
    World.add(world, ground);

}
var v = 255;
var score = 0;

function  draw(){
  
  background("white")
  Engine.update(engine);

  setBG();

    rectMode(CENTER);
  if(block1.speed <= 3){
    push()
    fill("yellow")
    rect(block1.position.x ,block1.position.y, 40, 40);
    pop()
  }
  else if(block1.speed >= 3 && block1.speed <= 6){
    push()
    v-= 5;
    fill(255, v)
    rect(block1.position.x ,block1.position.y, 40, 40);
    fill("white")

    score++
    pop()
  }
  //textSize(10)
  //text(score, 400, 200)
    rect(block2.position.x ,block2.position.y, 40, 40);
    rect(block3.position.x ,block3.position.y, 40, 40);
    rect(block4.position.x ,block4.position.y, 40, 40);
    rect(block5.position.x ,block5.position.y, 40, 40);
    rect(block6.position.x ,block6.position.y, 40, 40);
    rect(block7.position.x ,block7.position.y, 40, 40);
    rect(block8.position.x ,block8.position.y, 40, 40);
    rect(block9.position.x ,block9.position.y, 40, 40);
    rect(block10.position.x ,block10.position.y, 40, 40);
    rect(block11.position.x ,block11.position.y, 40, 40);
    rect(block12.position.x ,block12.position.y, 40, 40);
    rect(block13.position.x ,block13.position.y, 40, 40);
    rect(block14.position.x ,block14.position.y, 40, 40);
    rect(block15.position.x ,block15.position.y, 40, 40);
    rect(ground.position.x, ground.position.y, 250, 10);

    ellipse(ball.position.x, ball.position.y, 40, 40)
    if(string.bodyA != null){
      
       line(string.bodyA.position.x, string.bodyA.position.y, string.pointB.x, string.pointB.y)
    }
   

  }

function mouseDragged(){

    Matter.Body.setPosition(ball, {x:mouseX, y: mouseY})

}
function mouseReleased()
{

  string.bodyA = null

}
function keyPressed(){

  if(keyCode == 32){

    string.bodyA = ball

  }

}
async function setBG(){

  var reponse = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseInJSON = await reponse.json();

  var day = await responseInJSON.DAYTIME;
  var hour = day.slice(11,13)
    
  if(hour>= 000 && hour<= 000){
      background("black")
  }
  else{
      background("white")
  }

}