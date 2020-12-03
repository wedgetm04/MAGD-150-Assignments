function setup() {
  createCanvas(200,200);
    background(90, 30, 103);
}

function draw() {
  colorMode(RGB, 110);
    beginShape(POINTS);
    vertex(30, 50);
    vertex(50, 30);
    vertex(100, 140);
    vertex(140, 100);
    vertex(70, 90);
    endShape();
    
noStroke();
    let c = color(70, 100, 44);
    fill(c);
    arc(50, 80, 100, 100, QUARTER_PI, PI+QUARTER_PI);
    colorMode(HSB, 150);

noFill();
    stroke(20, 100, 70);
    line(100, 100, 50, 30);
    line(30, 50, 100, 100);
    stroke(50, 20, 50, 66);
    bezier(70, 30, 50, 100, 49, 70);
    
noFill();
    stroke(150);
    ellipse(150, 80, 70, 70);
stroke(100);
    noFill();
    quad(38, 51, 46, 40, 69, 20, 38, 100);
   
stroke(100, 50, 100);
    colorMode('#ABBBCA');
    ellipse(100, 100, 80, 70);
    
    
}