var express = require('express')
var app = express()
var config = require('./config')
console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')
var parsedArticles = require('./data/ipsumArticles.json');


app.get('/articles', function(req, res) {
  models.Article.findAll().then(function(articles){
    res.json(articles)
  })
})


models.sequelize.sync({force: true}).then(function(x) {
  /*
  models.Article.create({
    title: 'testtitle',
    category: 'testcategory',
    author: 'testauthor',
    authorUrl: 'testauthorurl',
    publishedOn: 'testpublish',
    body: 'testbody'
  })
  */
  parsedArticles.forEach(function(article) {
    models.Article.create({
      title: article.title,
      category: article.category,
      author: article.author,
      authorUrl: article.authorUrl,
      publishedOn: article.publishedOn,
      body: article.body
    })
  })
})

fetchAll = function(next) {
    console.log('fetching...');

    $.getJSON('data/hackerIpsum.json', function(rawData) {
      // Cache the json, so we don't need to request it next time:

      });
  };

app.listen(PORT, function() {
  console.log('server started')
  console.log('listening on PORT: ' + PORT)
  console.log('DB URI STRING: ' + DB)
})
