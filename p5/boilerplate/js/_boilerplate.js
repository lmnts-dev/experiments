let canvasX = window.innerWidth;
let canvasY = window.innerHeight;

function setup() {
  let sketchCanvas = createCanvas(canvasX, canvasY);
  sketchCanvas.parent("sketch");
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(canvasX, canvasY);
}
