const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phoneno = document.querySelector("#phoneNumber")
const message = document.querySelector("#message")

let messages= [
    {"name":"Abel" , "email" : "Abel@gmail.com" , "phoneno" : "0912453840", "message":"Best selections of cameras in theCity!and staff helped me find thePerfect lens for my studio"},
]

const contactForm = document.querySelector(".card2")

contactForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(name.value)
    console.log(email.value)
    console.log(phoneno.value)
    console.log(message.value)
    let newUser = {"name" : name.value, "email" : email.value, "phoneno" : phoneno.value, "message" : message.value}
    messages.push(newUser)
    localStorage.setItem('messages', JSON.stringify(messages))
    alert("success")
    window.location.href="contact.html"
})
