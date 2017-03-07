var newWidth = 50;
var newHeight = 50;

//setup function execute once
function setup(){
 createCanvas(600,400);  
background(204, 255, 153);
}

// draw function loops forever
function draw(){
 // background(204, 255, 153);
 if(mouseIsPressed){
  noStroke();
  fill(153, 255, 153,100);
  ellipse(mouseX,mouseY,newWidth,newHeight); 
 }

}