/**
 * Form field validation helpers
 */

export const validateEmail = (email) => {
  if (!email || !email.trim()) return "Email address is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.trim())) {
    return "Please enter a valid email address";
  }
  return null;
};

export const validateIndianPhone = (phone) => {
  if (!phone || !phone.trim()) return "Phone number is required";
  // Clean spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  // Accepts 10 digits starting with 6-9, or +91 followed by 10 digits, or 0 followed by 10 digits
  const indianRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  if (!indianRegex.test(cleaned)) {
    return "Please enter a valid 10-digit mobile number (e.g., 9820012345)";
  }
  return null;
};

export const validateRequired = (value, fieldName = "Field") => {
  if (!value || !value.toString().trim()) {
    return `${fieldName} is required`;
  }
  return null;
};
