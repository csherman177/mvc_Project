const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

  const id = document.querySelector(".edit-post-form").dataset.id;

  console.log(title);
  console.log(content);
  console.log(id);

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to update your post");
  }
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
