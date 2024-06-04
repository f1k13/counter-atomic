import { useContext } from "react";
import { CounterContext } from "./CounterProvider";
import { MemoButtonText } from "../molecules/ButtonText";

const IncrementButton = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext) {
    throw new Error(
      "IncrementButton не используется в компоненте CounterProvider"
    );
  }

  return <MemoButtonText text="Увеличить" onClick={counterContext.increment} />;
};

export default IncrementButton;
