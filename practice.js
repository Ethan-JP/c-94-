
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDp2gAqXczbA0qe4L9Ds2P0Aw0R9F3Ckzs",
    authDomain: "kwitter-e9c58.firebaseapp.com",
    databaseURL: "https://kwitter-e9c58-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9c58",
    storageBucket: "kwitter-e9c58.appspot.com",
    messagingSenderId: "336202538250",
    appId: "1:336202538250:web:aed46ba6386d8a8df66ef3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//code for creating the main folder in database
  function addroom(){
      roomname=document.getElementById("roominput").value;
      firebase.database().ref("/").child(roomname).update({
          status : "Room Name Added"
      })
  }
//code for storing data in the main folder
  function send(){
    username=document.getElementById("userinput").value;
    roomname=document.getElementById("roominput").value;
    message=document.getElementById("messageinput").value;
    firebase.database().ref(roomname).push({
        user : username,
        message : message
    })
  }