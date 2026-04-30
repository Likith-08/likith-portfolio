import { useState, useEffect } from "react";

function Navbar() {
  const [showCard, setShowCard] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#0f172a",
        padding: "12px 0",
        zIndex: 1000
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 15px",
          position: "relative"
        }}
      >

        {/* LEFT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative" }}>
          <img
            src="/macireddy_pic.png"
            alt="Profile"
            onClick={() => setShowCard(!showCard)}
            style={{
              width: isMobile ? "40px" : "60px",
              height: isMobile ? "40px" : "60px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #06b6d4",
              cursor: "pointer"
            }}
          />

          <h2 style={{ color: "#06b6d4", fontSize: isMobile ? "18px" : "26px" }}>
            Likith Reddy
          </h2>

          {/* DROPDOWN */}
          {showCard && (
            <div
              style={{
                position: "absolute",
                top: isMobile ? "60px" : "75px",
                left: "0",
                background: "#1e293b",
                padding: "15px",
                borderRadius: "12px",
                color: "white",
                width: isMobile ? "200px" : "260px"
              }}
            >
              <p style={{ fontSize: "14px" }}>📞 +91 6305059446</p>
              <p style={{ fontSize: "14px" }}>✉ likithmachireddy@gmail.com</p>
              <p style={{ fontSize: "14px" }}>🔗 LinkedIn</p>
            </div>
          )}
        </div>

        {/* HAMBURGER (ONLY MOBILE) */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "26px",
              color: "white",
              cursor: "pointer"
            }}
          >
            ☰
          </div>
        )}

        {/* RIGHT SIDE */}
        <div
          style={{
            display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "15px" : "30px",
            position: isMobile ? "absolute" : "static",
            top: isMobile ? "70px" : "auto",
            right: 0,
            width: isMobile ? "100%" : "auto",
            background: isMobile ? "#0f172a" : "transparent",
            padding: isMobile ? "15px 0" : "0",
            alignItems: "center"
          }}
        >
          <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
            Skills
          </a>

          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>

          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>

          <a
            href="https://instagram.com/likithmachireddy_08"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#06b6d4",
              textDecoration: "none"
            }}
          >
            My Channel
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;