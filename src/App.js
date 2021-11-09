import { RecursiveComponent } from "./RecursiveComponent";

function App() {
  const nestedObject = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: "Hello",
      },
      b3: {
        b31: {
          message: "Hi",
        },
        b32: {
          message: "Hi",
        },
      },
    },
    c: {
      c1: 2,
      c2: 3,
    },
  };
  return <RecursiveComponent data={nestedObject} />;
}

export default App;

// // import { SplitScreen } from "./SplitScreen";

// // const LeftHandCom = (name) => <h1 style={{ background: "green" }}>{name}</h1>;

// // const RightHandCom = (message) => (
// //   <h1 style={{ background: "red" }}>{message}</h1>
// // // );
// // import { SmallPerson } from "./people/SmallPerson";
// // import { LargePerson } from "./people/LargePerson";
// // import { RegularList } from "./RegularList";
// // import { Modal } from "./Modal";
// // const people = [
// //   {
// //     name: "John Doe",
// //     age: 54,
// //     hairColor: "brown",
// //     hobbies: ["swimming", "bicycling", "video games"],
// //   },
// //   {
// //     name: "Brenda Smith",
// //     age: 33,
// //     hairColor: "black",
// //     hobbies: ["golf", "mathematics"],
// //   },
// //   {
// //     name: "Jane Garcia",
// //     age: 27,
// //     hairColor: "blonde",
// //     hobbies: ["biology", "medicine", "gymnastics"],
// //   },
// // ];

// // const products = [
// //   {
// //     name: "Flat-Screen TV",
// //     price: "$300",
// //     description: "Huge LCD screen, a great deal",
// //     rating: 4.5,
// //   },
// //   {
// //     name: "Basketball",
// //     price: "$10",
// //     description: "Just like the pros use",
// //     rating: 3.8,
// //   },
// //   {
// //     name: "Running Shoes",
// //     price: "$120",
// //     description: "State-of-the-art technology for optimum running",
// //     rating: 4.2,
// //   },
// // ];
// // import { useState } from "react";
// // import { UserInfo } from "./UserInfo";
// // import { UserLoader } from "./Userloader";
// // import { ResourceLoader } from "./Resourceloader";
// // import { ProductInfo } from "./ProductInfo";
// // import { DataSource } from "./Datasource";
// // import axios from "axios";
// // import { UncontrolledForm } from "./Uncontrooledform";
// // import { ControlledForm } from "./ControledForm";
// // import { ControlledModal } from "./ControlledModal";
// // import { ControlledUnboard } from "./ControlledUnboard";
// // import { printProps } from "./printProps";
// // import { withUserHoc } from "./withUserHoc";
// // // import { withEditableUser } from "./withEditableUser";
// // import { UserInfoForm } from "./UserInfoForm";
// // import { ProductInfo } from "./ProductInfo";
// // import { UserInfo } from "./UserInfo";
// // const getServeData = (url) => async () => {
// //   const res = await axios.get(url);
// //   return res.data;
// // };

// // const getLocalStorageData = (key) => () => {
// //   return localStorage.getItem(key);
// // };

// // const TextInfo = ({ message }) => <h1>{message}</h1>;

// // function App() {
// // const [show, setShowModal] = useState(false);
// // const Step1 = () => <p>ONE!!</p>;
// // const Step2 = () => <p>Two!!!</p>;
// // const Step3 = () => <p>Three!!!</p>;
// // const UserWrapper = printProps(UserInfo);
// // const UserWrapper2 = withUserHoc(UserInfo, "A");
// // return (
// //   <>
// {
//   /* <Modal>
//         <LargePerson people={people[0]} />
//       </Modal> */
// }
// {
//   /* <RegularList
//         items={people}
//         resourceName="people"
//         itemComponent={SmallPerson}
//       />
//       <RegularList
//         items={people}
//         resourceName="people"
//         itemComponent={LargePerson}
//       /> */
// }
// {
//   /* //{" "}
//       <SplitScreen leftWeight={1} rightWeight={3}>
//         // <LeftHandCom name="FEYIKEMI" />
//         // <RightHandCom message="I LOVE YOU" />
//         //{" "}
//       </SplitScreen> */
// }
// {
//   /* <UserLoader>
//         <UserInfo />
//       </UserLoader> */
// }
// {
//   /* <ResourceLoader resURL="/users/A" resName="user">
//         <UserInfo />
//       </ResourceLoader>
//       <ResourceLoader resURL="/product/w" resName="products">
//         <ProductInfo />
//       </ResourceLoader> */
// }
// {
//   /* <DataSource getDataFunc={getServeData("/users/A")} resName="user">
//         <UserInfo />
//       </DataSource>
//       <DataSource
//         getDataFunc={getLocalStorageData("message")}
//         resName="message"
//       >
//         <TextInfo />
//       </DataSource> */
// }
// {
//   /* <UncontrolledForm />
//       <ControlledForm /> */
// }
// {
//   /* <ControlledModal show={show} onRequestClose={() => setShowModal(false)}>
//         <p>Modallllll!!!!!!!!</p>
//       </ControlledModal>
//       <button onClick={() => setShowModal(!show)}>
//         {show ? "Hide Modal" : "Show Modal"}
//       </button> */
// }
// {
//   /* <ControlledUnboard>
//         <Step1 />
//         <Step2 />
//         <Step3 />
//       </ControlledUnboard> */
// }
// {
//   /* <UserWrapper a={1} b="Hloo" c="12334" />
//       <UserWrapper2 /> */
// }
// {
//   /* <UserInfoForm /> */
// }
// {
//   /* <UserInfo userId="A" /> */
// }
// {
//   /* <UserInfo userId="b" />
//       <ProductInfo productId="v" />
//     </>
//   );
// }

// export default App; */
//   // }
// }
