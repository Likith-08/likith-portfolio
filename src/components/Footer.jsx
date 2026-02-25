function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b1120",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        borderTop: "1px solid #1e293b"
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} Likith. All Rights Reserved.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#38bdf8",
  textDecoration: "none",
  fontSize: "14px"
};

export default Footer;