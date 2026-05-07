
//This sets the canvas to 600, 600 and also sets the background color to light blue
function setup() {
  createCanvas(600, 600);
  background(173, 216, 230);
}
//Draws the circle
function draw() {
  //This sets the color to a randomized RGB color which changes every frame
  fill(random(255), random(255), random(255));
  //Draws the circles which follows mouse cursor
  circle(mouseX, mouseY,60);
  circle(mouseX, mouseY,50);
  circle(mouseX, mouseY,40);
  circle(mouseX, mouseY,30);
  circle(mouseX, mouseY,20);
  circle(mouseX, mouseY,10);
}

function mousePressed() {
  background(173, 216, 230);
}