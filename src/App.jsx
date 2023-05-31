import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import ImageForm from "./ImageForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Myyyyyyy Image Board :^D</h1>
      <ImageForm />
    </>
  );
}

export default App;
