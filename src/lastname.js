import { useState } from "react";

export default function LastName(props) {
  return (
    <form>
      <h3>BASIC DETAILS </h3>
      <label>
        Last Name:
        <input
          type="text"
          placeholder="LastName"
          value={props.LastName}
          // onChange={handleLastNameChange}
        />
        <br />
        <p>{LastName}</p>
      </label>
    </form>
  );
}
