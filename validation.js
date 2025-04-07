document.getElementById('loginForm').addEventListener('submit', function (e) {
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
    // Redirect to dashboard to the dashboard
    window.location.replace("/dashboard.html");
  }
});