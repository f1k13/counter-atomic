import {
    createContext,
    useState,
    FC,
    ReactNode,
    useCallback,
    useMemo,
} from "react";

type CounterContextType = {
    newIndex: number;
    increment: () => void;
    decrement: () => void;
};

export const CounterContext = createContext<CounterContextType | null>(null);

type CounterProviderProps = {
    children: ReactNode;
};

const CounterProvider: FC<CounterProviderProps> = ({children}) => {
    const [index, setIndex] = useState(0);
    const increment = useCallback(() => {
        setIndex(index + 1);
    }, [index, setIndex]);
    const decrement = useCallback(() => {
        setIndex(index - 1);
    }, [index, setIndex]);
    const newIndex = useMemo(() => {
        return index;
    }, [index]);
    return (
        <CounterContext.Provider value={{newIndex, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    );
};
export default CounterProvider;
