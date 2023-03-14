const express = require('express');
const { routers } = require('./src/router/routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use('/', routers);

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
});
