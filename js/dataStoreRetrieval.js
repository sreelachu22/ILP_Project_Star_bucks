const firebaseConfig = {
    apiKey: "AIzaSyChHTWfu8OOy0CH1bZA-G9j2FEXOIiHR5c",
    authDomain: "starbucks-authentication.firebaseapp.com",
    projectId: "starbucks-authentication",
    storageBucket: "starbucks-authentication.appspot.com",
    messagingSenderId: "373089171674",
    appId: "1:373089171674:web:74b8143b69937bcab3cde3",
    measurementId: "G-G5J0Q2F35X"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const collectionName = "souravak211@gmail.com";



//fetches documents from a Firestore collection, iterates through each document, retrieves the data
database.collection(collectionName).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data);
            // You can handle each retrieved document data here
        });
    })
    .catch((error) => {
        console.log("Error getting documents:", error);
    });



