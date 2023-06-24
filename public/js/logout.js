function logout(event) {
    event.preventDefault();
  
    fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      .then((response) => {
        if (response.ok) {
          document.location.replace("/login");
        } else {
          throw new Error("Logout failed");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Logout failed");
      });
  }
  

  document.querySelector("#logout-form").addEventListener("click", logout)