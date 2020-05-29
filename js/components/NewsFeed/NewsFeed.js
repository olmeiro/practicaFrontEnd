var NewsFeed = (function () {

  function getNewsFeedData() {
    // Set up request parameters
    var params = {
      country: 'us',
      apiKey: '8e63316767f14a0bba6e4fbca94276e2'
    };

    // Create an ajax get request to obtain data
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=co&pageSize=4&apikey=8e63316767f14a0bba6e4fbca94276e2",
      type: "GET",
      data: utils.toQueryString(params),
      success(data, text) {
        
        var articles = data.articles;
        console.log(articles);
       
        var $newFeed = $('.news-feed');
        $newFeed.css("background-color", "aquamarine");

        articles.forEach(function(article){
          var titleNew = $('<span>',{html:article.title});
          var authorArticle = $('<span>',{html:article.author});
          var descriptionArticle = $('<span>', {html:article.description});
          var dateNew = $('<span>', {html:article.publishedAt});
          
          // var imgUrl = $('<img>', {html:article.urlToImage});
          // var image = $('<img>').attr(src);

          //   console.log(imgUrl);

          var test = titleNew.html() + "<br><br>" + authorArticle.html() + '<br><br>' + descriptionArticle.html() + "<br><br>" + dateNew.html() ;
          // + "<br>" + image.html()
          console.log(test);
          var container = $('<div>', {html:(test)});

          $newFeed.append(container);

        });

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

