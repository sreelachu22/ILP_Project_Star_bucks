
// function payLogin() {
//     const activePlayer = 0;
//     const congratsMessage = "Login";

//     const popup = document.createElement('div');
//     popup.className = 'popup';
//     popup.textContent = congratsMessage;

//     popup.style.position = 'fixed';
//     popup.style.left = '30%';
//     popup.style.right = '30%';
//     popup.style.top = '15%';
//     popup.style.bottom = '15%';
//     popup.style.width = "40%";
//     popup.style.height = "70%";
//     popup.style.borderRadius = "30px"
//     popup.style.backgroundColor = 'white';
//     popup.style.padding = '20px';
//     popup.style.border = '2px solid black';
//     popup.style.textAlign = 'center';

//     document.body.appendChild(popup);
// }

// Open the login modal
function payLogin() {
    document.getElementById('loginModal').style.display = 'block';
  }
  
  // Close the login modal
  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    window.location.href = 'home.html';
  }
  
  // Close the modal if the user clicks outside the modal
  window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  