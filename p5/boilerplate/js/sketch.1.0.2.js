let x = 0;
let scale = 50;
let color = {
  primary: "#FFFFA4",
  secondary: "#FFCAA4",
  bg: "#1C170C",
  white: "#ffffff"
};
let font,
  fontsize = 32;

/**
 * Preload fonts
 */
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont("assets/lhf-bootcut.otf");
}

/**
 * Setup our Canvas
 */

function setup() {
  let sketchCanvas = createCanvas(windowWidth, windowHeight);
  sketchCanvas.parent("sketch");

  // Create our graphic
  pg = createGraphics(windowWidth, windowHeight);

  frameRate(150);
}

/**
 * Draw Loop
 */
function draw() {
  background(color.bg);

  pg.background(color.bg);
  pg.fill(color.primary);
  pg.textFont(font);
  pg.textSize(800);
  pg.push(); // Start a new drawing state
  pg.translate(windowWidth / 2, windowHeight / 2);
  pg.textAlign(CENTER, CENTER);
  pg.text("&", 0, 0);
  pg.pop(); // Restore original state

  let tilesX = 15;
  let tilesY = 15;

  let tileW = parseInt(windowWidth / tilesX);
  let tileH = parseInt(windowHeight / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Define our Sine wave
      let wave = parseInt(Math.sin(frameCount * 0.02 * (x * y)) * 30);

      // Source
      let sx = x * tileW + wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      // Destination
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

/**
 * Catch window resizing
 */
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};

// ** ------------------------------------------------------------------------------
// Style document + brandmark
document
  .querySelector(".brandmark")
  .getElementById("el")
  .setAttribute("fill", color.primary);

document.body.style.backgroundColor = color.bg;
