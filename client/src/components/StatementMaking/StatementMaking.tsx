import React from "react";
import { useActions } from "../../hooks/useActions";
// import { useAppSelector } from "../../hooks/redux";

const DEFAULT_STATEMENT = {
  car_number: "",
  description: "",
};

const StatementMaking: React.FC = () => {
  // const state = useAppSelector((state) => state.statementMaking);

  // console.log(state.message);

  const { createStatement } = useActions();

  const [statement, setStatement] = React.useState(DEFAULT_STATEMENT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStatement(statement);
    setStatement(DEFAULT_STATEMENT);
  };

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} className={"column"} style={{ width: "100%" }}>
          <div className={"item"}>
            <h2 className={"title"} style={{ marginBottom: 15 }}>
              Заявление
            </h2>
            <div className={"input-field"}>
              <h3 className="sub-title">Регистрационный номер</h3>
              <input
                value={statement.car_number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatement({ ...statement, car_number: e.target.value })}
                required
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Описание нарушения</h3>
              <textarea
                value={statement.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setStatement({ ...statement, description: e.target.value })
                }
                required
                style={{ marginBottom: 10, width: "100%" }}
              />
            </div>
            <div style={{ display: "inline-flex" }}>
              <button type="submit" className={"submit-btn"}>
                Оставить заявку
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StatementMaking;
