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

var numKeyPressed = 0;

// Keypress Smaller
function keypressed(selector, scale) {
  var Element = document.querySelector(selector);
    Element.style.transform = `scale(${scale})`;
}


function myEventHandler(e) {
  var scale = 1;
  numKeyPressed++;
  console.log(numKeyPressed);
  console.log (e);

  if(e.keyCode == 8) {
  console.log ("backspace");
  keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 9) {
    console.log ("tab");
    keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 13) {
  console.log ("enter");
  keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 16) {
    console.log ("shift");
    keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 17) {
  console.log ("ctrl");
  keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 18) {
    console.log ("alt");
    keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 19) {
  console.log ("pause");
  keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 20) {
    console.log ("capslock");
    keypressed("#circle", numKeyPressed);
  }

  if(e.keyCode == 27) {
  console.log ("escape");
  keypressed("#circle", numKeyPressed);
}

if(e.keyCode == 33) {
console.log ("pageup");
keypressed("#circle", numKeyPressed);
}

  if(e.keyCode == 34) {
  console.log ("pagedown");
  keypressed("#circle", numKeyPressed);
}

  if(e.keyCode == 35) {
  console.log ("end");
  keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 36) {
    console.log ("home");
    keypressed("#circle", numKeyPressed);
}

  if(e.keyCode == 37) {
  console.log ("leftarrow");
  keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 38) {
    console.log ("uparrow");
    keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 39) {
    console.log ("rightarrow");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 40) {
    console.log ("downarrow");
    keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 45) {
    console.log ("insert");
    keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 46) {
    console.log ("delete");
    keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 48) {
    console.log ("0");
    keypressed("#circle", numKeyPressed);
  }

    if(e.keyCode == 49) {
      console.log ("1");
      keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 50) {
    console.log ("2");
    keypressed("#circle", numKeyPressed);
    // document.body.append
    }

    if(e.keyCode == 51) {
    console.log ("3");
    keypressed("#circle", numKeyPressed);
   }

   if(e.keyCode == 52) {
    console.log ("4");
    keypressed("#circle", numKeyPressed);
   }

   if(e.keyCode == 53) {
    console.log ("5");
    keypressed("#circle", numKeyPressed);
   }

   if(e.keyCode == 54) {
    console.log ("6");
    keypressed("#circle", numKeyPressed);
   }

   if(e.keyCode == 55) {
    console.log ("7");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 56) {
     console.log ("8");
     keypressed("#circle", numKeyPressed);
     }

     if(e.keyCode == 57) {
      console.log ("9");
      keypressed("#circle", numKeyPressed);
      }

      if(e.keyCode == 65) {
       console.log ("a");
       keypressed("#circle", numKeyPressed);
       }

    if(e.keyCode == 66) {
    console.log ("b");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 67) {
    console.log ("c");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 68) {
    console.log ("d");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 69) {
    console.log ("e");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 70) {
    console.log ("f");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 71) {
    console.log ("g");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 72) {
    console.log ("h");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 73) {
    console.log ("i");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 74) {
    console.log ("j");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 75) {
    console.log ("k");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 76) {
    console.log ("l");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 77) {
    console.log ("m");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 78) {
    console.log ("n");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 79) {
    console.log ("o");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 80) {
    console.log ("p");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 81) {
    console.log ("q");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 82) {
    console.log ("r");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 83) {
    console.log ("s");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 84) {
    console.log ("t");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 85) {
    console.log ("u");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 86) {
    console.log ("v");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 87) {
    console.log ("w");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 88) {
    console.log ("x");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 89) {
    console.log ("y");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 90) {
    console.log ("z");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 106) {
    console.log ("multiply");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 107) {
    console.log ("add");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 109) {
    console.log ("subtract");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 110) {
    console.log ("decimalpoint");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 111) {
    console.log ("divide");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 186) {
    console.log ("semicolon");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 187) {
    console.log ("equalsign");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 188) {
    console.log ("comma");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 189) {
    console.log ("dash");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 190) {
    console.log ("period");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 191) {
    console.log ("forwardslash");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 192) {
    console.log ("graveaccent");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 219) {
    console.log ("openbracket");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 220) {
    console.log ("backslash");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 221) {
    console.log ("closebracket");
    keypressed("#circle", numKeyPressed);
    }

    if(e.keyCode == 222) {
    console.log ("singlequote");
    keypressed("#circle", numKeyPressed);
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

var spinbutton = document.querySelector("#circle")

spinbutton.addEventListener("click", clickspin, false);


// Spin the stick/arrow!
function clickstick() {
  var degrees = randomNumber(1, 1440);
  var stick = document.querySelector(".stick");
  stick.style.transform = "scale(0.15) rotate("+ degrees + "deg)";
}

var spinbutton = document.querySelector("#circle")

spinbutton.addEventListener("click", clickstick, false);

// ref https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
