

$( document ).ready(function() {
     console.log( "ready!" );

    $('#fetch-from-api').on('click', () => {
      console.log('search was clicked');
      
      $.get('https://api.giphy.com/v1/gifs/search?api_key=eI7GLewxQL9oxBoEuUURa8bMi1adzwgH&q=corona', function(data) {
        console.log(data);
      
      
      });

    })

  });






















    //eI7GLewxQL9oxBoEuUURa8bMi1adzwgH//