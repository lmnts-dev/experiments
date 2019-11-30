const sketch = p => {
  let x = 0;
  let scale = 50;
  let color = {
    primary: "#D070A6",
    secondary: "#FFF4F7",
    bg: "#1C170C",
    white: "#ffffff"
  };

  p.setup = function() {
    // Our Canvas
    let sketchCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
    sketchCanvas.parent("sketch");
  };

  p.draw = function() {
    scale += 1;
    x = x * 1.1 + 2;

    p.noFill();
    p.stroke(color.primary);

    if (p.mouseX > 0 || p.mouseY > 0) {
      p.ellipse(
        p.mouseX,
        p.mouseY,
        Math.sin(scale) * (Math.sin(scale) * 200),
        Math.sin(scale) * (Math.sin(scale) * 200)
      );
    } else {
      p.ellipse(
        p.windowWidth / 2,
        p.windowHeight / 2,
        Math.sin(scale) * (Math.sin(scale) * 200),
        Math.sin(scale) * (Math.sin(scale) * 200)
      );
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(canvasX, canvasY);
  };

  // Style document + brandmark
  document
    .querySelector(".brandmark")
    .getElementById("el")
    .setAttribute("fill", color.primary);

  document.body.style.backgroundColor = color.bg;
};

let newSketch = new p5(sketch);
