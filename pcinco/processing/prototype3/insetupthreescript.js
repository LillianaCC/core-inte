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


  // var overlapping = false;
  // for (var j = 0; j < circles.length; j++) {
  //   var other = circles[j];
  //   var d = dist(circle.x, circle.y, other.x, other.y);
  //   if (d < circle.r + other.r) {
  //     // // OVERLAP MISMATCH!
  //     overlapping = true;
  //     // break;
  //   }
  // }

  var overlapping = false;
  for (var j = 0; j < tris.length; j++) {
    var other = tris[j];
    var d = dist(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3, other.x1, other.y1, other.x2, other.y2, other.x3, other.y3,);
    // if (d < triangle.x1 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x1 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x1 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x1 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x1 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x1 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x2 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.x3 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y1 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y2 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.x1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.x2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.x3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.y1) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.y2) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }
    // if (d < triangle.y3 + other.y3) {
    //   // // OVERLAP MISMATCH!
    //   overlapping = true;
    //   // break;
    // }


    if (d < tri.area + other.area) {
      // // OVERLAP MISMATCH!
      overlapping = true;
      // break;
    }
  }

  // If not keep it!
    if (!overlapping) {
      tris.push(tri);
    }

    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }

  // // Draw all the circles
  // for (var i = 0; i < circles.length; i++) {
  //   fill(255, 0, 175, 100);
  //   noStroke();
  //   // ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  //   triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
  // }

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
    fill(204, 101, 192, 127);
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
