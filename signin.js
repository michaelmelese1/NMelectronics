let users = [
    {"name":"abel" , "email" : "abel@gmail.com" , "password" : "12345678", "username":"Superabel"},
    {"name":"abel" , "email" : "abel@gmail.com" , "password" : "12345678", "username":"Superabel"},
    {"name":"abel" , "email" : "abel@gmail.com" , "password" : "12345678", "username":"Superabel"}
]
localStorage.setItem('users',JSON.stringify(users))

const signupform = document.querySelector(".signupform")
if(signupform){
signupform.addEventListener("submit", (event) => {   

    event.preventDefault() 
    let users = JSON.parse(localStorage.getItem("users"))
    const fullname = document.querySelector("#fullname")
    const email = document.querySelector(".email")
    const password= document.querySelector("#password")
    const confirmpassword= document.querySelector("#confirmpassword")
    const username = document.querySelector("#username")
     
    console.log(fullname.value)
    console.log(email.value)
    console.log(username.value)
    console.log(password.value)
    console.log(confirmpassword.value)
    
    if(password.value === confirmpassword.value){
        let newuser= {"fullname": fullname.value , "email": email.value , "password" : password.value}
        users.push(newuser)
        localStorage.setItem("users",JSON.stringify(users))
        
    }
})
}