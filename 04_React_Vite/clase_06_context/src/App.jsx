import "./App.css";
import Component1 from "./components/Component1";
import Components2 from "./components/Components2";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import CounterProvider from "./context/CounterContext";
import InfoProvider from "./context/InfoContext";

function App() {
  return (
    <>
      <InfoProvider>
        <Component1 />
        <Components2 />
      </InfoProvider>

      <CounterProvider>
        <Increment />
        <Decrement />
      </CounterProvider>
    </>
  );
}

export default App;
