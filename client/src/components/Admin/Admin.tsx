import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { IStatement } from "../../models/IStatement";

const DEFAULT_STATUS: Omit<IStatement, "car_number" | "description"> = {
  id: "",
  status: 2,
};

const Admin: React.FC = () => {
  const { statements } = useAppSelector((state) => state.statements);

  const { getStatements, updateStatus } = useActions();

  const [status, setStatus] = useState(DEFAULT_STATUS);

  React.useEffect(() => {
    getStatements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStatus(status);
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {statements.map((item, index) => {
          if (item.status === 2) {
            return (
              <div key={item.id} className={"column"}>
                <form onSubmit={handleSubmit} className={"item"}>
                  <h2 className={"title"}>Заявление №{index + 1}</h2>
                  <h3>
                    Номер автомобиля - <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{item.car_number}</span>
                  </h3>
                  <p style={{ lineHeight: 1.4 }}>{item.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
                    <button onClick={() => setStatus({ ...status, id: item.id, status: 1 })} className={"resolve"}>
                      Подтвердить
                    </button>
                    <button onClick={() => setStatus({ ...status, id: item.id, status: 0 })} className={"reject"}>
                      Отклонить
                    </button>
                  </div>
                </form>
              </div>
            );
          } else {
            return (
              <div key={item.id} className={"column"}>
                <form onSubmit={handleSubmit} className={"item"}>
                  <h2 className={"title"}>Заявление №{index + 1}</h2>
                  <h3>
                    Номер автомобиля - <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{item.car_number}</span>
                  </h3>
                  <p style={{ lineHeight: 1.4 }}>{item.description}</p>
                  <p
                    style={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: 150,
                      height: 25,
                      borderRadius: 4,
                      color: "white",
                      fontWeight: 700,
                      backgroundColor: item.status === 0 ? "#E11D48" : item.status === 1 ? "#10B981" : "#6366F1",
                    }}
                  >
                    {item.status === 0 ? "Отклонено" : item.status === 1 ? "Подтверждено" : "Рассматривается"}
                  </p>
                </form>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Admin;
