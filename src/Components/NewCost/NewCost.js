import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHenler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => setIsFormVisible(false);

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHenler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
