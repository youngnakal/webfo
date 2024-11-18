import React from "react";

function Earn() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", position: "relative" }}>
      <h1>Daily Task</h1>
      <p>Complete tasks, challenges, and earn points.</p>

      {/* Teks di kiri */}
      <div style={{ padding: "1rem",textAlign: "left", marginBottom: "20px" }}>
        <p>Subscribe to our YouTube channel to earn points.</p>
      </div>

      {/* Tombol Claim Points di sebelah kanan */}
      <button
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => alert("Points claimed!")}
      >
        Claim Points
      </button>
    </div>
  );
}

export default Earn;
