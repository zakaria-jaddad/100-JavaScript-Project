import { useState } from "react";
import React from "react";


/* 
  class Component Form
*/
// function Form() {
//   let [name, setName] = useState("");
//   let [pass, setPass] = useState("");
//   let [gender, setGender] = useState("");

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log("form submitted");
//         console.log({
//           name,
//           pass,
//           gender,
//         });
//       }}
//       className="
//         flex
//         flex-col
//         justify-center
//       "
//     >
//       <label htmlFor="">name</label>
//       <input
//         type="text"
//         placeholder="Enter You're name"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <br />

//       <label htmlFor="">password</label>
//       <input
//         type="password"
//         placeholder="Enter You're password"
//         onChange={(e) => {
//           setPass(e.target.value);
//         }}
//       />
//       <br />

//       <label htmlFor="">Gender</label>
//       <select
//         onChange={(e) => {
//           setGender(e.target.value);
//         }}
//       >
//         <option value="" disabled>Select</option>
//         <option value="male">male</option>
//         <option value="female">female</option>
//       </select>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }


/* 
  class Component Form
*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      gender: "",
    };
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("form submitted");
          console.log(this.state);
        }}
        className="
        flex
        flex-col
        justify-center
      "
      >
        <label htmlFor="">name</label>
        <input
          type="text"
          placeholder="Enter You're name"
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
        <br />

        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="Enter You're password"
          onChange={(e) => {
            this.setState({
              pass: e.target.value,
            });
          }}
        />
        <br />

        <label htmlFor="">Gender</label>
        <select
          onChange={(e) => {
            this.setState({
              gender: e.target.value,
            });
          }}
        >
          <option value="" disabled selected>Select</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
