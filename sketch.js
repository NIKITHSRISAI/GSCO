var wall,car;
var speed,weight;




function setup() {
 createCanvas(1600,400);
 

 speed = random(55,90);
 weight = random(400,1500);

 car = createSprite(50,200,70,50);
 car.velocityX = speed;
 wall = createSprite(1360,200,100,400);
 car.shapeColor = "blue";
 wall.shapeColor = "brown";
   
}

function draw() {
  background("black");  
  


if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX = 0;
var deformation =0.5*weight*speed*speed/22500;
if(deformation>180)
{

car.shapeColor = rgb(255,0,0);

Text("Speed is:"+speed,400,50)
Text("Weight is:"+weight,400,150)
Text("Deformation is:"+deformation,400,250)
Text("Deformation Rating = D",400,350)

}
if(deformation<180 && deformation>100)
{
car.shapeColor = rgb(230,230,0);

Text("Speed is:"+speed,400,50)
Text("Weight is:"+weight,400,150)
Text("Deformation is:"+deformation,400,250)
Text("Deformation Rating = C",400,350)

}
if(deformation<100)
{

car.shapeColor = rgb(0,255,0);

Text("Speed is:"+speed,400,50)
Text("Weight is:"+weight,400,150)
Text("Deformation is:"+deformation,400,250)
Text("Deformation Rating = B",400,350)

}

}




drawSprites();


}
















