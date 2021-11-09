import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      console.log("short length!!!");
    }
  }, [name]);

  const handleS = () => {};
  return (
    <form onSubmit={handleS}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hair color"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
