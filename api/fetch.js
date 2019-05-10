// example: https://github.com/dleatherman/dleatherman.github.io/blob/master/sp19-ci/musixmatch/js/scripts.js

(function () {

  const form = document.querySelector('form'),
        dataWrapper = document.querySelector('.data-response');

   const APIKEY = '8ad9d3229a52a5d4132e5080da3fcde6',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      artistForm = document.querySelector('#artist__form'),
      artistSelect = document.querySelector('#artist__select'),
      lyricsListWrapper = document.querySelector('#lyrics__list');

      const getArtistInfo = (event) => {

         event.preventDefault();
         var opt = artistSelect.options[artistSelect.selectedIndex];
         console.log(opt.value);

         if(!artistSelect.value) {
            window.alert('Please select an artist');
            return;
         }

let findTrack;

   fetch(`${proxy}http://api.musixmatch.com/ws/1.1/track.search?f_artist_id=${opt.value}&s_artist_rating=desc&s_track_rating=desc&q_lyrics&apikey=${APIKEY}`)
         .then(response => {
           return response.json();
         })
         .then(data => {

           console.log(data);
            if (!data) {
               throw new Error(data.message.header.statusText || 'Unknown Error');
            }
            return data.message.body.album_list;
         })
         .then(lyrics => {
            let lyricsList = '<ul>';
            for (let i = 0; i < lyrics.length; i++) {
               lyricsList += `<li>${lyrics[i].lyrics.has_lyrics}</li>`;
            }
            lyricsList += '</ul>';
            lyricsListWrapper.innerHTML = lyricsList;
         })
         .catch(error => console.error(error));
   };

   if(artistForm) {
      artistForm.addEventListener('submit', getArtistInfo);
      // artistForm.addEventListener('submit', getArtistInfo);
   }

}());
