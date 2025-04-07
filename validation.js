// Login form validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    // Email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Password validation
    if (!password.value || password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    if (isValid) {
      // Redirect to the dashboard
      window.location.href = "dashboard.html";
    }
  });
}

// Signup form validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    // Full name validation
    if (!fullName.value || fullName.value.trim().length < 3) {
      alert('Full name must be at least 3 characters long.');
      isValid = false;
    }

    // Email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }

    // Password validation
    if (!password.value || password.value.length < 6) {
      alert('Password must be at least 6 characters long.');
      isValid = false;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      // Redirect to the dashboard
      alert('Signup successful!');
      window.location.href = "dashboard.html";
    }
  });
}

// Alert for under-development features
function alertUnderDevelopment() {
  alert("This feature is still under development. Please use your email address to sign up.");
}