function logout(event) {
  event.preventDefault();
  console.log("logout")

  fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        document.location.replace("/login");
      } else {
        throw new Error("Logout failed!");
      }
    })
    .catch((error) => {
      alert("Logout failed");
      console.log(error);
    });
}

document.querySelector(".logout").addEventListener("click", logout);
