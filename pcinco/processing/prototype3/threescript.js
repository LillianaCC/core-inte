// var circles = [];
var tris = [];
let x1 = 0;
let x2 = 0;
let x3 = 0;
let y1 = 0;
let y2 = 0;
let y3 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  // frameRate(2);
  // var overlapping = false;
  var protection = 0;
  background(0);
  // strokeWeight(20);
  // frameRate(2);
  while (tris.length < 5) {
   // Pick a random circle
   // var circle = {
   //   x: random(width),
   //   y: random(height),
   //   r: random(30, 158)
   // }
   var tri = {
        x1: random(width),
        x2: random(width),
        x3: random(width),
        y1: random(height),
        y2: random(height),
        y3: random(height),
        // area: (height * width / 2),
        // height: random(2 * area/width),
        // width: random(2 * area/height)
      }
  }

  // Draw all the triangles
  for (var i = 0; i < tris.length; i++) {
    fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  // triangle(300, 100, 320, 100, 310, 80);
  // triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
  }

}

function draw() {
  background(51);

  for (var i = 0; i < tris.length; i++) {
  stroke(127, 63, 120);
  triangle(tris[i].x1, tris[i].y1, tris[i].x2, tris[i].y2, tris[i].x3, tris[i].y3);
  }

}

function mousePressed() {
   x1 += 1;
   x2 += 1;
   x3 += 1;
   y1 += 1;
   y2 += 1;
   y3 += 1;
   redraw(5);
 }
