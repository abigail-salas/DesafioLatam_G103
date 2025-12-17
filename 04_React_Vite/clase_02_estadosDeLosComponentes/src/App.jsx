import { useState } from "react";
import Contador from "./components/Contador";
import MyInput from "./components/MyInput";
import FormError from "./components/FormError";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <h2>Contador</h2>
        <Contador />
      </div>

      <div>
        <h2>Input</h2>
        <MyInput />
      </div>

      <div>
        <h2>Formulario</h2>
        <FormError />
      </div>
    </>
  );
}

export default App;
