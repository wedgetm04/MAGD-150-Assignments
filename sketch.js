function setup() {
    createCanvas(500, 500, WEBGL);
    background('black');
}

function draw() {
    translate(0, 10, mouseX); //This is the camera function and it reacts to user's mouse input, zooming in and out.
    
    let dirX = (mouseX / width - 2) * 0.5;
    let dirY = (mouseY / height - 2) * 0.5;
    directionalLight(100, 200, 200, -dirX, -dirY, -1); //The directional light will move with user's mouse.
    ambientLight(150); 
    specularMaterial('purple');
    sphere(100);

push();
    beginShape();
    emissiveMaterial('pink');
    vertex(400, 400, 0, 0, 0);
    vertex(400, 0, 0, 1, 0);
    vertex(mouseX, mouseY, 1, 1, 1); //The shape's vertex will move with user's mouse.
    vertex(0, 400, 0, 1, 1);
    endShape(CLOSE);
pop();
    
}