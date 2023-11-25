function generateAccessToken() {
    return [...Array(16)].map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
}
const username = document.getElementById('username');
const password = document.getElementById('userpassword');
const confirmUserName = document.getElementById('userpasswordCheck');
const email = document.getElementById('useremail');
const button = document.getElementById("btn");




function signup() {
    // Your signup logic goes here


    // Validate that username and password are not empty
    if(!password.value || !username.value || !email.value) {
        alert("Fill all details")
        return
    }
    if (password.value !== confirmUserName.value) {
        alert("Confirm Posword shoud be same")
        return;
    }
    const accessToken = generateAccessToken();
    let userDetails = {
        name: username.value,
        password: password.value,
        email: email.value,
        token: accessToken
    }
    console.log(userDetails);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to login page
 
    window.location.href = 'login.html';
}


button.addEventListener('click', () => {
    signup();
});
   
document.addEventListener('DOMContentLoaded', function() {
 
    const user = localStorage.getItem('userDetails');
    const userObj = JSON.parse(user);
    setName.innerText = userObj.name;
    setEmail.innerText = userObj.email
});



// Check if the user is logged in
function checkLoggedIn() {
    const user = localStorage.getItem('userDetails');
    const token = user.token
    if (!user.token) {
        // Redirect to signup page if not logged in
        window.location.href = 'index.html';
    }
}

// Execute checkLoggedIn when the page loads
checkLoggedIn();