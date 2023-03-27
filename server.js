const express = require('express');
const hbs = require('express-handlebars');
const { loginRedirection } = require('./src/routers/loginRedirection');
const { loginRouters } = require('./src/routers/loginRouters');

const app = express();

app.use(express.urlencoded({
  extended: true,
}));
app.engine('.hbs', hbs.engine({
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
// app.engine('hbs', engine());
// app.set('view engine', 'hbs');
// app.set('views', './views');
app.use(express.json());
app.use(express.static('public'));
app.use('/', loginRedirection);
app.use('/login', loginRouters);

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
});
