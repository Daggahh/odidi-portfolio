// api/send-email.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Here, you can use any email service like EmailJS, Nodemailer, or SendGrid
    // We'll use EmailJS in this example

    const emailjs = require("emailjs-com");

    try {
      await emailjs.send(
        "service_id", // Your EmailJS service ID
        "template_id", // Your EmailJS template ID
        { name, email, message }, // The form data
        "user_id" // Your EmailJS user ID
      );
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
