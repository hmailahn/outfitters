async function loginFormSubmitHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if(username && password) {
        const response = await fetch("api/users/login", {
            method: "post",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { 'Content-type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/')
        } else{
            const data = await response.json()
            if(data.message == "No user with that username!") {
                const responseDiv = document.querySelector("#response-div")
                responseDiv.textContent = "Username doesn't match any user please signup if you do not have an account yet"
            }
        }
    }
}
async function signupFormSubmitHandler(event) {
    event.preventDefault();
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if(username && email && password) {
        const response = await fetch("api/users", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })

        if(response.ok) {
            //once user is signed up, they will be redirected to the homepage
            document.location.replace('/')
        } else{ 
            const data = await response.json()
            if(data.errors[0].message === "email must be unique") {
                const responseDiv = document.querySelector("#response-div")
                responseDiv.textContent = "You have already Signed Up Please login instead"

            }
        }
    }
}

document.querySelector('.login-form').addEventListener("submit", loginFormSubmitHandler)
document.querySelector('.signup-form').addEventListener("submit", signupFormSubmitHandler)