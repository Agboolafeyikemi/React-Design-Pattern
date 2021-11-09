import React from "react";

export const UncontrolledForm = () => {
  const name = React.createRef();
  const age = React.createRef();
  const hair = React.createRef();

  const handleS = (e) => {
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(hair.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleS}>
      <input name="name" type="text" placeholder="Name" ref={name} />
      <input name="age" type="number" placeholder="Age" ref={age} />
      <input
        name="hair color"
        type="text"
        placeholder="Hair Color"
        ref={hair}
      />
      <input type="Submit" value="Submit" />
    </form>
  );
};
