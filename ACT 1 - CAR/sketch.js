
//Sets the canvas to 400, 400 and the background to white
function setup() {
  createCanvas(400, 400);
  background(173, 216, 230);

}

//This function draws all the shapes to draw the car
function draw() {
  
  
  //Road
  fill(59, 71, 71);
  rect(0, 300, 1000, 320);
  fill(255);
  rect(10, 340, 100, 10);
  rect(200, 340, 100, 10);
  rect(390, 340, 100, 10);
  
  //Sun
  fill(255, 223, 34);
  circle(380, 30, 120);
  
  //CAR BODY
  fill(39, 124, 224); //Sets fill to blue
  rect(80, 220, 250, 80, 20);
  
  //CAR WINDOW AND ROOF
  fill(0); //Sets fill to black
  stroke(39, 124, 224); //Sets stroke to blue
  strokeWeight(4)
  quad(160, 150, 220, 150, 300, 220, 100, 220); 
  
  //CAR HEADLIGHTS
  
  fill(255); //Sets fill to white
  rect(310, 230, 20, 15, 5);
  
  //CAR TAIL LIGHTS
  fill(255, 0, 0); //Sets fill to white
  rect(80, 230, 15, 15, 5);
  
  //CAR WHEELS AND RIM
  noStroke(); 
  fill(0);  //Sets fill to black
  circle(130, 300, 60)
  circle(271, 300, 60)
  fill(188, 198, 204); //Sets fill to light grey
  circle(130, 300, 45)
  circle(271, 300, 45)

}



