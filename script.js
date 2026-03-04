// ===============================
// VitalCareTech Form Validation
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".auth-form");

  if (!form) return;

  // Detect which page we are on
  const isLoginPage = document.getElementById("confirm-password") === null;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isLoginPage) {
      handleLogin();
    } else {
      handleSignup();
    }
  });
});

// ===============================
// LOGIN VALIDATION
// ===============================
function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!validateEmail(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(password)) {
    showError(
      "Password must be at least 8 characters and contain letters and numbers.",
    );
    return;
  }

  showSuccess("Login successful! Redirecting...");
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1500);
}

// ===============================
// SIGNUP VALIDATION
// ===============================
function handleSignup() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const specialization = document.getElementById("specialization").value;
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const terms = document.querySelector(".checkbox input").checked;

  if (fullname.length < 3) {
    showError("Full name must be at least 3 characters.");
    return;
  }

  if (!validateEmail(email)) {
    showError("Please enter a valid professional email.");
    return;
  }

  if (!specialization) {
    showError("Please select your medical specialization.");
    return;
  }

  if (!validatePassword(password)) {
    showError(
      "Password must be at least 8 characters and contain letters and numbers.",
    );
    return;
  }

  if (password !== confirmPassword) {
    showError("Passwords do not match.");
    return;
  }

  if (!terms) {
    showError("You must agree to the Terms of Service.");
    return;
  }

  showSuccess("Account created successfully! Redirecting to login...");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

// ===============================
// VALIDATION HELPERS
// ===============================

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  // Minimum 8 characters, at least 1 letter and 1 number
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

// ===============================
// ALERT HELPERS
// ===============================

function showError(message) {
  alert("❌ " + message);
}

function showSuccess(message) {
  alert("✅ " + message);
}
