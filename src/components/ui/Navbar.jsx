import React from "react";
import "./Navbar.css"
const Navbar = ({setShowQuiz}) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        MONO<span> Supplies</span>
      </div>
      <div className="nav-actions">
        <button className="nav-btn" onClick={() => setShowQuiz(true)}>
          ✦ Room Kit Quiz
        </button>
        <button className="nav-btn">Enquiries</button>
      </div>
    </nav>
  );
};

export default Navbar;
