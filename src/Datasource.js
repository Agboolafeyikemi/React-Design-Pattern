import React, { useState, useEffect } from "react";

export const DataSource = ({ getDataFunc = () => {}, resName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getDataFunc();
      setState(response);
    })();
  }, [getDataFunc]);

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
