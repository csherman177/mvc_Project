// login function
function login(event) {
  event.preventDefault();
  var email = document.getElementById("loginEmail").value.trim();
  var password = document.getElementById("loginPassword").value.trim();
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.location.replace("/profile");
    })
    .catch((error) => {
      console.log(error);
      alert("Bad Login Request");
    });
}

// sign-up function
function signUp(event) {
  event.preventDefault();
  var email = document.getElementById("signupEmail").value.trim();
  var username = document.getElementById("signupUsername").value.trim();
  var password = document.getElementById("signupPassword").value.trim();
  console.log(email);
  console.log(username);
  console.log(password);
  fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.location.replace("/profile");
    })
    .catch((error) => {
      console.log(error);
      alert("Bad Sign-Up Request");
    });
}

document.querySelector(".login").addEventListener("submit", login);
document.querySelector(".signup").addEventListener("submit", signUp);
