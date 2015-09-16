var express = require('express'),
    app     = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'jade')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

var server = app.listen(port, function () {
  console.log('Escuchando en el puerto %s', port);
})
