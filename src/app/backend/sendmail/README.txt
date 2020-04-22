This is the backend service that allows for the website to email the textbook library director
to notify them of textbook requests students have made.

This service is ran on firebase functions. To deploy any changes, do 

firebase deploy --only functions

MAKE SURE you have npm and node.js installed, as well as the firebase CLI which
can be installed globally by: npm install -g firebase-tools.

Remember to do npm install INSIDE of the functions directory to install the packages required.

To change who is getting the email, chang the "to:" parameter. Do not change anything related
to mathsoclibrary@gmail.com pwease :3