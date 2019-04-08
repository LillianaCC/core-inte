// var circles = [];
var triangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // var overlapping = false;
  var protection = 0;
  background(0);
  // strokeWeight(20);
  // frameRate(2);
  while (triangles.length < 10) {
   // Pick a random circle
   // var circle = {
   //   x: random(width),
   //   y: random(height),
   //   r: random(30, 158)
   // }
   var triangle = {
        x1: random(width),
        x2: random(width),
        x3: random(width),
        y1: random(height),
        y2: random(height),
        y3: random(height),
        area: random(height * width / 2),
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
  for (var j = 0; j < triangles.length; j++) {
    var other = triangles[j];
    var d = dist(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, other.x1, other.y1, other.x2, other.y2, other.x3, other.y3,);
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


    if (d < triangle.area + other.area) {
      // // OVERLAP MISMATCH!
      overlapping = true;
      // break;
    }
  }

  // If not keep it!
    if (!overlapping) {
      triangles.push(triangle);
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
  for (var i = 0; i < triangles.length; i++) {
    fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  // triangle(300, 100, 320, 100, 310, 80);
  // triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
  }

}

function draw() {
  background(51);

  for (var i = 0; i < triangles.length; i++) {
    fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  triangle(triangles[i].x1, triangles[i].y1, triangles[i].x2, triangles[i].y2, triangles[i].x3, triangles[i].y3);
  }

}
