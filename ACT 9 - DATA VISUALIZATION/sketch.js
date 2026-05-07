
//Variable for CSV file
let chart;
//Preloads the CSV file
function preload() {
  chart = loadTable('Data.csv', 'csv', 'header');
}
//This sets the canvas to 100, 700 and sets the background color to white
function setup() {
  createCanvas(1000, 700);
  background(255);
//This sets the width of each bar to 100px
  let barWidth = 100;
  //Sets the text size of planets to 50px
   textSize(50);
  //displays the text planet with a x of 450 and y of 50
   text("PLANETS", 450,50);

  //This loops through every row in the table
  for (let i = 0; i < chart.getRowCount(); i++) {
    //These extract the planet name, gravity, and the order from the csv table
    let planet = chart.getString(i, 'Planet');
    let planet_grav = chart.getString(i, 'Gravity');
    let order = chart.getString(i, 'Order');
    //Parsefloat converts the gravity text into a decimal number
    let convert = parseFloat(planet_grav);
    //This sets the x cooridnates so the bars have a gap
    let x = 30 + i * (barWidth + 19);
    //This sets the height of the barwidth
    let h = map(convert, 0, 4, 0, height);
    
    
    fill(random(255), random(255), random(255)); // Sets a random color for each bar
    rect(x, height - h - 40, barWidth, h); //Draws the bar based on the gravity
    fill(0);
    textAlign(CENTER); //Centers text
    textSize(15);
    //Displays the Planet name, gravity, and order 
    text(planet, x + barWidth / 2, height - 20);
    text(convert, x + barWidth / 2, height - 75);
    text(order, x + barWidth / 2, height - 55);
  }
}