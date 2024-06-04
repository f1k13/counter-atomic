import {FC, memo} from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
    text: string;
    onClick: () => void;
};

const ButtonText: FC<ButtonTextProps> = ({text, onClick}) => {
    return (
        <Button onClick={onClick}>
            <Text>{text}</Text>
        </Button>
    );
};

export const MemoButtonText = memo(ButtonText);
