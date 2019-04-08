var ellipseDiameter = 200;
var ellipseMaxDiameter = 300;
var ellipseRandom;
var colors;


function setup() {
  console.log ('klk');
  createCanvas(windowWidth, windowHeight);
  colors = [color('#ff0000'), color('#ee863a'), color('#b4280c'), color('#ffab03'), color('#ffd503'), color('#eab22f')]
}

function draw() {
  ellipseRandom = random(1,ellipseDiameter);
  // noStroke();
  // ellipse(180, 90, 190, 100);
  if (mouseIsPressed) {
    fill(getRandomColor);
    stroke(0);
    strokeWeight(10);
  } else {
    fill(255);
    stroke(0);
    strokeWeight(1);
  }
  ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);
  }

  function getRandomColor() {
    return colors[int(random(0, colors.length))];
  }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
//   if (ellipseDiameter ≥ ellipseMaxDiameter) {
//     ellipseDiameter = ellipseDiameter - 1;
//   } else if (ellipseDiameter ≥ 0) {
//     ellipseDiameter = ellipseDiameter + 1;
//
//   }
//   }
