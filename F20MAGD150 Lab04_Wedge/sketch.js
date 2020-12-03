function setup() {
  createCanvas(500, 500);
    background('orange');
    stroke(100);
    frameRate(10);
}

function draw() {
    noStroke();
    fill('tan'); //Crust
    ellipse(200, 200, 300, 300);
    
    noStroke();
    fill('yellow'); //Cheese
    ellipse(200, 200, 250, 250);
    
    noStroke(); //Shadow
    fill('gray');
    if (mouseIsPressed) {
    ellipse(170, 170, 300, 300);
  } else {
    ellipse(40, 40, 70, 70);
  }

  print(mouseIsPressed);

let value = 'red';    //Pepperoni
 fill(value);
  ellipse(150, 150, 70, 70);
    ellipse(250, 250, 70, 70);
}
function mousePressed() { //Shadow
  if (value === 80) {
    value = 30;
  } else {
    value = 70;
  }
    
     if (keyIsPressed === true) {
    fill('pink');
  } else {
    fill('brown');
  }
  ellipse(150, 150, 100, 100);
    
    let value = 0;
  fill(value);
  rect(250, 250, 350, 350); //Creates a plate
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 0;
  } else if (keyCode === RIGHT_ARROW) {
    value = 100;
  }
  
    let y = 100;
    background(100);
    y = y - 1;
    if (y < 0) {
        y = height;
    }
    line(0, y, 300, y);
    }