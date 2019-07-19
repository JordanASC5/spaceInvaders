/*
Pseudo code:

Main goals:
1. Create a canvas and a black background.

2. Create a ship at the bottom of the screen.

3. Allow that ship to move to the left or right when the user clicks on the approprate keyboard button.

4. When the user clicks on the space bar, allow for a projectile to shoot from the ship upward.

5. Create an enemy that can be destroyed when the projectile hits it.

6. Display a win screen if enemy has been destroyed.

Extra credit:
1. Allow the enemy to move in a pattern similar to traditional space invaders.
2. Allow the enemy to be able to hurt the player when touched (one hit kills are ok)
3. Create a way to reset the board
4. Track the users score
  - Number of hits
  - Number of ships remaining
5. Randomize enemy speed.
//if user presses right, use shipX ++;
left, use shipX --;
*/
var shipX;
var shipImage;
var bulletX;

function preload() {
  shipImage = loadImage('images/spaceship.png');
  spaceBkg = loadImage('images/spaceBkg.png')
}


function setup() {
  createCanvas(500, 500);
  shipX = width / 2 - 25;
}

function draw() {
  background("black");
  image(spaceBkg, 0 ,0);
  fill('white');
  rect(257, 330, 8, 35, 0);
    //rect(shipX, height - 100, 50, 100);
    image(shipImage, shipX, height - 100);
  if(keyIsDown(LEFT_ARROW)) {
    shipX -= 3;
  }
  if(keyIsDown(LEFT_ARROW) && shipX <= 5){
    shipX += 3;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    shipX += 3;
  }
  if(keyIsDown(RIGHT_ARROW) && shipX >= 420){
    shipX -= 3;
  }
}




// function keyPressed() {
//   if(keyCode == LEFT_ARROW) {
//     shipX-= 30;
//   }else{
//     if(keyCode == RIGHT_ARROW) {
//       shipX+= 30;
//     }
//   }
// }
function keyIsDown() {
  if(keyIsDown(LEFT_ARROW)) {
    shipX -= 30;
  }
}

//image(shipImage , shipX, height -100);