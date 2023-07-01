function userPost (event)  {
    event.preventDefault()
    var title = document.getElementById("Title").value.trim()
    var content=document.getElementById("Body").value.trim()
    fetch (
        "/api/posts/", {
            method:"POST",
            body:JSON.stringify({title, content}),
            headers:{
                "Content-Type":"application/json"
            }
        }
    ).then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        document.location.reload()
        
    }) .catch(error =>{
        console.log(error)
        alert("Bad Request")
    })
}

// Delete Button Function
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log('data-id')
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

document.querySelector("#blogSection").addEventListener("submit", userPost)
//Delete Button
document.addEventListener("submit", function(event) {
    if (event.target.classList.contains("delButtonHandler")) {
      deleteButton(event);
    }
  });

  document
  .querySelector('.deleteButton')
  .addEventListener('click', delButtonHandler);