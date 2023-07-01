const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector(
    'textarea[name="post-body"]'
  ).value;

  console.log(postTitle);
  console.log(postContent);

  const response = await fetch(`/api/posts/:id`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update your post");
  }
  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);
