const express = require('express');
const { loginRedirection } = require('./src/routers/loginRedirection');
// const { loginRouters } = require('./src/routers/loginRouters');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use('/', loginRedirection);
// app.use('/', loginRouters);

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
});
