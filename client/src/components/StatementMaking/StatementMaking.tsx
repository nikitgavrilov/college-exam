import React from "react";

const StatementMaking: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <input required type="text" style={{ width: "100%" }} />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Описание нарушения</h3>
              <textarea required style={{ marginBottom: 10, width: "100%" }} />
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
