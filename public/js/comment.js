function renderComment(event) {
  event.preventDefault();
  // var title = document.getElementById("Title").value.trim();
  var body = document.getElementById("comments").value.trim();
  console.log(body);
  var post_id = event.target.dataset.postid;

  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ body, post_id }),
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
      z;
      alert("Bad Request");
    });
}

document.getElementById("comm-id").addEventListener("submit", renderComment);
