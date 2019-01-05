const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const template = require('./template')

// MIDDLEWARE
//    logging middleware
app.use(morgan('dev'));

//    Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Static Middleware: Allows users/clients to access all files in the `public` directory
app.use(express.static(path.join(__dirname, '..', 'public')))

let initialState = {
}

//SSR function import
const ssr = require('../views/server');

// server rendered home page
app.get('/*', (req, res) => {
  const { preloadedState, content}  = ssr(initialState, req.url)
  const response = template('Server Rendered Page', preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});


// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error.');
});

module.exports = app
