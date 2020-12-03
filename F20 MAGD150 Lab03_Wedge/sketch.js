function setup() {
  createCanvas(200,200);
    background(90, 30, 103);
}

function draw() {
 stroke(150);
    print("The theme of this lab is bubbles!");
    ellipse(mouseX, 70, mouseY, 10);
    
noStroke();
    fill(RGB, 10, 40, 50);
    rect(mouseY, 20.5, mouseY, 10);
    
stroke(0);
    text(frameCount, width / 10, height / 10);
    print("The number in the top left corner is the frame count");
    
console.log(50 < 10); //outputs to the console
    console.log(60 == 60.0); //outputs to the console
    
noFill();
    stroke(10);
    rect(2 + 1, 10, 5, 6);

let value = 80;
    let c = map(value, 0, 90, 50, 100);
    ellipse(c, 40, 40, 50);
    
let deg = 33.3;
    let rad = radians(deg);
    print(deg + " degrees is " + rad + " radians.");
    
let angle = 45.0;
    let x = sin(angle);
    print("The sine of " + angle + " is " + x);
}