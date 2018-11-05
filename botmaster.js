var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);


//post a tweet
Twitter.post(
  'statuses/update',
  { status: 'This is an automated test!' },
  (err, data, response) => {
    console.log(err, data, response);
  }
)