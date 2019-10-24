//  Initialize Firebase
var config = {
  apiKey: "AIzaSyBExA8YYfRQ8TMRt7SL-MOOV3_P7GugDSs",
  authDomain: "avian-safeguard-256903.firebaseapp.com",
  databaseURL: "https://avian-safeguard-256903.firebaseio.com",
  storageBucket: "avian-safeguard-256903.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

//  Button for adding contact data
$(".btn").on("click", function(event) {
  event.preventDefault();

  var contactName = $("#inputName")
    .val()
    .trim();
  var contactEmail = $("#inputEmail")
    .val()
    .trim();
  var contactComment = $("#inputComment")
    .val()
    .trim();

  // Creates local "temporary" object for holding contact data
  var newContact = {
    name: contactName,
    email: contactEmail,
    comment: contactComment
  };

  // Uploads contact data to the database
  database.ref().push(newContact);

  // Logs everything to console
  console.log(newContact.name);
  console.log(newContact.email);
  console.log(newContact.comment);

  // Clears all of the text-boxes
  $("#nameInput").val("");
  $("#emailInput").val("");
  $("#commentInput").val("");
  $("form").trigger("reset");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
});
