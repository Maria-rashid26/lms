// utils/firebaseErrors.js
export const firebaseErrorMessages = {
  "auth/invalid-email":
    "The email address is invalid. Please check and try again.",
  "auth/user-not-found":
    "No account found with this email. Please sign up first.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/email-already-in-use":
    "This email is already in use. Please use a different one.",
  "auth/weak-password":
    "The password is too weak. Please use a stronger password.",
  "auth/network-request-failed": "Network error. Please check your connection.",
  "auth/invalid-credential": "Invalid credentials , Try again.",
  "auth/missing-password": "Password missing",
  "auth/too-many-requests":
    "Too many unsuccessful login attempts. Please try again later.",
};

export const getCustomErrorMessage = (code, message) =>
  firebaseErrorMessages[code] || `An unknown error occurred. ${message} `;
