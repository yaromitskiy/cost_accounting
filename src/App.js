import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
