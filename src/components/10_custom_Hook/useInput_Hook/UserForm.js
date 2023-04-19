import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindFirstname, resetFirstname] = useInput("");
  const [lastName, bindLastname, resetLastName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstname();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input type="text" {...bindFirstname} />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" {...bindLastname} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
