// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export const withEditable = (Component, userId) => {
//   return (props) => {
//     const [user, setUser] = useState(null);
//     const [originalUser, setOriginalUser] = useState(null);

//     useEffect(() => {
//       (async () => {
//         const res = await axios.get(`/users/${userId}`);
//         setUser(res.data);
//         setOriginalUser(res.data);
//       })();
//     }, []);

//     const onChangeUser = (changes) => {
//       setUser({ ...user, ...changes });
//     };

//     const onSaveUser = async () => {
//       const res = await axios.post(`/users/${userId}`, { user });
//       setOriginalUser(res.data);
//       setUser(res.data);
//     };
//     const onResetUser = () => {
//       setUser(originalUser);
//     };

//     return (
//       <Component
//         {...props}
//         user={user}
//         onChangeUser={onChangeUser}
//         onSaveUser={onSaveUser}
//         onResetUser={onResetUser}
//       />
//     );
//   };
// };

import React, { useState, useEffect } from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
