// http:apis.paralleldots.com/text_docs/index.html?java#emotion

const form = document.querySelector('button'),
         dataWrapper = document.querySelector('.data-response');

   // Make the API call, e is the form submit object
   const getData = event => {

      // this if statement allows us to call the action without submitting the form
      if (event) {
         event.preventDefault();
      }


  fetch(`https://apis.paralleldots.com/v4/emotion${emotion.object}`)
         // convert it to readable data
         .then(response => response.json())
         // do something with the data
         .then(data => {
            let formattedData = '';
            if (data) {
               formattedData = data.emotion;
               console.log(data);
            }
            dataWrapper.innerHTML = formattedData;
         })
         .catch(error => console.error(error));
   };
   // makes sure the form exists before adding a listener to the submit action
   if (form) {
      form.addEventListener('submit', getData);
   };
//
//   import com.paralleldots.paralleldots.App;
// import org.json.simple.JSONObject;
// import org.json.simple.JSONArray;
// import org.json.simple.parser.JSONParser;
// App pd = new App("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
//
// // for single sentences
//
//     String emotion = pd.emotion("I am trying to imagine you with a personality");
//     System.out.println(emotion);
//
//
// // for multiple sentence as array
//     JSONArray text_list = (JSONArray)parser.parse("[ \"I am trying to imagine you with a personality\",  \"This is shit\"]");
//
//     String emotion_batch = pd.emotion_batch(text_list);
//     System.out.println(emotion_batch);
