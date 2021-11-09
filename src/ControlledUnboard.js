import React, { useState } from "react";

export const ControlledUnboard = ({ children, onFinish }) => {
  const [data, setData] = useState({});
  const [curIndex, setCurIndex] = useState(0);

  const curChild = React.Children.toArray(children)[curIndex];

  return curChild;
};
