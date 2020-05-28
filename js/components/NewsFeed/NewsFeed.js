var NewsFeed = (function () {

  function getNewsFeedData() {
    // Set up request parameters
    var params = {
      country: 'us',
      apiKey: '8e63316767f14a0bba6e4fbca94276e2'
    };

    // Create an ajax get request to obtain data
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines",
      type: "GET",
      data: utils.toQueryString(params),
      success(data, text) {
        console.log('data', data);

        // $("#demo").html(data);

        // x = data.articles[0].author;
        // y = data.articles[1].content;
        // console.log(y)i
        for (i= 0; i <= 3; i++)
        {
          let titulo = data.articles[i].title;
          let descripcion = data.articles[i].description;
          let imagen = data.articles[i].urlToImage;
          let fecha = data.articles[i].publishedAt;

          console.log(imagen);

          
         document.getElementById("titulo").innerHTML += titulo + "<br>";
         document.getElementById("descripcion").innerHTML += descripcion + "<br>";
        document.getElementById("imagen").innerHTML += imagen + "<br>";
        document.getElementById("fecha").innerHTML += fecha + "<br>";

        }


     
        // let titulo = data.articles[19].title;
        // let descripcion = data.articles[19].description;
        // let imagen = data.articles[19].urlToImage;
        // let fecha = data.articles[19].publishedAt;

        // var x = "";
        // var y = "";
        // var c = "";

        //  document.getElementById("titulo").innerHTML += titulo;
        //  document.getElementById("descripcion").innerHTML += descripcion;
        // document.getElementById("imagen").innerHTML += imagen;
        // document.getElementById("fecha").innerHTML += fecha;

        // for (i in data.articles) {
        //   // x +=  data.articles[i].title;
        //   x += "<h2>" + data.articles[i].title + "</h2>";
         
        //   for (j in data.articles[i].author) {
        //     x += data.articles[i].author[j] ;
            
        //   }
        //   for(k in data.articles[i].content){
        //     x += data.articles[i].content[k] ;
           
        //   }
          
        // }

        // document.getElementById("title").innerHTML = x;
          // document.getElementById("autor").innerHTML = y;
          // document.getElementById("contenido").innerHTML = c;

      },
      error(request, status, error) {
        console.log('error', error)
      }
    });
  }

  function renderNewsFeed() {
    getNewsFeedData();
  }

  return {
    renderNewsFeed: renderNewsFeed
  };
})();

