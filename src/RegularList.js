export const RegularList = ({ items, resourceName, itemComponent: Item }) => {
  return (
    <>
      {items.map((item, i) => (
        <Item key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
