Twilio-AngularJS-Demo

See ./tutorial/tutorial.html for a deeper understanding of how this application works. Just double click the file to view it.

To run this project using your Twilio account follow these steps:
1. Download the projects zip file.
2. Open server.js and add three values:
    a. Your ACCOUNT SID.
    b. Your AUTH TOKEN.
    c. Your APP SID. (See tutorial.html for setup instructions)
   Save and close after they are added.
3. Open app.html and add two values in the call() function:
    a. Your Twilio number.
    b. The number you want to call.
   Both numbers should be of the form: +15556667777
   Save and close after they are added.
4. In the top-level directory (where server.js is) type: npm install (you may need to be root for this).
5. In the same directory start the server by typing: node server.js
6. Open the browser to: http://localhost:3000/app.html
7. Press the Call button to make a call and the Hang Up button to disconnect the call.

Note: Make sure you accept the permission for the browser to use your computers microphone or the call will not work.

Enjoy!