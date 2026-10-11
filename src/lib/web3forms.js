/**
 * Web3Forms API Submission Helper
 * Sends enquiry form payload to https://api.web3forms.com/submit
 */

export const submitWeb3Form = async (formData) => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Bot honeypot check
  if (formData.botcheck) {
    throw new Error("Spam detected.");
  }

  // If no key or placeholder provided, provide a graceful demo simulation
  if (!accessKey || accessKey === "your_key_here" || accessKey === "demo_key") {
    // Simulate slight network latency for realistic feel in demo mode
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.warn(
      "Web3Forms Access Key is running in demo mode. Set VITE_WEB3FORMS_ACCESS_KEY in .env to receive real emails."
    );
    return {
      success: true,
      message: "Enquiry received! (Demo Mode: message logged successfully).",
    };
  }

  const payload = {
    access_key: accessKey,
    subject: `New Enquiry from The Green Pouch: ${formData.enquiryType || "General"}`,
    from_name: "The Green Pouch Website",
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    enquiry_type: formData.enquiryType,
    preferred_date: formData.preferredDate || "Not specified",
    message: formData.message,
    botcheck: formData.botcheck,
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to submit enquiry. Please try again or WhatsApp us directly.");
  }

  return result;
};
