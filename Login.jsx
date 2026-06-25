import React, { useState } from "react";

function Login({ goBack, onLoginSuccess }) {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState("BAC"); // Par défaut BAC

  if (step === 2) {
    return (
      <div className="login-container">
        <div className="login-left">
          <button onClick={() => setStep(1)} className="btn-back">
            ← Retour
          </button>
          <h1>
            Complétez votre <span className="highlight">Profil</span>
          </h1>
          <p>
            Dites-nous en plus sur vous pour que Hamza puisse vous suivre au
            mieux dans vos révisions.
          </p>
        </div>
        <div className="login-right">
          <div className="login-form-box">
            <h2
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Informations complémentaires
            </h2>

            <input
              type="text"
              placeholder="Nom complet"
              className="login-input"
            />

            <select
              className="login-input"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              style={{ backgroundColor: "#0D1633", color: "white" }}
            >
              <option value="BEM">تلاميذ شهادة التعليم المتوسط (BEM)</option>
              <option value="BAC">تلاميذ شهادة البكالوريا (BAC)</option>
            </select>

            <input
              type="tel"
              placeholder="Numéro de téléphone des parents"
              className="login-input"
            />

            {/* CORRECTION : Au clic, on appelle la fonction de succès avec le niveau choisi */}
            <button
              className="btn-login-submit"
              onClick={() => onLoginSuccess(level)}
            >
              Finaliser l'inscription
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <button onClick={goBack} className="btn-back">
          ← Retour
        </button>
        <h1>
          Welcome to <span className="highlight">ELN7</span>.
        </h1>
        <p>
          Start your journey now with our academic platform. We are here to
          support your learning and help you achieve your academic goals.
        </p>
      </div>

      <div className="login-right">
        <div className="login-form-box">
          <h2 style={{ color: "#FFFFFF" }}>
            أهلاً بك في منصة ELN7. ابدأ بإنشاء حسابك
          </h2>

          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <button className="btn-login-submit" onClick={() => setStep(2)}>
            Create account
          </button>

          <div className="login-separator">OR</div>

          <button className="btn-google" onClick={() => setStep(2)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="G"
            />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
