
//This sets the canvas to 400, 400
function setup() {
  createCanvas(400, 400);
  background(0);
}
//This function draws all the elements of the alien
function draw() {
  //ALIEN HEAD
  fill(108, 196, 23)
  ellipse(200, 200, 130, 200);
  //ALIEN EYES 1
  fill(0)
  ellipse(170, 170, 20, 40);
  ellipse(230, 170, 20, 40);
  //ALIEN EYES 2
  fill(255)
  ellipse(170, 170, 10, 20);
  ellipse(230, 170, 10, 20);
  //ALIEN ANTENNAS
  fill(108, 196, 23)
  strokeWeight();
  rect(230, 60, 20, 80)
  rect(150, 60, 20, 80)
  //ALIEN ATENNAS 2
  fill(192, 192, 192)
  ellipse(240, 60, 50, 25)
  ellipse(160, 60, 50, 25)
  //ALIEN BODY
  strokeWeight(0);
  fill(108, 196, 23)
  ellipse(200, 390, 160, 290);
  //ALIEN SMILE
  strokeWeight(3);
  arc(200, 230, 50, 30, 0, PI);
}