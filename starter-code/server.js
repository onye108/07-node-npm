'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file
const express = require('express')
const app = express();
// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
// DONE: Include all of the static resources as an argument to app.use()

app.get('/index.html', function(request, response) {
  response.sendFile('vendor/index.html', { root: './public'});
});
// DONE: Using the response object, send the index.html file back to the user

app.get('/new.html', function(request, response) {
  response.sendFile('vendor/new.html', { root: './public'});
});
// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('*', function(request, response) {
  response.send('ERROR');
})

app.listen(PORT, function() {
  console.log(`Server is now listening on Port ${PORT}`);
  // DONE: Log to the console a message that lets you know which port your server has started on
});
