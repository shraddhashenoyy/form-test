import { useState } from "react";

export default function FirstName({ firstName, setFirst }) {
  function handleNameChange(event) {
    console.log(event.target.value);
    setFirst(event.target.value);
  }

  return (
    <div>
      <h3>BASIC DETAILS </h3>
      {/* <label> */}
      {/* First Name: */}
      <input
        type="text"
        // placeholder="FirstName"
        defaultValue={firstName}
        onChange={(e) => handleNameChange(e)}
      />
      <br />
      <p>{firstName}</p>
      {/* </label> */}
    </div>
  );
}
