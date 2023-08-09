import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Percentage from "./Percentage";

function App() {
  // Need to lift state up
  const [billValue, setBillValue] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  return (
    <div>
      {/* Input component to enter bill amount */}
      <Input billValue={billValue} handleBillValue={setBillValue} />
      {/* Percentage Component to manage Tip */}
      <Percentage handlePercentage={setPercentage}>How did you like food : </Percentage>
      <Percentage handlePercentage={setPercentage2}>How did your friend like food : </Percentage>
      {/* Output element to display values */}
      <Output tip1={percentage} tip2={percentage2} billValue={billValue} />
    </div>
  );
}

export default App;
