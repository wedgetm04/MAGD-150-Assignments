var rain = [] //Creates array for rain so that multiple drops fall

function setup() {
   createCanvas(800, 500)
    background('gray');
  for(var i = 0; i < 200; i++) {
    rain[i] = new Rain();
}
}

function draw() {
   fill('brown'); //Creates tree trunks
    rect(200, 300, 100, 200);
fill('green'); //Creates tree "leaves"/tops. This and trunks are repeated for two trees.
    ellipse(250, 250, 200, 200);
fill('brown');
    rect(500, 300, 100, 200);
fill('green');
    ellipse(550, 300, 200, 200);
  for(var i = 0; i < 200; i++) {
  rain[i].display();
  rain[i].fall();
}
}

function Rain() { //Class function to create the rain
  this.x = random(0, width);
  this.y = random(0, -height);
    
  this.display = function() { //Displays the rain as blue and falling randomly
    noStroke();
    fill('blue');
    ellipse(this.x, this.y, random(0, 2), random(0, 2));   
  }
  this.fall = function() { //Sets the speed at which the rain falls, incorporates gravity at 1 with the random speed. The rain eventually fills up the screen with blue streaks.
    this.speed = random(6, 12);
    this.gravity = 1;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) { //Runs the rain on a loop
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}