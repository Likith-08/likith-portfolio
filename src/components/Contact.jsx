function Contact() {

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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "20px" }}>
            Send me a message instantly.
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            style={inputStyle}
          ></textarea>

          <button style={buttonStyle}>
            Send Message
          </button>
        </div>
      </div>

    </section>
  );
}

export default Contact;