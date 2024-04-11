import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <main>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transform: "translateY(100px)",
        }}
      >
        <p style={{ fontSize: 22, marginBottom: 25 }}>Страница не найдена</p>
        <h1 style={{ fontSize: 222 }}>404</h1>
        <Link to={"/"}>На главную</Link>
      </section>
    </main>
  );
};

export default ErrorPage;
