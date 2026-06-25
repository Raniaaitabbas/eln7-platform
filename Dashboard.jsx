import React, { useState, useEffect } from "react";

function Dashboard({ userLevel, handleLogout }) {
  // 1. Définir les matières selon le niveau de l'élève
  const getSubjects = () => {
    if (userLevel === "Université") {
      return ["Analyse Math", "Réseaux", "Électronique"];
    }
    return ["Mathématiques", "Physique"];
  };

  const subjects = getSubjects();

  // Matière sélectionnée (par défaut la première de la liste)
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  // Si le niveau de l'élève change, on remet la première matière par défaut
  useEffect(() => {
    setSelectedSubject(subjects[0]);
  }, [userLevel]);

  return (
    <div className="dashboard-container">
      {/* Barre latérale gauche */}
      <nav className="dash-sidebar">
        <div className="logo">ELN7</div>
        <div className="user-badge">
          Niveau : <span className="highlight">{userLevel}</span>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Déconnexion
        </button>
      </nav>

      {/* Zone principale à droite */}
      <main className="dash-content">
        <header className="dash-header">
          <h1>Tableau de bord de révision</h1>
          <p>
            Bienvenue dans votre espace d'apprentissage. Sélectionnez votre
            matière ci-dessous pour filtrer vos modules.
          </p>

          {/* BARRE DE FILTRE DE LA MATIÈRE */}
          <div className="subject-filter-bar">
            {subjects.map((subject) => (
              <button
                key={subject}
                className={`filter-chip ${selectedSubject === subject ? "active" : ""}`}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        </header>

        {/* LES 3 BLOCS DE CONTENU FILTRÉS */}
        <div className="courses-grid">
          {/* Carte 1 : Résumés */}
          <div className="course-card">
            <div className="course-icon">📚</div>
            <h3>Résumés de Cours</h3>
            <p>
              Accédez à toutes les fiches techniques et résumés de cours de{" "}
              <strong>{selectedSubject}</strong>.
            </p>
            <button className="btn-dash-action">
              Ouvrir les PDF ({selectedSubject})
            </button>
          </div>

          {/* Carte 2 : Vidéos */}
          <div className="course-card">
            <div className="course-icon">🎥</div>
            <h3>Vidéos Explicatives</h3>
            <p>
              Regardez les cours vidéos détaillés et les astuces de Hamza en{" "}
              <strong>{selectedSubject}</strong>.
            </p>
            <button className="btn-dash-action">
              Voir les vidéos ({selectedSubject})
            </button>
          </div>

          {/* Carte 3 : Sujets */}
          <div className="course-card">
            <div className="course-icon">📝</div>
            <h3>Sujets & Examens</h3>
            <p>
              Entraînez-vous sur des sujets types et examens corrigés de{" "}
              <strong>{selectedSubject}</strong>.
            </p>
            <button className="btn-dash-action">
              Pratiquer ({selectedSubject})
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
