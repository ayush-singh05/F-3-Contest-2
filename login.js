


const getDiv = document.getElementById("setvalues");

const logOut = document.getElementById("logout-btn")
document.addEventListener('DOMContentLoaded', function() {

    const user = localStorage.getItem('userDetails');
    const userObj = JSON.parse(user);
    getDiv.innerHTML = `<p id="setName">Full Name: ${userObj.name} </p>
    <p id="setEmail">Email: ${userObj.email} </p>
    <p id="setToken">Token: ${userObj.token} </p>
    <p id="setPassword">Password: ${userObj.password} </p>`

});

function logout() {
    // Clear local storage
    localStorage.removeItem('userDetails');

    // Redirect to signup page
    window.location.href = 'index.html';
}
logOut.addEventListener('click',()=>{
    logout();
})