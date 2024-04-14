import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";

const Admin: React.FC = () => {
  const { statements } = useAppSelector((state) => state.statements);

  const { getStatements } = useActions();

  React.useEffect(() => {
    getStatements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {statements.map((item, index) => (
          <div key={item.id} className={"column"}>
            <form onSubmit={handleSubmit} className={"item"}>
              <h2 className={"title"}>Заявление №{index + 1}</h2>
              <h3>
                Номер автомобиля - <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{item.car_number}</span>
              </h3>
              <p style={{ lineHeight: 1.4 }}>{item.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
                <button className={"resolve"}>Подтвердить</button>
                <button className={"reject"}>Отклонить</button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
