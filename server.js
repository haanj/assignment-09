var express = require('express')
var app = express()
var config = require('./config')
console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')


app.get('/articles', function(req, res) {
  models.Article.findAll().then(function(articles){
    res.json(articles)
  })
})


models.sequelize.sync({force: true}).then(function(x) {
  models.Article.create({
    name: 'meow',
    age: 2
  })
})


app.listen(PORT, function() {
console.log('server started')
console.log('listening on PORT: ' + PORT)
console.log('DB URI STRING: ' + DB)
})
