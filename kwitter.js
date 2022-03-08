var firebaseConfig = {
    apiKey: "AIzaSyDDS9FD52TseMJe5b5Ao5cll8VQ92BlXJQ",
    authDomain: "mycity-jtlh.firebaseapp.com",
    databaseURL: "https://mycity-jtlh-default-rtdb.firebaseio.com",
    projectId: "mycity-jtlh",
    storageBucket: "mycity-jtlh.appspot.com",
    messagingSenderId: "1095225555794",
    appId: "1:1095225555794:web:e39753529f5517461e988b",
    measurementId: "G-P7R2S57B69"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function addUser(){
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding User"
  });
}