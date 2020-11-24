

$( document ).ready(function() {
     console.log( "ready!" );

    // // $('#text-input').on('change', () => {
    // //   console.log('input was changed');





    $('#search').on('click', () => {
      console.log('i was clicked');
      console.log($('#text-input').val());
      let searchTerm = $('#text-input').val();

      console.log(searchTerm);

      let url = "https://api.giphy.com/v1/gifs/search?api_key=3eG5OcLqnn9hoMlN0GSSgTw6CUwsYdre&q=" + searchTerm;

      $.get(url, function (giphyResponse) {
        console.log(giphyResponse);
        console.log('giphyData', giphyResponse.data) 
        console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
        console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
        console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);

        for (let image of giphyResponse.data) {
          let imgHTML = '<img src=${image.images.original.url} />'
          $('#search-result').append(imgHtml);
        }
      });



    })
      
});






















  