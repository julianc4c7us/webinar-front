import axios from "axios";
import { useEffect, useState } from "react";

export const AppPrivate = () => {
  const [isAuth, setIsAuth] = useState(false);

  const getAuthEndpoint = async () => {
    try {
      const path = "http://localhost:3000/api/private/";
      const token = localStorage.getItem("token");
      const response = await axios.get(path, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setIsAuth(true);
    } catch (error) {
      setIsAuth(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAuthEndpoint();
  }, []);

  return <div>{isAuth ? <h1>App private</h1> : <h1>Unauthorized</h1>}</div>;
};
