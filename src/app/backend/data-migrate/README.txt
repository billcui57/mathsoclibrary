To update the online catalogue from the catalogue.csv, edit the csv and then run in your Terminal or CMD run the following commands.

Make sure you have npm installed on your computer


1.npm install -g csv-to-firestore

2.Get the service account (.json) from the mathsoclibrary firebase account (steps here:     https://cloud.google.com/docs/authentication/production), put in the same directory as the .csv and change the creditial parameter in csv-firestore-config.js to be the name of the service account .json.

2.csv-to-firestore -c csv-to-firestore-config.json // or
  csv-to-firestore --config csv-to-firestore-config.json
