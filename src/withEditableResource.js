import React, { useState, useEffect } from "react";
import axios from "axios";
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resPath, resName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resPath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resPath, { [resName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };
    const resProps = {
      [resName]: data,
      [`onChange${capitalize(resName)}`]: onChange,
      [`onSave${capitalize(resName)}`]: onSave,
      [`onReset${capitalize(resName)}`]: onReset,
    };

    return <Component {...props} {...resProps} />;
  };
};
