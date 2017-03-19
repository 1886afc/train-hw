

// 1. Initialize Firebase
 var config = {
    apiKey: "AIzaSyA9llwnu5--MA9oITfux8HnMr8ELSsS2qs",
    authDomain: "afc-d500b.firebaseapp.com",
    databaseURL: "https://afc-d500b.firebaseio.com",
    storageBucket: "afc-d500b.appspot.com",
    messagingSenderId: "641050935223"
  };

firebase.initializeApp(config);

var database = firebase.database();

//Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  //grabs input from html
  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainFreq = moment($("#frequency-input").val().trim(), "k kk").format("X");
  var trainArrival = moment($("#first-train-input").val().trim(), "k kk").format("X");
  //console.log form inputs
  console.log(trainName);
  console.log(trainDest);
  console.log(trainFreq);
  console.log(trainArrival);

  //save new values to firebase
  database.ref().push( {
    trainName: trainName,
    trainDest: trainDest,
    trainFreq: trainFreq,
    trainArrival: trainArrival
  });

  // clears all input boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#first-train-input").val("");

});

//firebase event for adding new trains from firebase to html
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log("here " + childSnapshot.val());

  //storing everything into a variable
  var trainName = childSnapshot.val().trainName;
  var trainDest = childSnapshot.val().trainDest;
  var trainFreq = childSnapshot.val().trainFreq;
  var trainArrival = childSnapshot.val().trainArrival;

  //console logging train info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainFreq);
  console.log(trainArrival);

  //calculating difference between arrivals
  var minutesTil = moment()
  //calculating minutes away
//  could not get this to work!!!!!!
  //calculating next arrival
  //var nextArrival = moment(trainArrival).add(moment.unix(trainFreq, "X"), "minutes");
  //var nextArrival = trainArrival.add(trainFreq, "minutes");
  //console.log("next: " + nextArrival)

  //adding the data to the table

  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" +  + "</td></tr>")
});