module.exports = {
    path: 'catalogue.csv', // Your CSV file name
    firebase: {
        credential: 'mathsoclibrary-firebase-adminsdk-9amx0-0487e10d5d.json', // Your service account file name
        collection: 'catalogue', // target Collection in Firestore
    },
    mapper: (dataFromCSV) => { // Mapper Method as optional field
        return dataFromCSV // Return data for saving in Firestore
    }
}