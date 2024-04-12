if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

// Get all environmental variables
const { PORT, HOST } = process.env;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const routes = require('./src/routes');
const interceptor = require('./src/middlewares/interceptor');

app.use('/api', routes);
app.use('*', require('./src/routes/404'));
app.use(interceptor);

app.listen(PORT, HOST, () => {
  console.log(`Server listening to ${HOST}:${PORT}`);
});
