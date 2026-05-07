//Variables for the microphone input
let mic;


function setup() {
  createCanvas(300, 300);
  background(0);
  //Starts the microphone input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  //Calculates height based on the microphone volume
  let micLevel = mic.getLevel() * height + 16;
  background(0)

  //This section is for drawing the bars that react with the microphone volume by going up or down
  fill(0, 255, 0);
  rect(-5, height - micLevel - 0, 50, micLevel);
  
  fill(57, 255, 20);
  rect(50, height - micLevel - 10, 50, micLevel);
  
  fill(118, 255, 3);
  rect(105, height - micLevel - 20, 50, micLevel);
  
  fill(0, 255, 127);
  rect(160, height - micLevel - 30, 50, micLevel);
  
  fill(60, 179, 113);
  rect(215, height - micLevel - 40, 50, micLevel);
  
  fill(34, 139, 34);
  rect(270, height - micLevel - 50, 50, micLevel);

  //This section if for drawing filler bars
  fill(57, 255, 20);
  noStroke();
  rect(50, 280, 50, 100)
  
  fill(118, 255, 3);
  noStroke();
  rect(105, 280, 50, 100)
  
  fill(0, 255, 127);
  noStroke();
  rect(160, 270, 50, 60)
  
  fill(60, 179, 113);
  noStroke();
  rect(215, 240, 50, 100)

  fill(34, 139, 34);
  noStroke();
  rect(270, 240, 30, 100) 
}


