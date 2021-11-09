import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      // const currentUser = response.data;
      setUser(response.data);
    })();
  }, []);
  return user;
};
