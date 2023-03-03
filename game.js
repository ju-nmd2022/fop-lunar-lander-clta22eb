noStroke();

function scenery () {
  background(140, 216, 237);
  fill(160, 204, 84);
  rect(0, 600, width, 200);

  fill(105, 67, 44);
  rect(50,440,150,120);
  triangle(50,440,200,440,125,390);
  rect(50,540,10,70);
  rect(190,540,10,70);
  rect(70,540,10,60);
  rect(170,540,10,60);
} 

// button controls
function button (buttonX, buttonY,rotateButton) {
  push();
  fill(0);
  rect(buttonX-40,buttonY-40,80, 80, 10);
  fill(255);
  translate(buttonX, buttonY);
  angleMode(DEGREES);
  rotate(rotateButton);
  triangle(0, -15 ,20, 10, -20, 10);
  pop();
}

//STARTSCREEN
function startScreen () {
  scenery();
  egg(x,y);
  fill(0);
  textStyle(BOLD);
  textSize(64);
  text("THE EGG HERO 2.0",100,100);

  push();
  fill(220,220,170);
  rect(100,150,600,300,30);
  pop();

  button(200, 300, -90);
  button(400, 300, 0);
  button(600, 300, 90);

  
  textSize(40);
  text("CONTROLS:", 290, 210);
  //text("MAKE THE EGG LAND SOFTLY \n      IN THE BASKET TO WIN!", 100,500);

  
  textSize(30);
  textStyle(NORMAL);
  text("move left", 140, 400);
  text("move up", 345, 400);
  text("move right", 530, 400);

}

//result WIN
function resultWin () {
  egg();
  push();
  fill(220,220,170);
  rect(100,150,600,300,30); 
  pop();
  fill(0);
  text("YOU SAVED THE EGG!!", 400, 200);
}

//result LOSE
function resultLose () {
  egg();
  push();
  fill(220,220,170);
  rect(100,150,600,300,30);
  pop();
  fill(0);
  text("YOU CRACKED THE EGG!!", 400, 200);
}

//game ON
function gameOn () {
}



//egg (aka the lunar)
function egg (x,y) {
    push();
    scale(0.5);
    fill(220,220,170);
    beginShape();
    vertex(x,y-50);
    bezierVertex(x + 40, y - 50, x + 100, y + 100, x, y + 100);
    bezierVertex(x - 100, y + 100, x - 40, y - 50, x, y - 50);
    endShape(); 
    pop();
} 
 
// let eggX = 400;
// let eggY = 500;

// //cracked egg
// function brokenEgg (eggX,eggY) {
//   push();
//   fill(255);
//   ellipse(eggX,eggY, 50,50);
//   pop();
// }

let y = -100;
let x = 800;

let velocity = 1;
let acceleration = 0.2;


//CHANGE TO TRUE TO ACTIAVTE GAME
let isGameActive = false; 
let state = "start";

function keyPressed () {
  if (keyCode === 32 && state === "start"){
    isGameActive = true;
    state = "game";
  } else if (keyCode === 32 && state === "game") {
    state = "start";
  }
}

function draw() {
    scenery();
    egg(x,y);
    if (state === "start"){
      startScreen();
      isGameActive = false;
    }

    //egg movement
    if (isGameActive === true) {
        y = y + velocity; 
        velocity = velocity + acceleration;
    
        if (keyIsDown(38)) {
          velocity = velocity - 0.8;
        }
        if (keyIsDown(37)) {
          x = x - 3;
        }
        if (keyIsDown(39)) {
          x = x + 3;
        }
      }

    if (y > 1200 && velocity <= 1.5 && state === "game") {
      isGameActive = false;
      resultWin();
      }

    if (y > 1200 && velocity >= 1.5 && state === "game"){
      isGameActive = false;
      resultLose();
      push();
      fill(255);
      ellipse(x/2,620,50);
      pop();
      } 
}   

   
 
//use of placement of basket
//the normal way of saying random
const randomNumber = Math.floor(Math.random() * 100);
// the p5 way of saying random
random([min], [max]);

/*
to do:
- start screen
- end screen
- broken egg

extra
- grass detail
- more details to hen coop
- sun
*/