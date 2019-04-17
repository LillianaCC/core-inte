var tris = [];
let x1 = 0;
let x2 = 0;
let x3 = 0;
let y1 = 0;
let y2 = 0;
let y3 = 0;
let dim = 3.0;
let z,k;
var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;
var r, g, b, a;
// var colors;
// randomColor = getRandomColor(0, colors.length - 1);
// randomItem = colors[randomColor];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // var tris = [];
  // colors = [color('#ff0000'), color('#ee863a'), color('#b4280c'), color('#ffab03'), color('#ffd503'), color('#eab22f')];
  // frameRate(2);
  // var overlapping = false;
  // var protection = 0;
  background(0);
}

function draw() {
  background(51);


 for (let i = 0; i < random(10,70); i++) {
  // let r = random(130);
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  k = random(width / 100);
  z = random(width / 100);

  let x1 = random(width);
  let x2 = random(width);
  let x3 = random(width);
  let y1 = random(height);
  let y2 = random(height);
  let y3 = random(height);

  z = z + 7.2;
  k = k + 0.35;

  // x1 = x1 + 5.8;
  // if (x1 > width + dim) {
  //   x1 = -dim;
  // }
  //
  // x2 = x2 + 5.8;
  // if (x2 > width + dim) {
  //   x2 = -dim;
  // }
  //
  // x3 = x3 + 5.8;
  // if (x3 > width + dim) {
  //   x3 = -dim;
  // }
  //
  // y1 = y1 + 5.8;
  // if (y1 > width + dim) {
  //   y1 = -dim;
  // }
  //
  // y2 = y2 + 5.8;
  // if (y2 > width + dim) {
  //   y2 = -dim;
  // }
  //
  // y3 = y3 + 805.8;
  // if (y3 > width + dim) {
  //   y3 = -dim;
  // }
  // fill(204, 101, 192, 127);
  fill(r, g, b, a);
  stroke(127, 63, 120);
  // triangle(x1, y1, x2, y2, x3, y3);
  triangle(z+x1, y1, x2, y2, x3, y3);
  triangle(k+x1, y1, x2, y2, x3, y3);
}

// translate(x1, y1 / 2 - dim / 2, x2, y2 / 2 - dim / 2, x3, y3 / 2 - dim / 2);
// fill(r, g, b, a);
// triangle(-dim / 2, -dim / 2, dim, dim, -dim / 2, -dim / 2, dim, dim, -dim / 2, -dim / 2, dim, dim);
  }

  function mousePressed() {
    r += 1;
    g += 1;
    b += 1;
    a += 1;

     x1 += 1;
     x2 += 1;
     x3 += 1;
     y1 += 1;
     y2 += 1;
     y3 += 1;
     redraw();
   }

// function getRandomColor(min, max) {
//   var offset = min;
//   var range = (max - min) + 1;
//
//   var randomColor = Math.floor( Math.random() * range) + offset;
//   return randomColor;
// }

function randomColor()
{
     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     return color;
}
