let email = getUserNameFromCookie();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userDetails").addEventListener("click", function(event) {
        event.preventDefault();
        if (email) {
            window.location.href = "../signedUser.html";
        } else {
            window.location.href = "../signIn_signUp.html";
        }
    });
});


function setUserNameCookie(email, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieValue = encodeURIComponent(email) + '; expires=' + expirationDate.toUTCString() + '; path=/';
    document.cookie = 'email=' + cookieValue;
}

function getUserNameFromCookie() {
    const name = 'email' + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

function setUsername() {
    const email = document.getElementById('emailInput').value;
    if (email.trim() !== '') {
        setUserNameCookie(email, 7); // set email expire in 7 days
        alert('Username set successfully!');
    } else {
        alert('Please enter a valid email.');
    }
}

function displayUsername() {
    const storedUsername = getUserNameFromCookie();
    if (storedUsername) {
        alert('Stored email: ' + storedUsername);
    } else {
        alert('No email stored.');
    }
}

