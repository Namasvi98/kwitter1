var firebaseConfig = {
    apiKey: "AIzaSyA-Adh4X4yBShXMoAwo4rOv2N6D28_bULg",
    authDomain: "kwitter-3a577.firebaseapp.com",
    databaseURL: "https://kwitter-3a577-default-rtdb.firebaseio.com",
    projectId: "kwitter-3a577",
    storageBucket: "kwitter-3a577.appspot.com",
    messagingSenderId: "477330768038",
    appId: "1:477330768038:web:208df489800a7193c03467"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
  
        //End code
      });
    });
  }
  getData();