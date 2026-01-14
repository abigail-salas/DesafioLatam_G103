import ConsumoApi from "./components/ConsumoApi";
import Example from "./components/Example";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <>
      <div>
        <h1>Ejemplo Inicial</h1>
        <Example />
      </div>

      <div>
        <h1>Ejemplo Inicial</h1>
        <ConsumoApi />
      </div>

      <div>
        <h1>Ejemplo usuarios</h1>
        <UserSearch />
      </div>
    </>
  );
}

export default App;
