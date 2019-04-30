// var context = new AudioContext();

// window.onload = function() {
//   var context = new AudioContext();
//   // Setup all nodes
//   // ...
// }

function setup() {
  noCanvas()

  window.onload = function() {
  var context = new AudioContext();
  // Setup all nodes
  // ...

document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

}

// document.querySelector('button').addEventListener('click', function() {
//   var context = new AudioContext();
//   context.resume().then(() => {
//     console.log('Playback resumed successfully');
//   });
// });

  // let lang = navigator.language || 'es-do';
  let speechRec = new p5.SpeechRec('en-US', gotSpeech);

  let continous = true;
  let interim = true;
  speechRec.start(continous, interim);

  function gotSpeech() {
    if (speechRec.resultValue) {
      createP(speechRec.resultString)
    }
    console.log(speechRec);
}


//   function makeid(length) {
//    var words           = (speechRec.resultValue);
//    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var wordsLength = result.length;
//    for ( var i = 0; i < length; i++ ) {
//       words += words.charAt(Math.floor(Math.random() * wordsLength));
//    }
//    return result;
// }
//
// console.log(makeid(5));


}
