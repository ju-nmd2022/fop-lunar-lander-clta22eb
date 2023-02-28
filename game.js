noStroke();

function scenery () {
background(121, 206, 237);
fill(152, 204, 84);
rect(0, 600, width, 200);

fill(105, 67, 44);
rect(50,440,150,120);
triangle(50,440,200,440,125,390);
rect(50,540,10,70);
rect(190,540,10,70);
rect(70,540,10,60);
rect(170,540,10,60);
}


function egg (x,y) {
    push();
    scale(0.5);
    // translate(x,y);
    // rotate(frameCount * 0.002);
    fill(220,220,170);
    beginShape();
    vertex(x,y-50);
    bezierVertex(x + 40, y - 50, x + 100, y + 100, x, y + 100);
    bezierVertex(x - 100, y + 100, x - 40, y - 50, x, y - 50);
    endShape();
    rotate(frameCount * 0.4);
    pop();

}

let y = -100;
// let x = 400;

let velocity = 1;
let acceleration = 0.2;


//CHANGE TO TRUE TO ACTIAVTE GAME
let isGameActive = true;

function draw() {
    clear();
    scenery();
    egg(800,y);
    // y = y + 1; 
    // // x = x + random(-2, 2);

    if (isGameActive) {
        y = y + velocity;
        velocity = velocity + acceleration;
    
        if (mouseIsPressed) {
          velocity = velocity - 0.8;
        }
      
        if (y > 1200 && velocity <= 2) {
          isGameActive = false;
        }
        if (y > 1200 && velocity >= 2){
            clear();
        }
      }
}
  




/*
to do:
- make egg wiggle
- start screen
- end screen
- broken egg

extra
- grass detail
- more details to hen coop
- sun
*/