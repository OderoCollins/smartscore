// Toggle balance blur/unblur
const balance = document.getElementById('balance');
const toggleBalanceButton = document.getElementById('toggleBalance');
const eyeIcon = document.getElementById('eyeIcon');

toggleBalanceButton.addEventListener('click', () => {
  if (balance.classList.contains('blurred')) {
    balance.classList.remove('blurred');
    balance.classList.add('unblurred');
    eyeIcon.src = 'images.png'; // Change to "eye closed" icon
  } else {
    balance.classList.remove('unblurred');
    balance.classList.add('blurred');
    eyeIcon.src = 'hide.jpeg'; // Change back to "eye open" icon
  }
});

// Logout functionality
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  alert('You have been logged out.');
  window.location.href = 'index.html'; // Redirect to login page
});