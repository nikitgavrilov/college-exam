import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DEFAULT_VALUES = {
  login: "",
  password: "",
};

const LoginPage: React.FC = () => {
  const [values, setValues] = React.useState(DEFAULT_VALUES);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка при отправке запроса");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "Success") {
          navigate("/statements");
        } else {
          alert(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
              <input
                value={values.login}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, login: e.target.value })}
                required
                type="text"
              />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Пароль</h3>
              <input
                value={values.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, password: e.target.value })}
                required
                type="password"
                style={{ marginBottom: 5 }}
              />
            </div>
            <button type="submit" className={"submit-btn"}>
              Войти в аккаунт
            </button>
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

export default LoginPage;
