// unirest.get("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/matcher.track.get?f_has_lyrics=1&q_artist=coldplay&q_track=paradise")
// .header("X-RapidAPI-Host", "musixmatchcom-musixmatch.p.rapidapi.com")
// .header("X-RapidAPI-Key", "afcdf3e5a3msh8d1385a8b71a6f0p1dc67ejsn27f5b64c7f2b")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

HttpResponse<JsonNode> response = Unirest.get("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/matcher.track.get?f_has_lyrics=1&q_artist=coldplay&q_track=paradise")
.header("X-RapidAPI-Host", "musixmatchcom-musixmatch.p.rapidapi.com")
.header("X-RapidAPI-Key", "afcdf3e5a3msh8d1385a8b71a6f0p1dc67ejsn27f5b64c7f2b")
.asJson();
