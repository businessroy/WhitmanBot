var twit = require('twit');
var config = require('./whitmanconfig.js');
var stanzas = require('./stanzas.js');
var Twitter = new twit(config);

//console.log(stanzas.stanzas);

setInterval(function(){

  var stanzaStatus = stanzas.stanzas[Math.floor(Math.random() * stanzas.stanzas.length)] + " " + Math.random();

  Twitter.post(
	  'statuses/update',
	  { status: stanzaStatus },
	  (err, data, response) => {
	    console.log("tweeted: " + stanzaStatus);
	    console.log(err);
	  }
	)
}, 10000);
//post a tweet


