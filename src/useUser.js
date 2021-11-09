import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      // const currentUser = response.data;
      setUser(response.data);
    })();
  }, [userId]);
  return user;
};

export const useResource = (resURL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resURL);
      // const currentUser = response.data;
      setData(response.data);
    })();
  }, [resURL]);
  return data;
};

export const useDataSource = (getResourceFunc) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      // const currentUser = response.data;
      setData(result);
    })();
  }, [getResourceFunc]);
  return data;
};
