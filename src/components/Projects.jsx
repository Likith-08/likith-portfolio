import { useState } from "react";

function Projects() {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const getCardStyle = (index) => ({
    background: "linear-gradient(145deg, #1e293b, #0f172a)",
    padding: "25px",
    borderRadius: "15px",
    width: "320px",
    boxShadow: hoveredCard === index
      ? "0 20px 40px rgba(0,0,0,0.7)"
      : "0 10px 25px rgba(0,0,0,0.5)",
    transform: hoveredCard === index
      ? "translateY(-10px) scale(1.03)"
      : "translateY(0px)",
    border: hoveredCard === index
      ? "1px solid #06b6d4"
      : "1px solid transparent",
    transition: "all 0.4s ease",
  });

  const badgeStyle = {
    backgroundColor: "#334155",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    marginRight: "8px"
  };

  const getButtonStyle = (id) => ({
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: hoveredButton === id
      ? "linear-gradient(90deg, #0ea5e9, #2563eb)"
      : "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transform: hoveredButton === id
      ? "translateY(-3px)"
      : "translateY(0px)",
    boxShadow: hoveredButton === id
      ? "0 8px 20px rgba(6,182,212,0.6)"
      : "none",
    transition: "all 0.3s ease"
  });

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "70vh",
        padding: "80px 40px"
      }}
    >
      <h2
        style={{
          fontSize: "35px",
          marginBottom: "40px",
          textAlign: "center"
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >

        {/* 🔥 Project 1 */}
        <div
          style={getCardStyle(0)}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3>Emotion Recognition using BERT</h3>

          <div style={{ marginBottom: "12px" }}>
            <span style={badgeStyle}>Python</span>
            <span style={badgeStyle}>Transformers</span>
            <span style={badgeStyle}>BERT</span>
          </div>

          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            NLP-based emotion classification system trained on 5000+ samples.
          </p>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <button
              style={getButtonStyle("github1")}
              onMouseEnter={() => setHoveredButton("github1")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              GitHub
            </button>

            <button
              style={getButtonStyle("demo1")}
              onMouseEnter={() => setHoveredButton("demo1")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Live Demo
            </button>
          </div>
        </div>

        {/* 🔥 Project 2 */}
        <div
          style={getCardStyle(1)}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3>Bruce: Personal Voice Assistant</h3>

          <div style={{ marginBottom: "12px" }}>
            <span style={badgeStyle}>Python</span>
            <span style={badgeStyle}>SpeechRecognition</span>
            <span style={badgeStyle}>pyttsx3</span>
          </div>

          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            Voice-controlled assistant built using Python.
          </p>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <button
              style={getButtonStyle("github2")}
              onMouseEnter={() => setHoveredButton("github2")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              GitHub
            </button>

            <button
              style={getButtonStyle("demo2")}
              onMouseEnter={() => setHoveredButton("demo2")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Live Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;