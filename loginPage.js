// Function that runs when the login button is clicked
function checkLogin() {

   // Get the values from the input fields
   let username = document.getElementById("login").value;
   let password = document.getElementById("password").value;

   // The correct login details (you can change these)
   let correctUsername = "github";
   let correctPassword = "1234";

   // Check if the username and password match
   if (username === correctUsername && password === correctPassword) {

      // Redirect to another page if correct
      window.location.href = "Index.html";

   } else {

      // Show error message if incorrect
      alert("Incorrect username or password");

   }
}