import React from "react";
import { IStatement } from "../../modules/IStatement";

const statementList: IStatement[] = [
  {
    id: "0",
    number: "м967мм",
    description: `Хочу уведомить вас о том, что данный автомобиль был замечен за 
		превышение скорости на улице Гагарина вчера в 18:30. Согласно 
		моим подсчетам, его скорость превысила разрешенный предельный 
		уровень на 15 км/ч.`,
    state: 1,
  },
  {
    id: "1",
    number: "а458еу",
    description: `Хочу сообщить вам о том, что на прошлой неделе этот автомобиль
		был замечен нарушающим ПДД. Он проехал через красный свет на
		перекрестке Ленина и Пушкина.`,
    state: 0,
  },
  {
    id: "2",
    number: "а128ем",
    description: `Хочу сообщить вам о том, что этот автомобиль плохой!!!`,
    state: 2,
  },
];

const Admin: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {statementList.map((item, index) => (
          <div key={item.id} className={"column"}>
            <form onSubmit={handleSubmit} className={"item"}>
              <h2 className={"title"}>Заявление №{index + 1}</h2>
              <h3>
                Номер автомобиля - <span style={{ fontWeight: 700, textTransform: "uppercase" }}>{item.number}</span>
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
