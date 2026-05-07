//Main Menu Variable
let game = "menu";
//Ball1 Variables
let BallX = 50;
let BallY = 0;
let Ball1;
let Ball_speed = 10;

//Ball2 variables
let Ball2X = 300;
let Ball2Y = 0;
let Ball2;
let Ball_speed2 = 12;

//Game Variables
let game_score = 0;
let game_time = 20;
let Arena1;

//Player Variables
let playerX = 200;
let playerY = 450;
let player1;

//preloads all images
function preload() {
   player1 = loadImage("SP1.png");
   Ball1 = loadImage("Ball1.png");
   Ball2 = loadImage("Ball1.png");
   Arena1 = loadImage("Arena1.png");
}   

//Setup function
function setup() {
   createCanvas(500, 500); //Sets canvas to 500, 500
   setInterval(game_time1, 1000); //Runs the countdown timer every 1 second
 }

//Main menu function
//Draws the main menu (Title and click to start game)
function mainMenu(){
  background(173, 216, 230);
  fill(0)
  textSize(50);
  text("Dodgeball", 100, 100);
  textSize(20);
  text("Click to start the game", 100, 200);
  
}
//Displays the Menu if game is equals to menu, if not it runs the game
function draw() {
  if (game === "menu") {
    mainMenu();
  } else {
    
//Displays The score, timer, and background image
   image(Arena1, 0, 0, 500, 500);
   fill(255);
   rect(10, 19, 155, 35);
   textSize(30);
   fill(0);
   text("SCORE:" + game_score, 10, 50);
   fill(255);
   rect(285, 19, 206, 35);
   textSize(30);
  fill(0);
  text("TIME LEFT: " + game_time, 290, 50)
    
//Makes the Player move left or right only
  playerX = mouseX
  image(player1,playerX, playerY, 50, 50);
    
//Sets sprites for the Balls
  image(Ball1, BallX, BallY, 50, 60);
  image(Ball2, Ball2X, Ball2Y, 50, 60);

  //Ball speed
  //This makes the balls move downward
  BallY += Ball_speed;
  Ball2Y += Ball_speed2;
    

    
  //Ball reset 
  if(BallY > 450) {
    BallY = 0;
    BallX = random(0, 400);
    game_score+=1;
   }
    
  if(Ball2Y > 450) {
    Ball2Y = 0;
    Ball2X = random(0, 400);
    game_score+=1;
   }
    
    
  //This checks when one condition is met
  gameWin();
  check_lose1();
  check_lose2();
  }
  
}

//Game start function
//Game starts when mousebutton is clicked
function mousePressed() {
  if (game === "menu") {
    game = "start"
  }
}
//Game time function
//This starts the timer which sutracts 1 from game_time every second
function game_time1() {
  if (game_time > 0) {
    game_time -=1;
    }
}


//Game win function
//Checks when Timer has reached 0 and when called displays the gamewin function
function gameWin() {
 if (game_time === 0){
   background(0, 255, 0);
   fill(0);
   textSize(50);
   text("YOU WIN", 115, 200);
   text("SCORE: " + game_score, 135, 280);
   textSize(35);
   text("PRESS R TO START AGAIN", 20, 350);
   noLoop(); //This stops the game when gamewin is called
  }

}

//Check lose function
//Checks when the 1st ball hits the player and calls gamelose
function check_lose1(){
  if (dist(playerX, playerY, BallX, BallY) < 40){
    gameLose();
    }
}
//Check lose function 2
//Checks when the 2nd ball hits the player and calls gamelose
function check_lose2(){
  if (dist(playerX, playerY, Ball2X, Ball2Y) < 40){
    gameLose();
   }
}

//Game lose function
//Displays You lose, score, and R to restart
function gameLose(){
  background(255, 0, 0)
  fill(0);
  textSize(50)
  text("YOU LOSE!", 110, 200);
  text("SCORE: " + game_score, 135, 280);
  textSize(35);
  text("PRESS R TO START AGAIN", 20, 350);
  noLoop(); //This stops the game when gamelose is called
}

//Restart function
//Resets all variables when restart function is called
function restart() {
  BallX = 50;
  BallY = 0;
  Ball2X = 300;
  Ball2Y = 0;
  game_score = 0;
  game_time = 20;
}

//Restart key Function
//R calls restart(); function
function keyPressed() {
  if (key === "r") {
    restart();
    loop();
  }
}




