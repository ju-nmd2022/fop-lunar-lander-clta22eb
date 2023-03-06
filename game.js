//html setup
function setup(){
  createCanvas(800,700);
  frameRate(30);
}

//background
function scenery () {
  noStroke();
  background(140, 216, 237);
  fill(160, 204, 84);
  rect(0, 600, width, 200);

  //grass spikes
  let tX = 0;
 
  while (tX < width) {
    triangle(tX, 600, tX +20, 590, tX +40, 600);
    tX = tX + 40;
  }

  //hen coop
  fill(105, 67, 44);
  rect(50,440,150,120);
  triangle(50,440,200,440,125,390);
  rect(50,540,10,70);
  rect(190,540,10,70);
  rect(70,540,10,60);
  rect(170,540,10,60);
  push();
  fill(0);
  rect(100,510, 50);
  pop();


  //clouds
  let cX = 300;
  let cY = 300;
  
  push();
  fill(255);
  ellipse(cX+50,cY-10, 110,100);
  ellipse(cX+90,cY+50,120,110);
  ellipse(cX,cY+30,130,120);
  ellipse(cX-200,cY-200,110,100);
  ellipse(cX-250,cY-220,110,100);
  ellipse(cX+300,cY-50,120,110);
  ellipse(cX+350,cY-80,110,100);
  pop();
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

//basket
let basketX = 300;
let basketY = 650;

function basket() {
  push();
  fill(105, 67, 44,200);
  rect(basketX-50, basketY-50,100,80,0,0,40);
  pop();
} 

//EGG (aka the lunar lander)
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

//losing egg
function brokenEgg (bX,bY) {
  //white
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
  //yellow
  fill(245, 215, 66);
  ellipse(bX,bY+2,50,20);
  pop();
}

//winning egg
function happyEgg (hX,hY) {
  push();
  scale(0.5);
  fill(220,220,170);
  beginShape();
  vertex(hX,hY-50);
  bezierVertex(hX + 40, hY - 50, hX + 100, hY + 100, hX, hY + 100);
  bezierVertex(hX - 100, hY + 100, hX - 40, hY - 50, hX, hY - 50);
  endShape(); 
  //eyes
  stroke(0);
  strokeCap(ROUND);
  strokeWeight(10);
  line(hX-15,hY, hX-15, hY+20);
  line(hX+15,hY, hX+15, hY+20);
  line(hX-35, hY+ 40, hX+35, hY+ 40);
  //smile
  noFill();
  beginShape();
  vertex(hX-35, hY+ 40);
  bezierVertex(hX-30,hY+90,hX+30,hY+90,hX+35,hY+40);
  endShape();
  pop();
}

//STARTSCREEN
function startScreen () {
  scenery();
  egg(x,y);
  //game name
  fill(0);
  textStyle(BOLD);
  textSize(64);
  text("THE EGG HERO 2.0",100,100);
  //rectangle
  push();
  fill(220,220,170);
  rect(100,150,600,300,30);
  rect(250, 605, 300,70, 10);
  pop();
  //controls
  button(200, 300, -90);
  button(400, 300, 0);
  button(600, 300, 90);
  //text instructions
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
  push();
  fill(220,220,170);
  rect(100,150,600,300,30);
  pop();

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
function resultLose() {
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

//variables for egg
let y = -100;
let x = 800;

let velocity = 1;
let acceleration = 0.2;

//for screen changes
let isGameActive = false; 
let state = "start";

//spacebar functions (making the game being able to loop)
function keyPressed () {
  if (keyCode === 32 && state === "start") {
    state = "game";
    isGameActive = true;
  } else if (keyCode === 32 && state === "resultWin") {
    state = "start";
    y = -100;
    x = 800;
    velocity = 1;
    acceleration = 0.2;
    basketX = random(50, 750);
  } else if (keyCode === 32 && state === "resultLose") {
    state = "start";
    y = -100;
    x = 800;
    velocity = 1;
    acceleration = 0.2;
    basketX = random(50, 750);
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
    
    //moving the egg sideways
    if (keyIsDown(38)) {
      velocity = velocity - 0.8;
      } else if (keyIsDown(37)) {
        x = x - 3;
      } else if (keyIsDown(39)) {
        x = x + 3;
      }
    }

    //lose or win

    //win when speed is slow and x is smaller that right side of basket AND bigger than right side
    if (y > 1200 && velocity < 2.5 && x/2 < basketX+25 && x/2 > basketX-25) {
      state = "resultWin";
      isGameActive = false;
      resultWin();
      happyEgg(x,y);

    //lose when speed is slow and x is smaller than left side of basket AND bigger than left side
    } else if (y > 1200 && velocity < 2.5 && x/2 < basketX-25 && x/2 > basketX+25) {
      state = "resultLose";
      isGameActive = false;
      resultLose();
      brokenEgg(x/2,(y/2)+15);

    //makes game lose when going to fast (cause only using else would include when egg is at a higher y, and then you'd lose directly)
    } else if (y > 1200 && velocity > 2.5) {
      state = "resultLose";
      isGameActive = false;
      resultLose();
      brokenEgg(x/2,(y/2)+15);
    }
}

/*
to do: 
- upload planning document to github

*/ 