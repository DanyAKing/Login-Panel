const express = require('express');
const { engine } = require('express-handlebars');
const { loginRedirection } = require('./src/routers/loginRedirection');
const { loginRouters } = require('./src/routers/loginRouters');

const app = express();

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', loginRedirection);
app.use('/login', loginRouters);
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
});
