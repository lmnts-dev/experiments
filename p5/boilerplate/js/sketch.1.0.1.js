const sketch = p => {
  p.setup = function() {
    // Our Canvas
    let sketchCanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    sketchCanvas.parent("sketch");
  };

  let factor = 1;
  let r = 50;
  let g = 80;
  let b = 50;
  let color = {
    primary: "#D070A6",
    secondary: "#FFF4F7",
    bg: "#FFF4F7",
    white: "#ffffff"
  };

  const drawSphere = () => {
    p.background(color.secondary);
    p.noFill();
    p.stroke(color.primary);
    p.strokeWeight(0.5);
    p.rotateX(p.mouseY * 0.01 + 20);
    p.rotateY(p.mouseX * 0.01);
    p.sphere(
      // Math.round(Math.abs(p.sin(factor) * 200) + 20),
      Math.round(300),
      Math.round(Math.abs(p.sin(factor) * 20) + 3),
      Math.round(Math.abs(p.sin(factor) * 20) + 3)
    );

    factor += 0.01;
  };

  const drawBox = () => {
    p.fill(color.white);
    p.stroke(color.primary);
    p.strokeWeight(1.5);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.box(300);

    factor += 0.01;
  };

  p.draw = function() {
    drawSphere();
    drawBox();

    // r = r * Math.abs(p.sin(factor) * 2);
    // g = g * Math.abs(p.sin(factor) * 2);
    // b = b * Math.abs(p.sin(factor) * 2);

    // Debugging
    // console.log("p.mouseX", p.mouseX * 0.01);
    // console.log("p.mouseY", p.mouseY * 0.01);
    // console.log("p.frameCount * 0.01", p.frameCount * 0.01);
    // console.log("Math.abs(p.sin(factor) * 2)", Math.abs(p.sin(factor) * 2));
    // console.log("r: " + r + ", g: " + g + ", b: " + b);
  };

  p.windowResized = function() {
    p.resizeCanvas(canvasX, canvasY);
  };

  // Style brandmark
  document
    .querySelector(".brandmark")
    .getElementById("el")
    .setAttribute("fill", color.primary);
};

let newSketch = new p5(sketch);
