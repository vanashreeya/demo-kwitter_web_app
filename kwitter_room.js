const firebaseConfig = {
      apiKey: "AIzaSyD2n4WYq_O-GVWw3lDLhe4s0grzQLVbiKg",
      authDomain: "class-test-65909.firebaseapp.com",
      databaseURL: "https://class-test-65909-default-rtdb.firebaseio.com",
      projectId: "class-test-65909",
      storageBucket: "class-test-65909.appspot.com",
      messagingSenderId: "874357626648",
      appId: "1:874357626648:web:691095b8133427d845f06d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";  
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}