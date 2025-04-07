document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  // Email validation
  if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
    alert(`A reset code has been sent to ${email.value}.`);
    // Simulate sending the code (you can replace this with actual backend logic)
    email.value = ''; // Clear the input field
  }
});