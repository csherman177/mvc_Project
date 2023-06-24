
function addPost (event)  {
    event.preventDefault()
    var body = document.getElementById("comments").value.trim()
    console.log(event.target.dataset.postid)
    var post_id=event.target.dataset.postid
    fetch (
        "/api/comments/", {
            method:"POST",
            body:JSON.stringify({body, post_id}),
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

document.querySelector(".com-form").addEventListener("submit", addPost)