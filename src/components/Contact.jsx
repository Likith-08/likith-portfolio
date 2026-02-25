import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const cardStyle = {
    background: "linear-gradient(145deg, #1e293b, #0f172a)",
    padding: "40px",
    borderRadius: "20px",
    width: "400px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "white",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_92rw1gb",
      "template_rautyqd",
      form.current,
      "Gx3xkvda60NeuuQQr"
    )
    .then(() => {
      alert("Message sent successfully!");

      // 🔥 CLEAR FORM AFTER SUCCESS
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message");
      console.log(error);
    });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "35px", marginBottom: "10px" }}>
        Contact Me
      </h2>

      <p style={{ marginBottom: "40px", color: "#94a3b8" }}>
        Feel free to reach out for collaboration or job opportunities.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={cardStyle}>

          <h3 style={{ marginBottom: "20px" }}>
            Send me a message instantly.
          </h3>

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              style={inputStyle}
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              style={inputStyle}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              style={inputStyle}
              required
            ></textarea>

            <button type="submit" style={buttonStyle}>
              Send Message
            </button>

          </form>


        </div>
      </div>
      
    </section>
  );
}

export default Contact;