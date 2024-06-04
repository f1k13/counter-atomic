import {useContext} from "react";
import {CounterContext} from "./CounterProvider";
import {MemoButtonText} from "../molecules/ButtonText";

const DecrementButton = () => {
    const counterContext = useContext(CounterContext);

    if (!counterContext) {
        throw new Error(
            "DecrementButton не используется в компоненте CounterProvider"
        );
    }

    return <MemoButtonText text="Уменьшить" onClick={counterContext.decrement}/>;
};

export default DecrementButton;
