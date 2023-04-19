import React, { useState } from "react";

//Note:- useState doesn't automatically update and merge the object
function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={value.firstName}
          //Note:- Spread Operator ...name means use the previous value as it is and update after this
          onChange={(e) => setName({ ...name, firstName: e.target.value, l })}
        />
        <input
          type="text"
          value={value.lastName}
          onChange={(e) => setName({ ...name, lasttName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
