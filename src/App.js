import "./styles.css";
import react from "react";

const IncNum = () => {
  console.log("clicked");
};
export default function App() {
  return (
    <>
      <h1>0</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
}
