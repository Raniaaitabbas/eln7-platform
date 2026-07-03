import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [userLevel, setUserLevel] = useState("BAC");

  const handleLoginSuccess = (level) => {
    setUserLevel(level);
    setCurrentPage("dashboard");
  };

  if (currentPage === "dashboard") {
    return (
      <Dashboard
        userLevel={userLevel}
        handleLogout={() => setCurrentPage("home")}
      />
    );
  }

  if (currentPage === "login") {
    return (
      <Login
        goBack={() => setCurrentPage("home")}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">ELN7</div>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <button
            onClick={() => setCurrentPage("login")}
            className="btn-nav-login"
          >
            Log In
          </button>
        </div>
      </nav>

      <header className="hero-section">
        <h1>
          Welcome to <span className="highlight">ELN7</span>
        </h1>
        <p>
          Learn Today, Achieve Tomorrow. La plateforme éducative pour réussir
          ton parcours.
        </p>
        <div className="hero-buttons">
          <button onClick={() => setCurrentPage("login")} className="btn-main">
            Commencer
          </button>
          <button className="btn-secondary">Voir les cours</button>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="about-box">
          <h2>À propos de l'enseignant</h2>
          <p className="about-text" dir="rtl">
            أنا حمزة، حاصل على شهادة ماستر 2 في الإلكترونيك، ولدي عدة سنوات من
            الخبرة...
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 ELN7 - Tous droits réservés</p>
          <div className="footer-links">
            <span className="phone-link">
              <i className="fa-solid fa-phone"></i> 0797621368
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; // <-- TON FICHIER DOIT FINIR ICI !
