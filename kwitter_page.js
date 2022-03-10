var firebaseConfig = {
    apiKey: "AIzaSyDOj-2rPST0ZnxUBD4JuSPNcTL3mH8DXo8",
    authDomain: "lets-chat-1fdb1.firebaseapp.com",
    databaseURL: "https://lets-chat-1fdb1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1fdb1",
    storageBucket: "lets-chat-1fdb1.appspot.com",
    messagingSenderId: "534257675144",
    appId: "1:534257675144:web:b8df191a5cf390a45ca83d"
  };
  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}