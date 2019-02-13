/*
  Returns a random whole number between minimum value and maximum value
  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.
  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value
  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.
  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}


/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* START WRITING YOUR CODE BELOW */

// Keypress Smaller
function keypressed(selector, newClass) {
  var Element = document.querySelector(selector);
    Element.classList.add(newClass);
}

function myEventHandler(e) {
  console.log (e);

    if(e.keyCode == 50) {
    console.log ("2");
    keypressed("#circle", "g2");
    }

    if(e.keyCode == 51) {
    console.log ("3");
    keypressed(".g2");
   }

   if(e.keyCode == 52) {
    console.log ("4");
    keypressed(".g3");
   }

   if(e.keyCode == 53) {
    console.log ("5");
    keypressed(".g4");
   }

   if(e.keyCode == 54) {
    console.log ("6");
    keypressed(".g5");
   }

   if(e.keyCode == 55) {
    console.log ("7");
    keypressed(".g6");
    }

    if(e.keyCode == 119) {
    console.log ("w");
    keypressed(".y1");
    }

    if(e.keyCode == 101) {
    console.log ("e");
    keypressed(".y2");
   }

   if(e.keyCode == 114) {
    console.log ("r");
    keypressed(".y3");
   }

   if(e.keyCode == 116) {
    console.log ("t");
    keypressed(".y4");
   }

   if(e.keyCode == 121) {
    console.log ("y");
    keypressed(".y5");
   }

   if(e.keyCode == 117) {
    console.log ("u");
    keypressed(".y6");
    }

   if(e.keyCode == 115) {
    console.log ("s");
    keypressed(".r1");
   }

   if(e.keyCode == 100) {
    console.log ("d");
    keypressed(".r2");
   }

   if(e.keyCode == 102) {
    console.log ("f");
    keypressed(".r3");
   }

   if(e.keyCode == 103) {
    console.log ("g");
    keypressed(".r4");
   }

   if(e.keyCode == 104) {
    console.log ("h");
    keypressed(".r5");
   }

   if(e.keyCode == 106) {
    console.log ("j");
    keypressed(".r6");
    }

    if(e.keyCode == 120) {
    console.log ("x");
    keypressed(".b1");
   }

   if(e.keyCode == 99) {
    console.log ("c");
    keypressed(".b2");
   }

   if(e.keyCode == 118) {
    console.log ("v");
    keypressed(".b3");
   }

   if(e.keyCode == 98) {
    console.log ("b");
    keypressed(".b4");
   }

   if(e.keyCode == 110) {
    console.log ("n");
    keypressed(".b5");
    }

    if(e.keyCode == 109) {
    console.log ("m");
    keypressed(".b6");
    }
}

window.addEventListener("keypress", myEventHandler, false);


// Spin the circle/wheel!
function clickspin() {
  var degrees = randomNumber(0, 3);
  degrees = degrees * 90 + 360 * 3;
  var wheel = document.querySelector(".circle");
  wheel.style.transform = "scale(0.65) rotate("+ degrees + "deg)";
}

var spinbutton = document.querySelector(".spin")

spinbutton.addEventListener("click", clickspin, false);


// Spin the stick/arrow!
function clickstick() {
  var degrees = randomNumber(1, 1440);
  var stick = document.querySelector(".stick");
  stick.style.transform = "scale(0.15) rotate("+ degrees + "deg)";
}

var spinbutton = document.querySelector(".spin")

spinbutton.addEventListener("click", clickstick, false);
