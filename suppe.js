var rss = require('parserss');

rss('http://realtin.soup.io/rss', 23, function (err, res) {
  // console.log(err);
  // for (var i = 0; i < res.articles.length; i++) {
    // console.log(res.articles[22].description.replace(/\/n/, '').split('<br><br>')[0].split('<p></p>')[0].trim())
    console.log(res.articles[7].description.replace(/\/n/, '').split('<p>[Reposted from')[0].trim())
    console.log(res.articles[7])
  // }
  // console.log(res.articles);
});
