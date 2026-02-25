import { useState } from "react";

function Navbar() {
  const [showCard, setShowCard] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#0f172a",
        padding: "15px 0",
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
          padding: "0 20px",
          position: "relative"
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>

          <img
            src="/macireddy_pic.png"
            alt="Profile"
            onClick={() => setShowCard(!showCard)}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #06b6d4",
              boxShadow: "0 0 15px #06b6d4",
              cursor: "pointer"
            }}
          />

          <h2 style={{ color: "#06b6d4", fontSize: "26px" }}>
            Likith Reddy
          </h2>

          {/* 🔥 SMALL DROPDOWN CARD */}
          {showCard && (
            <div
              style={{
                position: "absolute",
                top: "75px",
                left: "0",
                background: "#1e293b",
                padding: "18px 22px",
                borderRadius: "15px",
                border: "1px solid #06b6d4",
                boxShadow: "0 0 20px rgba(6,182,212,0.5)",
                color: "white",
                width: "260px",
                animation: "fadeIn 0.3s ease"
              }}
            >
              <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                📞 +91 6305059446
              </p>

              <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                ✉ likithmachireddy@gmail.com
              </p>

              <p style={{ fontSize: "14px" }}>
                🔗 LinkedIn.com/in/likithmachireddy0803
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
            Skills
          </a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
          {/* 🔥 Instagram Channel */}
           <a
            href="https://instagram.com/likithmachireddy_08"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#06b6d4",
                textDecoration: "none",
                fontWeight: "500"
          }}
>
            {/* Instagram SVG Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37a4 4 0 1 1-4.37-4.37 4 4 0 0 1 4.37 4.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>

            My Channel
            </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;