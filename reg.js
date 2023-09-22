
//   const firebaseConfig = {
//     apiKey: "AIzaSyDjGS97WEm6Y3B-YDAsyCO650DdMiSoLbA",
//     authDomain: "ku-cse-fest-23.firebaseapp.com",
//     databaseURL: "https://ku-cse-fest-23-default-rtdb.firebaseio.com",
//     projectId: "ku-cse-fest-23",
//     storageBucket: "ku-cse-fest-23.appspot.com",
//     messagingSenderId: "680079040681",
//     appId: "1:680079040681:web:42d1efb5c1f8ba022889b8",
//     measurementId: "G-G1P8H08P8C"
//   };


//  app.initializeApp(firebaseConfig);
//  constapp.database().ref('')



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
// Initialize Firebase with your Firebase configuration

  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Realtime Database
  const registrationDB = firebase.database().ref("registrationForm");
  
  // Function to get values of input fields by name
  function getElementVal(name) {
    return document.querySelector(`[name="${name}"]`).value;
  }
  
  // Function to save registration data to Firebase
  function saveRegistration(studentName, studentRoll, studentEmail, studentPhone, programChoice, tshirtSize) {
    const newRegistration = registrationDB.push();
  
    newRegistration.set({
      studentName: studentName,
      studentRoll: studentRoll,
      studentEmail: studentEmail,
      studentPhone: studentPhone,
      programChoice: programChoice,
      tshirtSize: tshirtSize
    });
  }
  
  // Function to handle form submission
  function submitForm(e) {
    e.preventDefault();
  
    const studentNames = getStudentNames();
    const studentRolls = getStudentRolls();
    const studentEmails = getStudentEmails();
    const studentPhones = getStudentPhones();
    const programChoices = getProgramChoices();
    const tshirtSizes = getTshirtSizes();
  
    // Assuming that all arrays have the same length, you can loop through one of them
    // to process the form submissions
    for (let i = 0; i < studentNames.length; i++) {
      saveRegistration(studentNames[i], studentRolls[i], studentEmails[i], studentPhones[i], programChoices[i], tshirtSizes[i]);
    }
  
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Reset the form
    document.getElementById("registration-form").reset();
  }
  
  // Function to get an array of student names
  function getStudentNames() {
    const studentNameInputs = document.querySelectorAll('[name^="student_name[]"]');
    return Array.from(studentNameInputs).map(input => input.value);
  }
  
  // Function to get an array of student rolls
  function getStudentRolls() {
    const studentRollInputs = document.querySelectorAll('[name^="student_roll[]"]');
    return Array.from(studentRollInputs).map(input => input.value);
  }
  
  // Function to get an array of student emails
  function getStudentEmails() {
    const studentEmailInputs = document.querySelectorAll('[name^="student_email[]"]');
    return Array.from(studentEmailInputs).map(input => input.value);
  }
  
  // Function to get an array of student phones
  function getStudentPhones() {
    const studentPhoneInputs = document.querySelectorAll('[name^="student_phone[]"]');
    return Array.from(studentPhoneInputs).map(input => input.value);
  }
  
  // Function to get an array of program choices
  function getProgramChoices() {
    const programChoiceInputs = document.querySelectorAll('[name^="program_choice[]"]');
    return Array.from(programChoiceInputs).map(input => input.value);
  }
  
  // Function to get an array of t-shirt sizes
  function getTshirtSizes() {
    const tshirtSizeInputs = document.querySelectorAll('[name^="tshirt_size[]"]');
    return Array.from(tshirtSizeInputs).map(input => input.value);
  }
  
  // Add an event listener to the form for form submission
  document.getElementById("registration-form").addEventListener("submit", submitForm);
  
  // Add an event listener to the DOMContentLoaded event to initialize the page
  document.addEventListener("DOMContentLoaded", function () {
    // Get all section elements
    const sections = document.querySelectorAll("section");
  
    // Initial state: Hide all sections except the home section
    sections.forEach((section) => {
      if (section.id !== "home") {
        section.style.display = "none";
      }
    });
  
    // Function to show a specific section by its ID
    function showSection(sectionId) {
      sections.forEach((section) => {
        if (section.id === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    }
  
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
  
        // Remove the "active" class from all links
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
  
        // Add the "active" class to the clicked link
        link.classList.add("active");
        showSection(targetId);
      });
    });
  
    const registerButton = document.querySelector(".btn");
    registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = registerButton.getAttribute("href").substring(1);
  
      showSection(targetId);
  
      // Remove the "active" class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
  
      // Add the "active" class to the clicked link
      link.classList.add("active");
      showSection(targetId);
    });
  });
  