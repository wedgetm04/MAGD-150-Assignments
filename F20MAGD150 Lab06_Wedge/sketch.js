let thisTheme = 'Retro Games';
function sayTheme(thisTheme) { 
    console.log('The theme of this lab is ' + thisTheme);
} //Calls the function that tells the theme of lab 6, represented as Pac-Man!

function setup() {
  createCanvas(700, 700);
    background('black');
}

function draw() {
    drawGhosts(); //See function below
    
    push();
    fill('green');
    rect(100, 100, 110, 110);
    translate(10, 40);
    rotate(HALF_PI);
    pop(); //Push and pop allow the rectangle to be drawn, rotated, and translated without disrupting the rest of the code below.
    
    fill('red');
    button = createButton("START");
  button.mousePressed(show_dots);
  button.size(50,50);
    scale(0.75); //Dots and Pac Woman move up a little once the button is pushed.
  button.position(100,300); 
    
fill('yellow'); //Lines 13-19 create the main character of the game, Pac-Woman!
    ellipse(100, 500, 50, 50);
fill('black');
    noStroke();
    ellipse(115, 490, 10, 10);
fill('red');
    ellipse(80, 475, 20, 20);
}

function show_dots() { //Unique function that creates the dots prompted from the button in lines 8/9
    fill('white');
    stroke('white');
    ellipse(700, 100, 50, 50);
    translate(10, 20);
    ellipse(600, 100, 50, 50);
    ellipse(500, 100, 50, 50);
    ellipse(400, 100, 50, 50);
    ellipse(300, 100, 50, 50);
    ellipse(300, 200, 50, 50);
    ellipse(300, 300, 50, 50);
    ellipse(300, 400, 50, 50);
    ellipse(300, 500, 50, 50);
    ellipse(200, 500, 50, 50);
    
}

function drawGhosts() { //The triangles are the Pac-Man "ghosts" spawning from the top left, ready to enter Pac Woman's path.
    fill('blue');
   triangle(30, 75, 58, 20, 86, 75);
    triangle(70, 115, 98, 60, 126, 115);
    triangle(20, 50, 30, 10, 36, 50);
}