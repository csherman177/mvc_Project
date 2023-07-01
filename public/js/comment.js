function addPost(event) {
  event.preventDefault();
  var title = document.getElementById("Title").value.trim();
  var content = document.getElementById("Body").value.trim();

  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("Bad Request");
    });
}

document.getElementById("blogSection").addEventListener("submit", addPost);
