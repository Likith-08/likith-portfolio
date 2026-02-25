import { useState } from "react";

function About() {

  const [hover, setHover] = useState(false);

  const cardStyle = {
    background: "linear-gradient(145deg, #1e293b, #0f172a)",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: hover ? "2px solid #06b6d4" : "2px solid transparent",
    boxShadow: hover
      ? "0 0 30px rgba(6, 182, 212, 0.6)"
      : "0 15px 40px rgba(0,0,0,0.5)",
    transform: hover ? "translateY(-8px)" : "translateY(0)"
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "100px 40px"
      }}
    >
      <div
        style={cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "25px"
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#cbd5e1"
          }}
        >
          I am a Computer Science graduate with a strong foundation in Python,
          SQL, and backend development. I have hands-on experience building
          real-world applications using Flask, REST APIs, and database
          integration. I enjoy solving complex problems, writing clean and
          efficient code, and developing scalable systems.

          <br /><br />

          My interests include backend engineering, data-driven applications,
          and applied AI solutions. Currently seeking an entry-level Software
          Developer role where I can contribute to impactful and scalable
          applications.
        </p>
      </div>
    </section>
  );
}

export default About;