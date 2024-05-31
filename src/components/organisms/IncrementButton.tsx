import React, { useContext } from "react";
import { CounterContext } from "./CounterProvider";
import ButtonText from "../molecules/ButtonText";

const IncrementButton = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext) {
    throw new Error(
      "IncrementButton не используется в компоненте CounterProvider"
    );
  }

  return <ButtonText text="Увеличить" onClick={counterContext.increment} />;
};

export default IncrementButton;
