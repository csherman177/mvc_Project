function login (event) {
    event.preventDefault()
    var email = document.getElementById("loginEmail").value.trim()
    var password = document.getElementById("loginPassword").value.trim()
    fetch (
        "/api/users/login", {
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }
    ).then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        document.location.replace("/profile")
        
    }) .catch(error =>{
        console.log(error)
        alert("Bad Request")
    })
}









document.querySelector(".login").addEventListener("submit", login)