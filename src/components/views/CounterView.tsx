import React, { useContext } from "react";
import IncrementButton from "../organisms/IncrementButton";
import DecrementButton from "../organisms/DecrementButton";
import { CounterContext } from "../organisms/CounterProvider";
import Text from "../atoms/Text";
import styles from "./CounterView.module.css";
const CounterView = () => {
  const counterContext = useContext(CounterContext);

  if (!counterContext) {
    throw new Error("CounterView не используется в компоненте CounterProvider");
  }

  return (
    <div className={styles.root}>
      <Text>{counterContext.index}</Text>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};

export default CounterView;
