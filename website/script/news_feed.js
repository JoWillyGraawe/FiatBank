const FEED_URL = 'https://independentbanker.org/feed/';

  // generateNewsItem = function () {

  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     if (xhttp.readyState == 4 && xhttp.status == 200) {
  //       var parser = new DOMParser();
  //       var xmlContent = parser.parseFromString(xhttp.responseText, 'text/xml');
  //       var newsfeed_item = '';
  //       title = xmlContent.getElementsByTagName('title')[0];
  //       link = xmlContent.getElementsByTagName('link')[0];
  
  //       newsfeed_item += '<ul>';
        
  //       for (i = 1; i < title.length; i++) {
  //         newsfeed_item += '<li><article class="blog-post"><a href="' + link[i].childNodes[0].nodeValue + '">' + title[i].childNodes[0].nodeValue + '</a></article></li>';
  //       }
        
  //       newsfeed_item += '</ul>';
  
  //       document.getElementById('blog-section').innerHTML = newsfeed_item;
  //       window.location.hash = '#blog-section';
  //     }
  //   };
  //   xhttp.open('GET', FEED_URL, true);
  //   xhttp.send();
  
  //   return false;
  
  // };