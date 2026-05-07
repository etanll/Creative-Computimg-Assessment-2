

//Setup function
function setup() {
  createCanvas(400, 400); //Sets canvas to 400, 400
  background(random(255), random(255), random(255)); //Randomized RGB Background
  
  //The loop starts at 0.12 and repeats 19 times before it stops
  for (let i = 0.12; i < 20; i++) {
    //This sets a randomized RGB color for the fill and stroke
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    //This draws a circle set at X 35 * i, y is set to 70 and diamter is set to 30
    circle(35 * i, 70, 30);
  }
  //The loop starts at 0.12 and repeats 19 times before it stops
  for (let i = 0.12; i < 20; i++) {
    //This sets a randomized RGB color for the fill and stroke
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    //This draws a square at x which is sett to 35 * i and y to 120
    rect(35 * i, 120, 25);
  }
  //The loop starts at 0.12 and repeats 19 times before it stops
  for (let i = 0.12; i < 20; i++) {
    //This sets a randomized RGB color for the fill and stroke
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    //This draws a circle set at X 35 * i, y is set to 190 and diamter is set to 30
    circle(35 * i, 190, 30);
  }
  //The loop starts at 0.12 and repeats 19 times before it stops
  for (let i = 0.12; i < 20; i++) {
    //This sets a randomized RGB color for the fill and stroke
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    //This draws a square at x which is sett to 35 * i and y to 230
    rect(35 * i, 230, 25);
  }
}


