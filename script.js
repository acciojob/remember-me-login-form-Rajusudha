//your JS code here. If required.
// Check if there are saved details in local storage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
    const existingButton = document.createElement('button');
    existingButton.id = 'existing';
    existingButton.textContent = 'Login as existing user';
    document.body.appendChild(existingButton);

    existingButton.addEventListener('click', () => {
        alert('Logged in as ' + savedUsername);
    });
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
});

