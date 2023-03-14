const express = require('express');
const { routers } = require('./src/router/routes');

const app = express();

app.use('/', routers);
app.use(express.static('public'));
app.use(express.json());

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
});
