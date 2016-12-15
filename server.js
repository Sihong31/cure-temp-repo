const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const reload = require('reload');
const express = require('express');
const apiRouter = require('./routes/api');
const app = express(); 

app.set('port', process.env.PORT || 3000 );

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(sassMiddleware({
	src: path.join(__dirname, '/sass'),
	dest: path.join(__dirname, '/public'),
	// debug: true
}));
app.use(express.static('public'));
app.use(require('./routes/api'));
app.use(require('./routes/index'));

const server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


reload(server, app);



