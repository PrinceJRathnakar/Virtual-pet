//Create variables here
var dog,happydDog,database,foodStock,foodS;
var score=20;



function preload(){
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  var canvas = createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background(46, 139, 87);
textSize(35)
  text("Food Left: "-score, 20,40);
  fill("red");
if(keyWentDown(UP_ARROW)){

  dog.addImage(dogimg2);
}





  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed Bozo milk",100,100);
  
  
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  
database.ref('/').update({
  Food:x
})
}