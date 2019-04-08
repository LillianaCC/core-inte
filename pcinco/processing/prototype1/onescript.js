let num = 5;
let springs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // console.log("working");

  // springs[0] = new Spring(240, 260, 40, 0.98, 8.0, 0.1, springs, 0);
  // springs[1] = new Spring(320, 210, 120, 0.95, 9.0, 0.1, springs, 1);
  // springs[2] = new Spring(180, 170, 200, 0.90, 9.9, 0.1, springs, 2);
  // springs[3] = new Spring(290, 340, 70, 0.98, 8.0, 0.1, springs, 3);
  // springs[4] = new Spring(150, 410, 150, 0.95, 9.0, 0.1, springs, 4);

  springs[0] = new Spring(30, 175, 258, 20, 486, 75, 70, 0.95, 9.0, 0,1, springs, 0);
  springs[1] = new Spring(990, 835, 673, 855, 741, 690, 70, 0.95, 9.0, 0,1, springs, 1);
  springs[2] = new Spring(350, 195, 478, 103, 206, 161, 70, 0.95, 9.0, 0,1, springs, 2);
  springs[3] = new Spring(660, 405, 588, 703, 491, 305, 70, 0.95, 9.0, 0,1, springs, 3);
  springs[4] = new Spring(780, 615, 1098, 550, 676, 81, 70, 0.95, 9.0, 0,1, springs, 4);
}

function draw() {
  background(51);
  // triangle(30, 75, 58, 20, 86, 75, 70, 0.95, 9.0, 0,1, springs, 0);
  // triangle(x1, y1, x2, y2, x3, y3)

  for (let i = 0; i < num; i++) {
	springs[i].update();
	springs[i].display();
  }
}

function mousePressed() {
  for (let i = 0; i < num; i++) {
    springs[i].pressed();
  }
}

function mouseReleased() {
  for (let i = 0; i < num; i++) {
	springs[i].released();
  }
}
//
// Spring class
function Spring
// // (_x, _y, _s, _d, _m, _k_in, _others, _id)
(_x1, _y1, _x2, _y2, _x3, _y3, _d, _m, _k_in, _others, _id)
 {
  // Screen values
  // this.xpos = _x;
  // this.ypos = _y;

  this.x1_pos = _x1;
  this.y1_pos= _y1;
  this.x2_pos = _x2;
  this.y2_pos= _y2;
  this.x3_pos = _x3;
  this.y3_pos= _y3;

  // this.size = 20;
  // this.size = _s;

  this.over = false;
  this.move = false;

	// Spring simulation constants
  this.mass = _m;       // Mass
  this.k = 0.2;    // Spring constant
  this.k = _k_in;
  this.damp = _d;       // Damping
  this.rest_posx1 = _x1;  // Rest position X
  this.rest_posy1 = _y1;  // Rest position Y
  this.rest_posx2 = _x2;  // Rest position X
  this.rest_posy2 = _y2;  // Rest position Y
  this.rest_posx3 = _x3;  // Rest position X
  this.rest_posy3 = _y3;  // Rest position Y

  // Spring simulation variables
  //float pos = 20.0; // Position
  this.velx1 = 0.0;   // X Velocity
  this.vely1 = 0.0;   // Y Velocity
  this.velx2 = 0.0;   // X Velocity
  this.vely2 = 0.0;   // Y Velocity
  this.velx3 = 0.0;   // X Velocity
  this.vely3 = 0.0;   // Y Velocity
  this.accel = 0;    // Acceleration
  this.force = 0;    // Force

  this.friends = _others;
  this.id = _id;

  this.update = function() {

	if (this.move) {
	  this.rest_posy1 = mouseY;
	  this.rest_posx1 = mouseX;
    this.rest_posy2 = mouseY;
	  this.rest_posx2 = mouseX;
    this.rest_posy3 = mouseY;
	  this.rest_posx3 = mouseX;
	}

    // THE Ys
	this.force = -this.k * (this.y1_pos - this.rest_posy1);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.vely1 = this.damp * (this.vely1 + this.accel);         // Set the velocity
	this.y1_pos = this.y1_pos + this.vely1;           // Updated position

  this.force = -this.k * (this.y2_pos - this.rest_posy2);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.vely2 = this.damp * (this.vely2 + this.accel);         // Set the velocity
	this.y2_pos = this.y2_pos + this.vely2;           // Updated position

  this.force = -this.k * (this.y3_pos - this.rest_posy3);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.vely3 = this.damp * (this.vely3 + this.accel);         // Set the velocity
	this.y3_pos = this.y3_pos + this.vely3;           // Updated position


    // THE Xs
	this.force = -this.k * (this.x1_pos - this.rest_posx1);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.velx1 = this.damp * (this.velx1 + this.accel);         // Set the velocity
	this.x1_pos = this.x1_pos + this.velx1;           // Updated position

  this.force = -this.k * (this.x2_pos - this.rest_posx2);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.velx2 = this.damp * (this.velx2 + this.accel);         // Set the velocity
	this.x2_pos = this.x2_pos + this.velx2;           // Updated position

  this.force = -this.k * (this.x3_pos - this.rest_posx3);  // f=-ky
	this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m
	this.velx3 = this.damp * (this.velx3 + this.accel);         // Set the velocity
	this.x3_pos = this.x3_pos + this.velx3;           // Updated position


	if ((this.overEvent() || this.move) && !(this.otherOver()) ) {
	  this.over = true;
	} else {
	    this.over = false;
	  }
  }

  // Test to see if mouse is over this spring
  this.overEvent = function() {
	let disX1 = this.x1_pos - mouseX;
	let disY1 = this.y1_pos - mouseY;
  let disX2 = this.x2_pos - mouseX;
	let disY2 = this.y2_pos - mouseY;
  let disX3 = this.x3_pos - mouseX;
	let disY3 = this.y3_pos - mouseY;
	let dis1 = createVector(disX1, disY1);
  let dis2 = createVector(disX2, disY2);
  let dis3 = createVector(disX3, disY3);
	if (dis1.mag() < this.size / 2 ) {
	  return true;
	} else {
		return false;
	  }
    if (dis2.mag() < this.size / 2 ) {
  	  return true;
  	} else {
  		return false;
  	  }
    if (dis3.mag() < this.size / 2 ) {
    	 return true;
    } else {
    	return false;
    	 }
  }

  // Make sure no other springs are active
  this.otherOver = function() {
	for (let i = 0; i < num; i++) {
	  if (i != this.id) {
		if (this.friends[i].over == true) {
		  return true;
		}
	  }
	}
	return false;
  }

  this.display = function() {
	if (this.over) {
	  fill(153);
	} else {
	    fill(255);
	  }
  triangle(this.x1_pos, this.y1_pos, this.x2_pos, this.y2_pos, this.x3_pos, this.y3_pos)
	// ellipse(this.x_pos, this.y_pos, this.size, this.size);
  }

  this.pressed = function() {
	if (this.over) {
	  this.move = true;
	} else {
	  this.move = false;
	}
  }

  this.released = function() {
	this.move = false;
	this.rest_posx1 = this.y1_pos;
	this.rest_posy1 = this.y1_pos;
  this.rest_posx2 = this.y2_pos;
	this.rest_posy2 = this.y2_pos;
  this.rest_posx2 = this.y2_pos;
	this.rest_posy2 = this.y2_pos;
  }
};
