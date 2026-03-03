import { useState } from "react";

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // 🔹 Card Style
  const getCardStyle = (index) => ({
    background:
      hoveredCard === index
        ? "linear-gradient(145deg, #1e40af, #0f172a)"
        : "linear-gradient(145deg, #1e293b, #0f172a)",
    padding: "25px",
    borderRadius: "15px",
    width: "320px",
    boxShadow:
      hoveredCard === index
        ? "0 0 25px #3b82f6"
        : "0 10px 25px rgba(0,0,0,0.5)",
    transition: "0.3s"
  });

  // 🔹 Tech Badge Style
  const badgeStyle = {
    backgroundColor: "#334155",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    marginRight: "8px"
  };

  // 🔹 Button Style
  const getButtonStyle = (type) => ({
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background:
      hoveredButton === type
        ? "linear-gradient(90deg, #22d3ee, #2563eb)"
        : "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
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
          <h3>Multimodal Emotion Detection System</h3>

          <div style={{ marginBottom: "12px" }}>
            <span style={badgeStyle}>Python</span>
            <span style={badgeStyle}>Transformers</span>
            <span style={badgeStyle}>CNN</span>
            <span style={badgeStyle}>Streamlit</span>
            <span style={badgeStyle}>NLP</span>
          </div>

          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
           This system predicts emotions from three different input modalities:<br/>

           1. Facial Expression (Image / Webcam)<br/>
           2.  Speech Emotion (Audio File)<br/>
           3. Text Emotion (Sentence Input)<br/>
          Each model predicts independently, and a Majority Fusion model determines the final emotion.
          </p>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <a
              href="https://github.com/Likith-08"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={getButtonStyle("github1")}
                onMouseEnter={() => setHoveredButton("github1")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                GitHub
              </button>
            </a>
             <a href="https://multimodal--emotion-detection-system-dmah6krx5ygaxdchvcpmqe.streamlit.app" 
              target="_blank">
             </a>
            <button
              style={getButtonStyle("demo1")}
              onMouseEnter={() => setHoveredButton("demo1")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => 
                window.open(
                  "https://multimodal--emotion-detection-system-dmah6krx5ygaxdchvcpmqe.streamlit.app",
                  "_blank"
                )
              }
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
          <h3>AI Interview Performance Analytics Platform</h3>

          <div style={{ marginBottom: "12px" }}>
            <span style={badgeStyle}>Python</span>
            <span style={badgeStyle}>Flask</span>
            <span style={badgeStyle}>SQlite</span>
            <span style={badgeStyle}>Javascript</span>
            <span style={badgeStyle}>Data Analytics</span>
            <span style={badgeStyle}>DeepLearning</span>
            <span style={badgeStyle}>PyTorch</span>
            <span style={badgeStyle}>REST API</span>
            <span style={badgeStyle}>Git</span>
          </div>

          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
AI Interview Performance & Analytics Dashboard is a full-stack web application that evaluates mock interview performance using AI-driven scoring and behavioral analysis.<br/>
It features secure role-based authentication, real-time performance tracking, and an interactive analytics dashboard with KPI insights.
          </p>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <a
              href="https://github.com/Likith-08"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={getButtonStyle("github2")}
                onMouseEnter={() => setHoveredButton("github2")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                GitHub
              </button>
            </a>

         <a href="https://likith-08-ai-interview-assistant.hf.space" 
              target="_blank">
             </a>
            <button
              style={getButtonStyle("demo1")}
              onMouseEnter={() => setHoveredButton("demo1")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => 
                window.open(
                  "https://likith-08-ai-interview-assistant.hf.space",
                  "_blank"
                )
              }
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