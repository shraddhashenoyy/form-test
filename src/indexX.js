import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import Form1 from "./form1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Form1 />
  </StrictMode>
);
