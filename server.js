// server.js

var express = require("express"), // Include express.
    twilio = require("twilio"); // Include twilio.

var app = express(); // Initialize express.

app.use(express.static(__dirname + '/app')); // Serve files from the /app directory.

// Get a Twilio capability token.
app.get("/twilio/token", function (req, res) {
  var capability = new twilio.Capability( // Create a Twilio capability token.
    '<Enter your ACCOUNT SID here>',
    '<Enter your AUTH TOKEN here>'
  );

  // Set the capability token to allow the client to make outbound calls.
  capability.allowClientOutgoing('<Enter your APP SID here>');

  // Send the token to the client.
  res.send(capability.generate());
});

// Fire up the server and start listening!
app.listen(3000, function () {
  console.dir("Express server started on port 3000.");
});