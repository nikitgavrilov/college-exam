import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  pageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ pageUrl }) => {
  const statementsUrl = pageUrl === "/statements";
  const statementMakingUrl = pageUrl === "/statement-making";

  const titleResult = statementsUrl ? (
    <h1 style={{ fontSize: 24, fontWeight: 700 }}>Заявления</h1>
  ) : statementMakingUrl ? (
    <h1 style={{ fontSize: 24, fontWeight: 700 }}>Составить заявление</h1>
  ) : (
    ""
  );
  const ulResult = statementsUrl ? (
    <>
      <li>
        <Link to={"/statement-making"}>
          <button className={styles.makeStatement}>Составить заявление</button>
        </Link>
      </li>
      <li>
        <Link to={"/"}>
          <button>Выйти</button>
        </Link>
      </li>
    </>
  ) : statementMakingUrl ? (
    <>
      <li>
        <Link to={"/statements"}>Вернуться обратно</Link>
      </li>
      <Link to={"/"}>
        <button>Выйти</button>
      </Link>
    </>
  ) : (
    ""
  );

  return (
    <header>
      <div className={styles.body}>
        {titleResult}
        <nav>
          <ul className={styles.list}>{ulResult}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
