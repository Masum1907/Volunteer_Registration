// Firebase configuration (same as in your registration page)
const firebaseConfig = {
    
    
    apiKey: "AIzaSyDjGS97WEm6Y3B-YDAsyCO650DdMiSoLbA",
    authDomain: "ku-cse-fest-23.firebaseapp.com",
    databaseURL: "https://ku-cse-fest-23-default-rtdb.firebaseio.com",
    projectId: "ku-cse-fest-23",
    storageBucket: "ku-cse-fest-23.appspot.com",
    messagingSenderId: "680079040681",
    appId: "1:680079040681:web:42d1efb5c1f8ba022889b8",
    measurementId: "G-G1P8H08P8C"



};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function displayParticipants(programChoice, containerId) {
    var participants = [];
    var registrationRef = database.ref("registrationForm");

    registrationRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var registrationData = childSnapshot.val();
            if (registrationData.programChoice === programChoice) {
                participants.push({
                    Name: registrationData.studentName,
                    "Student ID": registrationData.studentRoll,
                    Email: registrationData.studentEmail,
                    "Contact Number": registrationData.studentPhone,
                    "T-shirt Size": registrationData.tshirtSize
                });
            }
        });

        var container = document.getElementById(containerId);
        if (participants.length > 0) {
            var table = document.createElement("table");
            var headerRow = table.createTHead().insertRow();
            for (var key in participants[0]) {
                headerRow.insertCell().textContent = key;
            }
            participants.forEach(function(participant) {
                var row = table.insertRow();
                for (var key in participant) {
                    row.insertCell().textContent = participant[key];
                }
            });
            container.appendChild(table);
        } else {
            container.textContent = "No participants found for " + programChoice;
        }
    });
}

// Display participants for each category
displayParticipants("Programming Contest", "programmingContestParticipants");
displayParticipants("Hackathon", "hackathonParticipants");
displayParticipants("Datathon", "datathonParticipants");
displayParticipants("Gaming", "gamingParticipants");
