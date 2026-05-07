


//Setup function
function setup() {
  createCanvas(1500, 1500); //Sets canvas to 1500, 1500
  background(random(255), random(255), random(255), 70); //Sets randomized RGB background
}


//Draw function
function draw() {
  stroke(255, 215, 0); //Sets stroke to Gold/yellow
  strokeWeight(2); //Strokeweight is 2
  fill(random(255), random(255), random(255), 50); //Sets the color to randomized and 50 makes with a little bit transparent
  
  //This makes the rectangle draw and follow your mouse cursor
  rect(mouseX, mouseY, 30)
  rect(mouseX, mouseY, 40)
  

}
//mousePressed function
function mousePressed() {
  background(random(255), random(255), random(255), 70);//when clicked it changes the background color and trail goes more transparent 
  fill(random(255), random(255), random(255));
  
}

