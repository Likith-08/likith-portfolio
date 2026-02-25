function Skills() {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#111827",
        padding: "80px 40px",
        color: "white"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}
      >
        {/* Skill Box */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Programming</h3>
          <p>Python (OOPS, Data Structures, Exception Handling)</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Backend Development</h3>
          <p>Flask, REST APIs, JSON Handling</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Databases</h3>
          <p>MySQL (Joins, Indexing, Query Optimization)</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Web Development</h3>
          <p>HTML, CSS, Bootstrap, React</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Tools & Platforms</h3>
          <p>Git, GitHub, VS Code</p>
        </div>

        <div style={cardStyle}>
          <h3 style={titleStyle}>Core Concepts</h3>
          <p>Data Structures, DBMS, OS Basics</p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: "#1e293b",
  padding: "25px",
  borderRadius: "12px",
  transition: "0.3s",
  cursor: "pointer"
};

const titleStyle = {
  color: "#38bdf8",
  marginBottom: "10px"
};

export default Skills;