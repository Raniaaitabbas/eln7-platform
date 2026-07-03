import React, { useState, useEffect } from "react";

// 1. LE PROGRAMME AVEC LA STRUCTURE POUR INJECTER TES LIENS (Vidéos et PDF)
const programData = {
  BAC: {
    Mathématiques: [
      { title: "الاشتقاق", videoUrl: "", pdfUrl: "" },
      { title: "الدوال الأصلية", videoUrl: "", pdfUrl: "" },
      { title: "الدوال الأسية", videoUrl: "", pdfUrl: "" },
      { title: "الدوال اللوغاريتمية", videoUrl: "", pdfUrl: "" },
      { title: "المتتاليات العددية", videoUrl: "", pdfUrl: "" },
      { title: "الحساب التكاملي", videoUrl: "", pdfUrl: "" },
      { title: "الأعداد المركبة", videoUrl: "", pdfUrl: "" },
      { title: "التشابهات المستوية المباشرة", videoUrl: "", pdfUrl: "" },
      { title: "الهندسة في الفضاء", videoUrl: "", pdfUrl: "" },
    ],
    Physique: [
      {
        title: "المتابعة الزمنية لتحول كيميائي",
        videoUrl: "https://www.youtube.com/watch?v=isRHyfcqalM",
        pdfUrl:
          "https://drive.google.com/file/d/1Ouw-Qd6T4QFxABmhMmp3xliBimHwbnKf/view?usp=drive_link",
      },
      { title: "دراسة التحولات النووية", videoUrl: "", pdfUrl: "" },
      { title: "دراسة الظواهر الكهربائية", videoUrl: "", pdfUrl: "" },
      {
        title: "تطور جملة كيميائية نحو حالة التوازن",
        videoUrl: "",
        pdfUrl: "",
      },
      { title: "تطور جملة ميكانيكية", videoUrl: "", pdfUrl: "" },
      { title: "مراقبة تطور جملة كيميائية", videoUrl: "", pdfUrl: "" },
    ],
  },
  BEM: {
    Mathématiques: [
      {
        title: "الحساب الحرفي (النشر، التحليل، المتطابقات الشهيرة)",
        videoUrl: "",
        pdfUrl: "",
      },
      { title: "المعادلات ومتراجحات", videoUrl: "", pdfUrl: "" },
      { title: "الدوال الخطية والدوال التألفية", videoUrl: "", pdfUrl: "" },
      { title: "الإحصاء والاحتمالات", videoUrl: "", pdfUrl: "" },
      {
        title: "الهندسة المستوية (نظرية طاليس، فيثاغورس، المثلثات)",
        videoUrl: "",
        pdfUrl: "",
      },
      {
        title: "المثلثات (النسب المثلثية: الجيب، جيب التمام، الظل)",
        videoUrl: "",
        pdfUrl: "",
      },
      {
        title:
          "الهندسة في الفضاء (الموشور، الأسطوانة، الهرم، المخروط، الكرة، الأحجام والمساحات)",
        videoUrl: "",
        pdfUrl: "",
      },
    ],
    Physique: [
      { title: "الحركة والقوى", videoUrl: "", pdfUrl: "" },
      { title: "الطاقة وتحولاتها", videoUrl: "", pdfUrl: "" },
      {
        title:
          "الكهرباء (التيار المستمر، قانون أوم, الاستطاعة والطاقة الكهربائية)",
        videoUrl: "",
        pdfUrl: "",
      },
      { title: "المغناطيسية", videoUrl: "", pdfUrl: "" },
      { title: "الضوء والعدسات", videoUrl: "", pdfUrl: "" },
      { title: "التحولات الكيميائية", videoUrl: "", pdfUrl: "" },
      {
        title: "الأمن الكهربائي والتطبيقات التكنولوجية",
        videoUrl: "",
        pdfUrl: "",
      },
    ],
  },
  Université: {
    "Analyse Math": [
      { title: "Généralités sur les fonctions", videoUrl: "", pdfUrl: "" },
      { title: "Limites et Continuité", videoUrl: "", pdfUrl: "" },
      { title: "Dérivabilité", videoUrl: "", pdfUrl: "" },
    ],
    Réseaux: [
      { title: "Modèle OSI", videoUrl: "", pdfUrl: "" },
      { title: "Architecture TCP/IP", videoUrl: "", pdfUrl: "" },
      { title: "Routage IP", videoUrl: "", pdfUrl: "" },
    ],
    Électronique: [
      { title: "Diodes et Transistors", videoUrl: "", pdfUrl: "" },
      { title: "Amplificateurs", videoUrl: "", pdfUrl: "" },
      { title: "Électronique Numérique", videoUrl: "", pdfUrl: "" },
    ],
  },
};

function Dashboard({ userLevel, handleLogout }) {
  const getSubjects = () => {
    if (userLevel === "Université") {
      return ["Analyse Math", "Réseaux", "Électronique"];
    }
    return ["Mathématiques", "Physique"];
  };

  const subjects = getSubjects();

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedSection, setSelectedSection] = useState(null); // Contiendra l'objet complet du cours cliqué

  useEffect(() => {
    setSelectedSubject(subjects[0]);
    setViewMode("grid");
    setSelectedSection(null);
  }, [userLevel]);

  return (
    <div className="dashboard-container">
      <nav className="dash-sidebar">
        <div className="logo">ELN7</div>
        <div className="user-badge">
          Niveau : <span className="highlight">{userLevel}</span>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Déconnexion
        </button>
      </nav>

      <main className="dash-content">
        {/* ================= MODE PANNEAU DE BORD (LES 3 CARTES) ================= */}
        {viewMode === "grid" && (
          <>
            <header className="dash-header">
              <h1>Tableau de bord de révision</h1>
              <p>
                Bienvenue dans votre espace d'apprentissage. Sélectionnez votre
                matière ci-dessous pour filtrer vos modules.
              </p>

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

            <div className="courses-grid">
              {/* Carte 1 : Résumés */}
              <div className="course-card">
                <div className="course-icon">📚</div>
                <h3>Résumés de Cours</h3>
                <p>
                  Accédez à toutes les fiches techniques et résumés de cours de{" "}
                  <strong>{selectedSubject}</strong>.
                </p>
                <button
                  onClick={() => {
                    setViewMode("resumes");
                    setSelectedSection(null);
                  }}
                  className="btn-dash-action"
                >
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
                <button
                  onClick={() => {
                    setViewMode("videos");
                    setSelectedSection(null);
                  }}
                  className="btn-dash-action"
                >
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
          </>
        )}

        {/* ================= MODE GRANDE PAGE POUR LES VIDÉOS ================= */}
        {viewMode === "videos" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <button
              onClick={() => setViewMode("grid")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#1e293b",
                color: "#f59e0b",
                border: "1px solid #f59e0b",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              ⬅️ Retour au Tableau de Bord
            </button>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div>
                <h1 style={{ fontSize: "28px", margin: 0 }}>
                  🎥 {selectedSubject} - الفيديوهات التعليمية
                </h1>
                <p style={{ color: "#94a3b8", margin: "5px 0 0 0" }}>
                  اختر الدرس من القائمة لبدء المشاهدة
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "30px",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              {/* COLONNE DROITE : Chapitres */}
              <div
                style={{
                  width: "35%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  backgroundColor: "#111827",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid #1f2937",
                  maxHeight: "70vh",
                  overflowY: "auto",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    margin: "0 0 10px 0",
                    color: "#94a3b8",
                    borderBottom: "1px solid #1f2937",
                    paddingBottom: "10px",
                  }}
                >
                  قائمة الوحدات :
                </h3>
                {programData[userLevel]?.[selectedSubject]?.map(
                  (chapter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSection(chapter)} // On stocke l'objet entier du cours cliqué
                      style={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor:
                          selectedSection?.title === chapter.title
                            ? "#ef4444"
                            : "#1e293b",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        textAlign: "right",
                        fontSize: "15px",
                        fontWeight:
                          selectedSection?.title === chapter.title
                            ? "bold"
                            : "normal",
                        transition: "all 0.2s",
                      }}
                    >
                      {chapter.title}
                    </button>
                  ),
                )}
              </div>

              {/* COLONNE GAUCHE : Lecteur dynamique */}
              <div
                style={{
                  width: "65%",
                  backgroundColor: "#111827",
                  padding: "30px",
                  borderRadius: "12px",
                  border: "1px solid #1f2937",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "400px",
                }}
              >
                {selectedSection ? (
                  <div style={{ direction: "ltr", textAlign: "left" }}>
                    <h2
                      style={{
                        fontSize: "24px",
                        margin: "0 0 20px 0",
                        color: "#f59e0b",
                        textAlign: "right",
                        direction: "rtl",
                      }}
                    >
                      {selectedSection.title}
                    </h2>

                    {/* LE CODE LIT LE LIEN DIRECTEMENT DANS L'OBJET MAINTENANT */}
                    {selectedSection.videoUrl ? (
                      <div
                        style={{
                          backgroundColor: "#1e293b",
                          padding: "30px",
                          borderRadius: "12px",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "25px",
                            fontSize: "16px",
                            color: "#e2e8f0",
                            direction: "rtl",
                          }}
                        >
                          اضغط على الزر أدناه لمشاهدة الفيديو مباشرة على منصة
                          يوتيوب:
                        </p>
                        <a
                          href={selectedSection.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-block",
                            padding: "15px 35px",
                            backgroundColor: "#ef4444",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          ▶️ فتح الفيديو في يوتيوب
                        </a>
                      </div>
                    ) : (
                      <p
                        style={{
                          color: "#94a3b8",
                          fontStyle: "italic",
                          textAlign: "center",
                          fontSize: "16px",
                        }}
                      >
                        سيتم إضافة الفيديوهات الخاصة بهذه الوحدة قريباً...
                      </p>
                    )}
                  </div>
                ) : (
                  <div style={{ textAlign: "center", color: "#94a3b8" }}>
                    <span style={{ fontSize: "50px" }}>👈</span>
                    <p style={{ marginTop: "15px", fontSize: "16px" }}>
                      يرجى اختيار وحدة من القائمة اليمنى لعرض دروس الفيديو
                      الخاصة بها.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= MODE GRANDE PAGE POUR LES RÉSUMÉS (PDF) ================= */}
        {viewMode === "resumes" && (
          <div>
            <button
              onClick={() => setViewMode("grid")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#1e293b",
                color: "#f59e0b",
                border: "1px solid #f59e0b",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              ⬅️ Retour au Tableau de Bord
            </button>
            <h1>📚 {selectedSubject} - الملخصات و fiches techniques</h1>
            <div
              style={{
                backgroundColor: "#111827",
                padding: "30px",
                borderRadius: "12px",
                border: "1px solid #1f2937",
                marginTop: "20px",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              {programData[userLevel]?.[selectedSubject]?.map((chapter, i) => (
                <div
                  key={i}
                  style={{
                    padding: "15px",
                    backgroundColor: "#1e293b",
                    borderRadius: "6px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>📄 {chapter.title}</span>

                  {/* SI UN LIEN DRIVE EXISTE, ON CHANGERA LE TEXTE EN BOUTON DE TÉLÉCHARGEMENT */}
                  {chapter.pdfUrl ? (
                    <a
                      href={chapter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#3b82f6",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      تحميل الملف (PDF)
                    </a>
                  ) : (
                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      قريباً PDF...
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
