// https://www.w3schools.com/js/js_loop_for.asp REF FOR LOOP

// https://www.youtube.com/watch?v=Pn1g1wjxl_0 REF FOR LOAD AND PLAY

// create a variable to store speech recognition object
var foo;
const APIKEY='8ad9d3229a52a5d4132e5080da3fcde6';
proxy = 'https://cors-anywhere.herokuapp.com/';
const trackListWrapper = document.querySelector('.track__list');
dataWrapper1 = document.querySelector('.songname1');
dataWrapper2 = document.querySelector('.albumname1');
dataWrapper3 = document.querySelector('.artistname1');

var refresh, foo, amp, hover, mic;
var listening = false;

var foo = new webkitSpeechRecognition();
// var recognition = new SpeechRecognition();
var recognition = true;

foo.onstart = function () {
    foo = true;
};

foo.onend = function () {
    foo = false;
};

foo.onerror = function (event) {
    foo = false;
};

if (recognition) {
    // Do stuff
}

// preload images
function preload() {
    refresh = loadImage('refresh.png');
}

function setup(){
	// speech recognition object (will prompt for mic access)
	// PAUSE BUTTON
  // mic = new p5.AudioIn();
	foo = new p5.SpeechRec('en-US');

  // mic.stop();

	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.id('canvas');
  canvas.parent('microphone');

	// boolean to set whether the speech recognition engine will
	// give results continuously (true) or just once (false).
	// Default is false.
	foo.continuous = true;

	// boolean to set whether the speech recognition engine will give
	// faster, partial results (true) or wait for the speaker to pause (false).
	// Default is false
	foo.interimResults = true;

	// function sets callback to fire when speech is recognized and a result has been reported.
	foo.onResult = showResult;

	// function sets callback to fire when an error occurs on the client side in recording and transmitting the speech.
	foo.onError = showError;

	// instructs the speech recognition system to start listening
	// foo = new p5.AudioIn();
	foo.start();


	$('#loading-outer').remove();
}

// ????????????????????????????????must have draw function to work?
function draw(){
	var d = dist(mouseX, mouseY, windowWidth / 2, 860);

    // if distance between mouse position is less than inner ellipse radius... *
    if (d < 45) {
        // * set hover status to true
        hover = true;
    // if distance between mouse position is greater than inner ellipse radius... *
    } else {
        // * set hover status to false
        hover = false;
    }

    // if hover status is true... *
    if (hover === true) {
        // * display pointer cursor
        cursor(HAND);
    // if hover status is false... *
    } else {
        // * display default cursor
        cursor(ARROW);
    }

    // swap images
    // --------------------------
    imageMode(CENTER);

    // // if microphone is enabled... *
    if (listening === true && foo.enabled) {
        // * display "on" icon
        image(refresh, windowWidth / 2, 810, 50 , 50);

    // if microphone is disabled... *
    } else {
        // * display "off" icon
        image(refresh, windowWidth / 2, 810, 50 , 50);
    }
    // --------------------------
}

function Disclaimer() {

  // textSize(32);
  // fill(0, 0, 0);
  text('Disclaimer', windowWidth / 2, 60);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(e) {
    // prevent default action
    e.preventDefault();

    location.reload();
    // listening = !listening;
    // if(listening) {
    //   foo.continuous = true;
    // } else {
    //   foo.continuous = false;
    // }

    // if hover status is true... *
    // if (hover === true) {
    //     // and if microphone is enabled... *
    //     if (listening === true && foo.enabled) {
    //         // * stop listening
    //         listening = false;
    //         // recognition.stop();
    //         foo.stop();
    //         console.log("off");
    //         // mic.stop();
    //     // and if microphone is disabled... *
    //   } else {
    //         // * start listening
    //         listening = true;
    //         // foo.continuous = true;
    //         foo.start();
    //         console.log("on");
    //         // mic.start();
    //     }
    // }
}

// function ready() {
//     setup(); // initialize processing
//     draw(); // draw canvas
//     windowResized(); // responsive canvas
//     mouseClicked(); // microphone toggle
// }

function showError(){
	console.log('There is an error');
	text('There is an error', windowWidth/2, windowHeight/2);
}

function showResult(){

	// resultValue stores the boolean value containing a status flag reported by the server
	// true = speech successfully recognized
	// console.log(foo.resultValue);

	// resultConfidence stores the confidence level of the speech synthesizer that resultString is what was actually spoken by the user.
	// gives a float value from 0.0 to 1.0
	// console.log(foo.resultConfidence);
	// text("I am this much confident: " + foo.resultConfidence, width/5, height-height/3);

	// the resultString contains the string of the most recently detected speech
	console.log(foo.resultString);
  noStroke();
  fill(0,0,0);
	text(foo.resultString, random(width), random(height));
  //to change the color of this text, check if the search returned a result, and put this below the api call, use an if / else statement

			//Permissions stuff for the API!
			let api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${foo.resultString}&page_size=3&s_track_rating=desc&apikey=${APIKEY}`;
			// &artist.album.get=${findArt}

			// Begin fetching the info from the API!
			fetch(api)
			.then(response => {
					return response.json();
        })
		       .then(data => {
					// console.log(data);
					let trackList = data.message.body.track_list;
          // let firsttrack = trackList[i].track_list;
          // let trackList = '<ul>';
          // return data.message.body.track_list;
					// console.log(trackList);


					for (var i = 0; i < trackList.length; i++) {
            let firsttrack = trackList[i].track_list;
            let bounds;
            noStroke();
            noLoop();
            // fill color
            // SPLIT TEXT REF https://www.google.com/search?ei=hrnRXIP4C6iQ_QaL0YvwDw&q=how+to+make+a+single+p5js+text%28%29+function+print+a+string+in+different+lines&oq=how+to+make+a+single+p5js+text%28%29+function+print+a+string+in+different+lines&gs_l=psy-ab.3...5929.8196..9036...0.0..0.84.589.9......0....1..gws-wiz.......0i71j33i10.jTjcs7Uhm-g
            fill(0, 102, 153);

            var ypos = i * 20;


            text(trackList[i].track.track_name, 32, ypos, 190, windowHeight);


            // listening = !listening;
            // if(listening) {
            //   ypos = ypos + 20;
            //   console.log(ypos);
            //
            // } else {
            //   console.log("listening");
            //
            // }
            // text(trackList[i].track.track_name, 32, ypos, 190, windowHeight);
						// console.log('track name: ', trackList[i].track.track_name);
            // console.log('artist name: ', trackList[i].track.artist_name);
						// console.log('track rating: ', trackList[i].track.track_rating);
						// console.log('album name: ', trackList[i].track.album_name);


            // document.body.appendChild(dataWrapper1);
            // document.body.appendChild(dataWrapper2);
            // document.body.appendChild(dataWrapper3);
            // trackList += `<li>${trackList[i].track.track_name}</li>`;
            // trackList += `<li>${trackList[i].track.artist_name}</li>`;
            // trackList += `<li>${trackList[i].track.album_name}</li>`;

					}

          // var print = document.createElement("div");
          // print.innerHTML = firsttrack.track.track_name;
          // document.body.appendChild(print);
          //
          // dataWrapper1.innerHTML= " " + "1." + firsttrack.track_name;
          // dataWrapper2.innerHTML= " " + " " + firsttrack.album_name;
          // dataWrapper3.innerHTML= " " + " " + firsttrack.artist_name;
          // trackList += '</ul>';
          //    trackListWrapper.innerHTML = trackList;


          // .then(track => {
            // console.log(trackList)
             // let trackList = '<ul>';
             // for (let i = 0; i < trackList.length; i++) {
             //    trackList += `<li>${trackList[i].track.track_name}</li>`;
             // }
             // trackList += '</ul>';
             // trackListWrapper.innerHTML = trackList;
          })
          // .catch(error => console.error(error));
          // })
        };

					//This section tells what info to open up for the API!
					//Remember, the names & numbers refer to their corresponding values across the document.
					//
					// let tracklist = data.message.body.track_list;
					// let firsttrack = tracklist[0].track;
					// let secondtrack = tracklist[1].track;
					// let thirdtrack = tracklist[2].track;
					// let fourthtrack = tracklist[3].track;
					// let fifthtrack = tracklist[4].track;
					//
					// let firsttrackrating = firsttrack.track_rating;
					// let secondtrackrating = secondtrack.track_rating;
					// let thirdtrackrating = thirdtrack.track_rating;
					// let fourthtrackrating = fourthtrack.track_rating;
					// let fifthtrackrating = fifthtrack.track_rating;
					//
					// //This section prints the information into the website!
					// //Remember, it must be defined with the variables from the top!
					// //Also, the firsttrack /is a random name/. track_name /name of folder provided in the console log(data) thing/
					// // First Search Query
					// dataWrapper1.innerHTML= " " + "1." + firsttrack.track_name;
					// dataWrapper2.innerHTML= " " + " " + firsttrack.album_name;
					// dataWrapper3.innerHTML= " " + " " + firsttrack.artist_name;
					// // Second Search Query
					// dataWrapper4.innerHTML= " " + "2." + secondtrack.track_name;
					// dataWrapper5.innerHTML= " " + " " + secondtrack.album_name;
					// dataWrapper6.innerHTML= " " + " " + secondtrack.artist_name;
					// // Third Search Query
					// dataWrapper7.innerHTML= " " + "3." + thirdtrack.track_name;
					// dataWrapper8.innerHTML= " " + " " + thirdtrack.album_name;
					// dataWrapper9.innerHTML= " " + " " + thirdtrack.artist_name;
					// // Fourth Search Query
					// dataWrapper10.innerHTML= " " + "4." + fourthtrack.track_name;
					// dataWrapper11.innerHTML= " " + " " + fourthtrack.album_name;
					// dataWrapper12.innerHTML= " " + " " + fourthtrack.artist_name;
					// // Fifth
					// dataWrapper13.innerHTML= " " + "5." + fifthtrack.track_name;
					// dataWrapper14.innerHTML= " " + " " + fifthtrack.album_name;
					// dataWrapper15.innerHTML= " " + " " + fifthtrack.artist_name;



			// });



// }
