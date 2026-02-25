import { useState, useEffect } from "react";

function Hero() {
  const roles = [
    "Welcome To My Portfolio",
    "Software Developer",
    "Python & Backend Specialist",
    "REST API Developer",
    "Turning Ideas Into Reality",
    "Problem Solver",
    "Clean Code Enthusiast",
    "Code • Build • Improve • Repeat"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [hovered, setHovered] = useState(null); // 👈 added

  useEffect(() => {
    const currentText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Hi, I'm Likith 👋</h1>

      <h3 style={styles.typewriter}>
        {displayText}
        <span className="cursor"></span>
      </h3>

      <p style={styles.paragraph}>
        Building scalable backend systems using Python, Flask, REST APIs, and SQL.
        Passionate about clean architecture, problem-solving, and real-world applications.
      </p>

      <div style={styles.buttonContainer}>
        <a href="/Macireddy_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              ...styles.button,
              ...(hovered === "resume" && styles.buttonHover)
            }}
            onMouseEnter={() => setHovered("resume")}
            onMouseLeave={() => setHovered(null)}
          >
            View My Resume
          </button>
        </a>

        <a href="#projects">
          <button
            style={{
              ...styles.button,
              ...(hovered === "projects" && styles.buttonHover)
            }}
            onMouseEnter={() => setHovered("projects")}
            onMouseLeave={() => setHovered(null)}
          >
            View My Projects
          </button>
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f172a, #1e293b)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px"
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "15px"
  },
  typewriter: {
    color: "#06b6d4",
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "20px",
    minHeight: "45px"
  },
  paragraph: {
    maxWidth: "700px",
    color: "#cbd5e1",
    marginBottom: "30px",
    lineHeight: "1.6"
  },
  buttonContainer: {
    display: "flex",
    gap: "20px"
  },
  button: {
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  buttonHover: {
    transform: "scale(1.08)",
    boxShadow: "0 0 20px #06b6d4"
  }
};

export default Hero;