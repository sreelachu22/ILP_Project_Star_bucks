document.getElementById("callButton").addEventListener("click", () => {
  const accountSid = "ACfc10182aac3f9a910cd1b99cfad6b329";
  const authToken = "3073b7149ba3158d97d84315c83aa5c2";

  // Your Twilio phone number
  const twilioNumber = "+12182973769";

  // Your verified phone number
  const verifiedPhoneNumber = "+919605874616";

  // Initialize Twilio Client
  Twilio.Device.setup(accountSid, authToken);

  // Make an outgoing call
  const connection = Twilio.Device.connect({
    To: verifiedPhoneNumber,
    From: twilioNumber,
  });

  // Handle connection events (success, failure, hang up, etc.)
  connection.on("disconnect", () => {
    console.log("Call ended");
  });
});
