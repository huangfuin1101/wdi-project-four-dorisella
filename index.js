const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./config/router');
const { dbURI, port } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use('/api', router);


app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use((error, req, res, next) => {
  if (error && error.name === 'ValidationError') {
    res.json({ errors: error.errors });
  }
  next();
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
