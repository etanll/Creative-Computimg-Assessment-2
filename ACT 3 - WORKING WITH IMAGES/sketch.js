let pic_car;
// Preloads car Image
function preload() {
  pic_car = loadImage('MitGo.jpg');
  
}
//Sets canvas to 600, 700 and Background to lightblue
function setup() {
  createCanvas(600, 700);  
   background(173, 216, 230);
 
}

function draw() {
  //X and Y random generator
  let x1 = random(width);
  let y1 = random(height);

  // Sets the border color to gold and half transparent randomized RGB fill of the triangle
  stroke(255, 215, 0);
  strokeWeight(0.1);
  fill(random(255), random(255), random(255), 15)
  //Draws the circle at random positions
  circle(x1, y1, 100);
  //GTO TEXT
  fill(0);
  textSize(80);
  text("GTO", 220, 660);
  //Push and pop function
  push();
  clip(mask);
  image(pic_car, 0, 0, 600, 600); //draws the car image
  pop();

}

// Mask function
function mask() {
  
  circle(300, 300, 550);
}











