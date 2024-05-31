import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";
import ButtonText from "../molecules/ButtonText";

const DecrementButton = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext) {
    throw new Error(
      "DecrementButton не используется в компоненте CounterProvider"
    );
  }

  return <ButtonText text="Уменьшить" onClick={counterContext.decrement} />;
};

export default DecrementButton;
