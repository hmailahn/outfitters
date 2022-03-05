async function loginFormSubmitHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if(username && email && password) {
        const response = await fetch("api/users/login", {
            method: "post",
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: { 'Content-type': 'application/json'}
        })
        
        if(response.ok){
            document.location.replace('/wardrobe')
        } else{
            alert(response.statusText);
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
            headers: { 'Content-type': 'application/json'}
        })

        if(response.ok) {
            document.location.replace('/')
        } else(response.statusText)
    }
}

document.querySelector('.login-form').addEventListener("submit", loginFormSubmitHandler)
document.querySelector('.signup-form').addEventListener("submit", signupFormSubmitHandler)