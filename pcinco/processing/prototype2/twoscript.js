// let bubbles = [];
// let square = [];
// let morph = [];
// // let bubble;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   for (let i = 0; i < 5; i++) {
//   let x = random(width);
//   let y = random(height);
//   let w = random(width);
//   let h = random(height);
//   let r = random(10, 50);
//   let b = new Bubble(x, y, r);
//   let s = new Square (x, y, w, h, 20);
//   square.push(s);
//   bubbles.push(b);
//   }
//
//   for (let angle = 0; angle < 360; angle += 9) {
//     // Note we are not starting from 0 in order to match the
//     // path of a circle.
//     let v = p5.Vector.fromAngle(radians(angle - 135));
//     v.mult(100);
//     bubbles.push(v);
//     // Let's fill out morph ArrayList with blank PVectors while we are at it
//     morph.push(createVector());
//   }
//
//   // A square is a bunch of vertices along straight lines
//   // Top of square
//   for (let x = -50; x < 50; x += 10) {
//     square.push(createVector(x, -50));
//   }
//   // Right side
//   for (let y = -50; y < 50; y += 10) {
//     square.push(createVector(50, y));
//   }
//   // Bottom
//   for (let x = 50; x > -50; x -= 10) {
//     square.push(createVector(x, 50));
//   }
//   // Left side
//   for (let y = 50; y > -50; y -= 10) {
//     square.push(createVector(-50, y));
//   }
// }
//
// function mousePressed() {
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles [i].clicked(mouseX, mouseY);
//   }
// }
//
// // function mousePressed() {
// //   let r = random(10, 50);
// //   let b = new Bubble(mouseX, mouseY, r);
// //   bubbles.push(b);
// // }
//
// function draw() {
//   background(0);
//   let totalDistance = 0;
//   for (let i = 0; i < bubbles.length; i++) {
//     bubbles[i].move();
//     bubbles[i].show();
//     bubbles[i].clicked();
//
//     square[i].move();
//     square[i].show();
//     square[i].clicked();
//
//
//     let v1;
//       // Are we lerping to the circle or square?
//       if (state) {
//         v1 = bubbles[i];
//       } else {
//         v1 = square[i];
//       }
//       // Get the vertex we will draw
//       let v2 = morph[i];
//       // Lerp to the target
//       v2.lerp(v1, 0.1);
//       // Check how far we are from target
//       totalDistance += p5.Vector.dist(v1, v2);
//   }
// }
//
// class Bubble {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.brightness = 0;
//     this.square = class Square
//     // this.ellipse = class Bubble;
//   }
//
// clicked(px, py) {
//   let d = dist(px, py, this.x, this.y);
//   if (d < this.r) {
//     this.brightness =  255;
//     this.square = class Square;
//   }
//     else {
//     // this.brightness = 0;
//     // this.shape = ellipse(this.x, this.y, this.r * 2);
//   }
//   // console.log("ble")
//   }
//
// move() {
//   this.x = this.x + random(-5, 5);
//   this.y = this.y + random(-5, 5);
//   }
//
// show() {
//   stroke(255);
//   strokeWeight (4);
//   fill(this.brightness, 125);
//   // ellipse(this.x, this.y, this.r * 2);
//   this.ellipse = ellipse(this.x, this.y, this.r * 2)
//   }
//
//
// }
//
// class Square {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.w = w;
//     this.h = h;
//     this.brightness = 0;
//     // this.square = class Square;
//     this.ellipse = class Bubble;
//   }
//
// clicked(px, py) {
//   let d = dist(px, py, this.x, this.y);
//   if (d < this.r) {
//     this.brightness =  255;
//     this.ellipse = class Bubble;
//   }
//     else {
//     // this.brightness = 0;
//     // this.shape = ellipse(this.x, this.y, this.r * 2);
//   }
//   // console.log("ble")
//   }
//
// move() {
//   this.x = this.x + random(-5, 5);
//   this.y = this.y + random(-5, 5);
//   }
//
// show() {
//   stroke(255);
//   strokeWeight (4);
//   fill(this.brightness, 125);
//   // ellipse(this.x, this.y, this.r * 2);
//   this.square = rect(this.x, this.y, this.w, this.h, 20);
//   }
//
//
// }
//
//

let container;
let num = 5;
let circle = [];
let square = [];

// An ArrayList for a third set of vertices, the ones we will be drawing
// in the window
let morph = [];

// This boolean variable will control if we are morphing to a circle or square
let state = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  container = new Container();
  // Add an initial set of boids into the system
  for (let i = 0; i < 100; i++) {
    let o = new Object(width / 2,height / 2);
    container.addObject(b);
  }
}

  // // Create a circle using vectors pointing from center
  // for (let angle = 0; angle < 360; angle += 9) {
  //   // Note we are not starting from 0 in order to match the
  //   // path of a circle.
  //   let v = p5.Vector.fromAngle(radians(angle - 135));
  //   v.mult(100);
  //   circle.push(v);
  //   // Let's fill out morph ArrayList with blank PVectors while we are at it
  //   morph.push(createVector());
  // }
  //
  // // A square is a bunch of vertices along straight lines
  // // Top of square
  // for (let x = -50; x < 50; x += 10) {
  //   square.push(createVector(x, -50));
  // }
  // // Right side
  // for (let y = -50; y < 50; y += 10) {
  //   square.push(createVector(50, y));
  // }
  // // Bottom
  // for (let x = 50; x > -50; x -= 10) {
  //   square.push(createVector(x, 50));
  // }
  // // Left side
  // for (let y = 50; y > -50; y -= 10) {
  //   square.push(createVector(-50, y));
  // }

function draw() {
  background(51);
  container.run();
}

// Add a new boid into the System
function mousePressed() {
  container.addObject(new Container(mouseX, mouseY));
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Container() {
  // An array for all the boids
  this.objects = []; // Initialize the array
}

Container.prototype.run = function() {
  for (let i = 0; i < this.objects.length; i++) {
    this.objects[i].run(this.objects);  // Passing the entire list of boids to each boid individually
  }
}

Container.prototype.addObject = function(b) {
  this.objects.push(b);
}

function Object(x, y) {
  // Create a circle using vectors pointing from center
  for (let angle = 0; angle < 360; angle += 9) {
    // Note we are not starting from 0 in order to match the
    // path of a circle.
    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(100);
    circle.push(v);
    // Let's fill out morph ArrayList with blank PVectors while we are at it
    morph.push(createVector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -50));
  }
  // Right side
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(50, y));
  }
  // Bottom
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x, 50));
  }
  // Left side
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-50, y));
  }
}

// FIRST CIRCLE
function draw() {
  background(51);

  // We will keep how far the vertices are from their target
  let totalDistance = 0;

  // Look at each vertex
  for (let i = 0; i < circle.length; i++) {
    let v1;
    // Are we lerping to the circle or square?
    if (state) {
      v1 = circle[i];
    } else {
      v1 = square[i];
    }
    // Get the vertex we will draw
    let v2 = morph[i];
    // Lerp to the target
    v2.lerp(v1, 0.1);
    // Check how far we are from target
    totalDistance += p5.Vector.dist(v1, v2);
  }

  // If all the vertices are close, switch shape
  if (totalDistance < 0.1) {
    state = !state;
  }

  // Draw relative to center
  translate(width / 2, height / 2);
  strokeWeight(4);
  // Draw a polygon that makes up all the vertices
  beginShape();
  noFill();
  stroke(255);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
}

Object.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width + this.r;
  if (this.position.y < -this.r)  this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}
