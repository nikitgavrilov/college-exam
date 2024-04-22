import React from "react";
import Layout from "../components/Layout/Layout";
import Statements from "../components/Statements/Statements";
import { useNavigate } from "react-router-dom";

const StatementsPage: React.FC = () => {
  const [auth, setAuth] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка при отправке запроса");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "Success") {
          setAuth(true);
          if (data.login === "copp") {
            navigate("/admin");
          } else {
            navigate("/statements");
          }
        } else {
          setAuth(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Layout>{auth ? <Statements /> : <>{navigate("/")}</>}</Layout>;
};

export default StatementsPage;
