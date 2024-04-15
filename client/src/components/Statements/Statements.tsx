import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";

const Statements: React.FC = () => {
  const { statements } = useAppSelector((state) => state.statements);

  const { getStatements } = useActions();

  React.useEffect(() => {
    getStatements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {statements.map((item, index) => (
          <div key={item.id} className={"column"}>
            <div className={"item"}>
              <h2 className={"title"}>Заявление №{index + 1}</h2>
              <h3>
                Номер автомобиля - <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{item.car_number}</span>
              </h3>
              <p style={{ lineHeight: 1.4 }}>{item.description}</p>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: 150,
                    height: 25,
                    borderRadius: 4,
                    color: "white",
                    fontWeight: 700,
                    backgroundColor: item.state === 0 ? "#E11D48" : item.state === 1 ? "#10B981" : "#6366F1",
                  }}
                >
                  {item.state === 0 ? "Отклонено" : item.state === 1 ? "Подтверждено" : "Рассматривается"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statements;
