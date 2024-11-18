import React from "react";
import img from "../images/eppe.png"

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to YoungFi</h1>
      <p>Explore the future of rewards in Web3.</p>
      <img 
        src={img} 
        alt="YoungFi Logo" 
        style={{ width: "300px", height:"auto", marginTop: "50px"}} 
      />
    </div>
  );
}

export default Home;
