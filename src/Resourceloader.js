import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resURL, resName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resURL);
      // const currentUser = response.data;
      setState(response.data);
    })();
  }, [resURL]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resName]: state });
        }
        return child;
      })}
    </>
  );
};
