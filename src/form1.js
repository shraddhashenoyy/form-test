import React from "react";
import { useState } from "react";
import FirstName from "./firstname";
import LastName from "./lastname";

export default function Form1(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  return (
    <div>
      <FirstName firstName={first} setFirst={setFirst} />

      {/* <LastName /> */}
    </div>
  );
}
