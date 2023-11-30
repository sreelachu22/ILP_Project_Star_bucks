import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const collectionName = "souravak211@gmail.com";



//fetches documents from a Firestore collection, iterates through each document, retrieves the data
database.collection(collectionName).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data);
        });
    })
    .catch((error) => {
        console.log("Error getting documents:", error);
    });



