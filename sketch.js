const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var background , bgImg;
var boy1 ;
var snow;
var snow1 , snow2 ;
var snow3 , snow4 ;
var snow5 , snow6 ;
var snow7 , snow8 ;
var snow9 , snow10;
var snow11, snow12;
var snow13;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snow = loadAnimation("snow4.webp" , "snow5.webp");

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  snow1 = new Snowfall(30 , 10 , 50 , 50 );
  snow2 = new Snowfall(90 , 0 , 50 , 50 );
  snow3 = new Snowfall(190 , 90 , 50 , 50);
  snow4 = new Snowfall(140 , 200 , 50 , 50);
  snow5 = new Snowfall(120 , 120 , 50 , 50);
  snow6 = new Snowfall(210 , 300 , 50 , 50 );
  snow7 = new Snowfall(270 , 16 , 50 , 50);
  snow8 = new Snowfall(330 , 90 , 50 , 50 );
  snow9 = new Snowfall(490 , 100 , 50 , 50 );
  snow10= new Snowfall(590 , 100 , 50 , 50);
  snow11= new Snowfall(610 , 50 , 50 , 50);
  snow12= new Snowfall(670 , 100 , 50 , 50);
  snow13= new Snowfall(740 , 100 , 50 , 50);
  snow = createSprite(400 , 40);
  snow.addAnimation("snow4.webp","snowfall5.webp");
  snow.scale = 50.1;
}

function draw() {
  background(bgImg);
  Engine.update(engine); 
  snow.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  drawSprites();
  
}