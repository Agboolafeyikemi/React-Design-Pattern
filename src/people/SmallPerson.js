export const SmallPerson = ({ people }) => {
  const { name, age } = people;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
