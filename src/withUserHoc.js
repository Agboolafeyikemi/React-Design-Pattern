import axios from "axios";
import React, { useState, useEffect } from "react";

export const withUserHoc = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await axios.get(`/users/${userId}`);
        setUser(res.data);
      },
      [])();
    });
    return <Component {...props} user={user} />;
  };
};
