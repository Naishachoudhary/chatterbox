// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCMiMo21vpMiVwsza9_Zr8EjVEomPHJwCw",
      authDomain: "chatterbox-a8681.firebaseapp.com",
      databaseURL: "https://chatterbox-a8681-default-rtdb.firebaseio.com",
      projectId: "chatterbox-a8681",
      storageBucket: "chatterbox-a8681.appspot.com",
      messagingSenderId: "564817432470",
      appId: "1:564817432470:web:06ec29ea513a1c9f41d7b7"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
