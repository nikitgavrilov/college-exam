import React from "react";
import { Link } from "react-router-dom";

const AuthPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <section>
        <div className={"form__body"}>
          <form onSubmit={handleSubmit} className={"form"}>
            <h2 className={"title"} style={{ marginBottom: 15 }}>
              Войти в аккаунт
            </h2>
            <div className={"input-field"}>
              <h3 className="sub-title">Логин</h3>
              <input required type="text" />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Пароль</h3>
              <input required type="password" style={{ marginBottom: 5 }} />
            </div>
            <Link to={"/statements"}>
              <button type="submit" className={"submit-btn"}>
                Войти в аккаунт
              </button>
            </Link>
            <hr />
            <div className={"redirect"} style={{ display: "flex", justifyContent: "center" }}>
              <p className={"redirect__link"}>
                <Link to={"/"}>Еще нет аккаунта?</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
