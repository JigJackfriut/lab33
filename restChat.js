// Rest based chat client
// Jim Skon 2022
// Kenyon College

var baseUrl = 'http://54.198.38.17:5005';
var state="off";
var myname="";
var inthandle;
var inthandleUsers;
var currentUsers = [];
var masterUsers = [];

/* Start with text input and status hidden */
document.getElementById('chatinput').style.display = 'none';
document.getElementById('status').style.display = 'none';
document.getElementById('leave').style.display = 'none';


// I wrote code for registration

// Define a function to handle registration form submission
function registerUser() {
  // Get the form input values
  const name = document.getElementById("orangeForm-name").value;
  const email = document.getElementById("orangeForm-email").value;
  const password = document.getElementById("orangeForm-pass").value;
  
  // Validate the input
  if (!name || !email || !password) {
    alert("Please fill out all fields");
    return;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  } else if (checkIfUsernameExists(name)) {
    alert("Username already exists");
    return;
  } else {
    // Save user credentials to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration successful!");
  }
}

function checkIfUsernameExists(username) {
  // Check if username exists in localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some(user => user.name === username);
}

// Attach the registerUser function to the form submit button
const submitButton = document.getElementById("saveChangesButton");
submitButton.addEventListener("click", registerUser);









// login button stuff

function loginUser() {
  // Get the form input values
  const password = document.getElementById("yourpass").value;
  const username = document.getElementById("yourname").value;
  
  // Check if username and password are valid
  if (!username || !password) {
    alert("Please enter both username and password");
    return;
  } else if (!checkIfUsernameExists(username)) {
    alert("Username not found");
    return;
  }
  
  // Check if username and password match
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = users.find(user => user.name === username);
  if (currentUser.password !== password) {
    alert("Incorrect password");
    return;
  }
  
  // Login successful
  alert("Login successful!");
  // You can redirect to a different page or perform any other action here
}

const submitButton = document.getElementById("login-btn");
loginButton.addEventListener("click",loginUser);


