const Engine = Matter.Engine;// to create the physics engine
const World = Matter.World;//is used to create the physical world and add objects to it
const Bodies = Matter.Bodies;//used to create the physical objects which inhabit the world
var engine,world,object,ground ,ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  //creating an engine
  var options={
    //isStatic,restitution,friction,density
    isStatic:true

  }
  var ballOptions={
    restitution:1.0


  }
  engine=Engine.create();
  world=Engine.world();
  //changing the object into the physical object
  object=Bodies.rectangle(200,200,20,20);
  World.add(world,object);
  console.log(object);
  //the values of x and y positions of a object is continuously updated according to the  choice of the user
  //console.log(object.position.x);
  //console.log(object.position.y);
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world.ball);  
  console.log(ground);
}

function draw() {
  background(0);  
  rectMode(CENTER);// to bring the object to the center of the canvas
  //rect(object.position.x,object.position.y,20,20);
 Engine.update(engine);
 
  rect(ground.position.x,ground.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}