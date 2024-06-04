import CounterView from "../components/views/CounterView";
import CounterProvider from "@/components/organisms/CounterProvider";

const HomePage = () => {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
};

export default HomePage;
