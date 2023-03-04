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
  rect(250, 605, 300,70, 10);
  pop();

  button(200, 300, -90);
  button(400, 300, 0);
  button(600, 300, 90);

  push();
  textSize(40);
  text("CONTROLS:", 290, 210);
  text("MAKE THE EGG LAND SOFTLY \n      IN THE BASKET TO WIN!", 100,500);
  pop();

  push();
  textSize(30);
  textStyle(NORMAL);
  text("move left", 140, 400);
  text("move up", 345, 400);
  text("move right", 530, 400);
  textAlign(CENTER);
  text("Press space to start", 400, 650);
  pop();
 
}

//result WIN
function resultWin () {
  egg();
  push();
  fill(220,220,170);
  rect(100,150,600,300,30); 
  push();
  fill(0);
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  text("YOU SAVED THE \n EGG! :D", 400, 250);

  textSize(30);
  textStyle(NORMAL);
  text("Press space to play again", 400, 400);
  pop();
}
//result LOSE
function resultLose () {
  egg();
  push();
  fill(220,220,170);
  rect(100,150,600,300,30);
  pop();

  push();
  fill(0);
  textSize(40);
  textStyle(BOLD);
  textAlign(CENTER);
  text("YOU CRACKED THE \n EGG!! :(", 400, 250);

  textSize(30);
  textStyle(NORMAL);
  text("Press space to try again", 400, 400);
  pop();
}

//basket
let basketX = random(50, 750);
let basketY = 650;

function basket (){
push();
fill(100,100,100,200);
rect(basketX-50, basketY-50,100,50,0,0,40);
pop();

} 


//egg (aka the lunar)
function egg (x,y) {
  if (state === "game") {
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
}

// broken egg
function brokenEgg (bX,bY) {
  push();
  fill(255);
  beginShape();
  vertex(bX+5, bY-20);
  bezierVertex(bX+25,bY-20,bX+25,bY-5,bX+35,bY-5);
  bezierVertex(bX+40,bY-4,bX+70,bY-15,bX+75,bY);
  bezierVertex(bX+80,bY+15,bX+35,bY+10,bX+30,bY+15);
  bezierVertex(bX+25,bY+20,bX+45,bY+20,bX+45,bY+25);
  bezierVertex(bX+45,bY+30,bX-5,bY+40,bX-30,bY+25);
  bezierVertex(bX-35,bY+15,bX-10,bY+15,bX-40,bY+10);
  bezierVertex(bX-70,bY+10,bX-50,bY-10,bX-40,bY-10);
  bezierVertex(bX,bY-10,bX-30,bY-20,bX+5,bY-20);
  endShape();

  fill(245, 215, 66);
  ellipse(bX,bY+2,50,20);
  pop();
}

let y = -100;
let x = 800;

let velocity = 1;
let acceleration = 0.2;

let isGameActive = false; 
let state = "start";

function keyPressed () {
  if (keyCode === 32 && state === "start"){
    state = "game";
    isGameActive = true;
  } else if (keyCode === 32 && state === "resultWin") {
    state = "start";
    y = -100;
    x = 800;
    velocity = 1;
    acceleration = 0.2;
    redraw(); 
  } else if (keyCode === 32 && state === "resultLose") {
    state = "start";
    y = -100;
    x = 800;
    velocity = 1;
    acceleration = 0.2;
    redraw(); 
  }
}

//THE GAME IN ACTION
function draw() {
    scenery();
    egg(x,y);
    basket();
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

    if (y > 1200 && velocity <= 2) {
      state = "resultWin";
      isGameActive = false;
      resultWin();
      }

    if (y > 1200 && velocity >= 2){
      state = "resultLose";
      isGameActive = false;
      resultLose();
      brokenEgg(x/2,623);
      }
}   


/*
to do:
- particles (look at video)
- land in basket, make it work

extra
- grass detail (use array, might be annoying)
- more details to hen coop
*/