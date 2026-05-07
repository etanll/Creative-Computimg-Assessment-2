//Variable for Custom font
let custom_font;


//Preloads custom ttf font
function preload() {
  custom_font = loadFont("Orbitron-VariableFont_wght.ttf");
}

//setups the canvas, background, and font
function setup() {
  createCanvas(600, 600);
  background(0);
  fill(random(255), random(255), random(255) ,60); //This randomizes the color everytime it runs
  textFont(custom_font, 80);
  //This displays Hello World
  text("WORLD", 100, 200);
  text("HELLO", 100, 100);
  fill(47, 122, 229);
  text("WORLD", 90, 190);
  text("HELLO", 90, 90);
}