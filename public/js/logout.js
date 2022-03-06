async function logoutButtonSubmitHander() {
    console.log("LogOutButton Pushed")
    response = await fetch('api/users/logout', {
        method: "post",
        headers: { 'Content-Type': 'application/json' }
    }
    )
    if(response.ok) {
        console.log("You have been loggedout")
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logoutButtonSubmitHander);