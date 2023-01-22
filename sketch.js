/**
Adapted from : https://editor.p5js.org/simontiger/sketches/MVVT1T01n

See alsow : "WK9 HSB Random Analogous Hues Palette" by enickles
https://editor.p5js.org/enickles/sketches/8Bpc7iBmY
and
"HSB color mode - random" by sjnha
https://editor.p5js.org/sjnha/sketches/r1GsiEBSW

Further reading: https://programmingdesignsystems.com/color/color-schemes/index.html#color-schemes-dV9Rf6L

zeredbox - January 2023
https://linktr.ee/zeredbox
**/

let hSlider, sSlider, bSlider;

function setup() {
  createCanvas(500, 530);
  hSlider = createSlider(0, 360, 210);
  sSlider = createSlider(0, 100, 100);
  bSlider = createSlider(0, 100, 100);

  hSlider.style("width", "180px");

  textSize(16);
  keyPressed();
}

function draw() {
  generatePalette();
  let cRGB = get(mouseX, mouseY);
  printColor(cRGB);
}

function generatePalette() {
  colorMode(HSB);

  // Draw border
  fill(255);
  rect(0, 0, width, height);

  //Select base color
  let h = hSlider.value();
  let s = sSlider.value();
  let b = bSlider.value();
  const baseColor = color(h, s, b);

  // Base color
  fill(baseColor);
  for (let i = 20; i<height-60; i+=80){
    rect(20, i, 60, 60)  
  }

  // Complementary color
  fill(50);  
  text("Complementary", 340, 50);
  fill(Palette.getComplementary(baseColor));
  rect(100, 20, 60, 60);

  // Analogos color
  fill(50);
  text("Analogous", 340, 130);
  fill(Palette.getAnalogous1(baseColor));
  rect(100, 100, 60, 60);
  fill(Palette.getAnalogous2(baseColor));
  rect(180, 100, 60, 60);

  // Split complementary color
  fill(50);
  text("Split complementary", 340, 210);
  fill(Palette.getSplitComp1(baseColor));
  rect(100, 180, 60, 60);
  fill(Palette.getSplitComp2(baseColor));
  rect(180, 180, 60, 60);

  // Triadic color
  fill(50);
  text("Triadic", 340, 290);
  fill(Palette.getTriadic1(baseColor));
  rect(100, 260, 60, 60);
  fill(Palette.getTriadic2(baseColor));
  rect(180, 260, 60, 60);

  // Tetradic color
  fill(50);
  text("Tetradic", 340, 370);
  fill(Palette.getTetradic(baseColor));
  rect(100, 340, 60, 60);
  fill(Palette.getComplementary(baseColor));
  rect(180, 340, 60, 60);
  fill(Palette.getTriadic2(baseColor));
  rect(260, 340, 60, 60);

  // Square color
  fill(50);
  text("Square", 340, 450);
  fill(Palette.getSquare1(baseColor));
  rect(100, 420, 60, 60);
  fill(Palette.getComplementary(baseColor));
  rect(180, 420, 60, 60);
  fill(Palette.getSquare2(baseColor));
  rect(260, 420, 60, 60);
}

function printColor(cRGB) {
  let r = cRGB[0];
  let g = cRGB[1];
  let b = cRGB[2];
  
  let cHSB = rgb2hsb(r, g, b);
  let h = Math.round(cHSB[0]);
  let s = Math.round(cHSB[1]);
  let br = Math.round(cHSB[2]);
  
  let colorText = `RGB(${r}, ${g}, ${br}) - HSB(${h}, ${s}, ${br})`;
  fill(0);
  text (colorText, 100, 510)
}

function keyPressed() {
  // Generate random base color
  let h = random(0, 360);
  hSlider.value(h);
}

// Source : https://www.30secondsofcode.org/js/s/rgb-to-hsb
function rgb2hsb(r, g, b){
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
}