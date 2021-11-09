import { useCurrentUser } from "./useCurrentuser";
import { useUser } from "./useUser";
import { useDataSource } from "./useUser";
import axios from "axios";
export const UserInfo = ({ userId }) => {
  //   const user = useUser(userId);
  //   const user = useResource(`/users/${userId}`);
  const serverResource = (resURL) => async () => {
    const response = await axios.get(`users/${userId}`);
    return response.data;
  };
  const localStorageRes = (key) => () => {
    return localStorage.getItem(key);
  };
  const user = useDataSource(serverResource(`users/${userId}`));
  const message = useDataSource(localStorageRes(`message`));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading....</p>
  );
};
