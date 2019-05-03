// https://www.w3schools.com/js/js_loop_for.asp REF FOR LOOP

// create a variable to store speech recognition object
var foo;
const APIKEY='8ad9d3229a52a5d4132e5080da3fcde6';
proxy = 'https://cors-anywhere.herokuapp.com/';
function setup(){
	// speech recognition object (will prompt for mic access)
	// PAUSE BUTTON
	foo = new p5.SpeechRec('en-US');

	createCanvas(windowWidth, windowHeight);

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
	foo.start();
}

// ????????????????????????????????must have draw function to work?
function draw(){
}

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
	text(foo.resultString, random(width), random(height));

			//Permissions stuff for the API!
			let api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${foo.resultString}&page_size=3&s_track_rating=desc&apikey=${APIKEY}`;
			// &artist.album.get=${findArt}

			// Begin fetching the info from the API!
			fetch(api)
			.then(response => {
					return response.json();
			}).then(data => {
					// console.log(data);
					let trackList = data.message.body.track_list;
					// console.log(trackList);

					for (var i = 0; i < trackList.length; i++) {
						console.log('track name: ', trackList[i].track.track_name);
						console.log('track rating: ', trackList[i].track.track_rating);
						console.log('album name: ', trackList[i].track.album_name);
					}

					//This section tells what info to open up for the API!
					//Remember, the names & numbers refer to their corresponding values across the document.
					//
					let tracklist = data.message.body.track_list;
					let firsttrack = tracklist[0].track;
					let secondtrack = tracklist[1].track;
					let thirdtrack = tracklist[2].track;
					let fourthtrack = tracklist[3].track;
					let fifthtrack = tracklist[4].track;

					let firsttrackrating = firsttrack.track_rating;
					let secondtrackrating = secondtrack.track_rating;
					let thirdtrackrating = thirdtrack.track_rating;
					let fourthtrackrating = fourthtrack.track_rating;
					let fifthtrackrating = fifthtrack.track_rating;

					//This section prints the information into the website!
					//Remember, it must be defined with the variables from the top!
					//Also, the firsttrack /is a random name/. track_name /name of folder provided in the console log(data) thing/
					// First Search Query
					dataWrapper1.innerHTML= " " + "1." + firsttrack.track_name;
					dataWrapper2.innerHTML= " " + " " + firsttrack.album_name;
					dataWrapper3.innerHTML= " " + " " + firsttrack.artist_name;
					// Second Search Query
					dataWrapper4.innerHTML= " " + "2." + secondtrack.track_name;
					dataWrapper5.innerHTML= " " + " " + secondtrack.album_name;
					dataWrapper6.innerHTML= " " + " " + secondtrack.artist_name;
					// Third Search Query
					dataWrapper7.innerHTML= " " + "3." + thirdtrack.track_name;
					dataWrapper8.innerHTML= " " + " " + thirdtrack.album_name;
					dataWrapper9.innerHTML= " " + " " + thirdtrack.artist_name;
					// Fourth Search Query
					dataWrapper10.innerHTML= " " + "4." + fourthtrack.track_name;
					dataWrapper11.innerHTML= " " + " " + fourthtrack.album_name;
					dataWrapper12.innerHTML= " " + " " + fourthtrack.artist_name;
					// Fifth
					dataWrapper13.innerHTML= " " + "5." + fifthtrack.track_name;
					dataWrapper14.innerHTML= " " + " " + fifthtrack.album_name;
					dataWrapper15.innerHTML= " " + " " + fifthtrack.artist_name;



			});



}
