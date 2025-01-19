// function login() { 
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let form = document.getElementById("form");

//   // Use logical AND (&&) and ensure password is compared as a string
//   if (username === "rishikesh" && password === "123456") {
//     form.action = "http://127.0.0.1:5500/Admin/admin-side/index.html"; // Update form action
//   } else {
//     // Use alert correctly
//     alert("Wrong Username or Password");
//   }
// }




document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Retrieve user input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Validate credentials
  if ((username === "rishikesh" || username==="akash" 
    || username==="nithinpatel" || username==="manohar" 
    || username==="saivenkata") && password === "123456") {
    // Redirect to the target page
    this.action = "https://rishikeshkumaryadav77.github.io/admin-side-page/";
    this.submit(); // Programmatically submit the form
  } else {
    // Show error message
    alert("You Have Enter Wrong UserName or Password")
    let alertElement = document.getElementById("alert");
    alertElement.innerText = "Wrong Username or Password";
    alertElement.style.color = "red";
  }
});