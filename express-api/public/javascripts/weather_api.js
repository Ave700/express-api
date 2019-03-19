

var weatherD;


if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b16cb60fd11bd63d4136d47f40d7b772&units=imperial`, function(data) {
    console.log(data);
    weatherD = data;
    var temp = weatherD.main.temp;
    var city = weatherD.name;
    var condition = `${weatherD.weather[0].main}`;

    document.getElementById('temp').innerHTML = temp;
    document.getElementById('city').innerHTML = city;
    document.getElementById('condition').innerHTML = condition;

        var genre
    if(condition == 'Clear'){genre = '28'; movieSug(genre)} //If clear search for action
    else if(condition == 'Clouds'){genre = '18'; movieSug(genre)} //if cloud drama
    else if(condition == 'Rain'){genre = '9648'; movieSug(genre)} //if rain mystery
    else if(condition == 'Mist'){genre = '27'; movieSug(genre)} //if mist call horror
    else if(condition == 'Drizzle'){genre = '878'; movieSug(genre)}// if drizzle call scifi
    else if(condition == 'Thunderstorm'){genre = '10752'; movieSug(genre)}//if thunder call war
    else{};

});
      });
  } else {
    /* geolocation IS NOT available */
  }
//function to pull down top 5 (based on popularity) movies from genre. 
  function movieSug(genre){
    $.getJSON(`https://api.themoviedb.org/3/discover/movie?api_key=15dc0cc02c9e91143a2bf19debd4a97a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`, function(genreData){
        var title1 = genreData.results[1].title;
        var title2 = genreData.results[2].title;
        var title3 = genreData.results[3].title;
        var title4 = genreData.results[4].title;
        var title5 = genreData.results[5].title;

        document.getElementById('suggestion1').innerHTML = title1;
        document.getElementById('suggestion2').innerHTML = title2;
        document.getElementById('suggestion3').innerHTML = title3;
        document.getElementById('suggestion4').innerHTML = title4;
        document.getElementById('suggestion5').innerHTML = title5;
        

    });
}

