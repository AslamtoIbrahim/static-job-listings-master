import "./App.css";
import Home from "./components/Home";
import { useKeys } from "./hook/useKeys";
import { KeysContext } from "./store/KeysContext";

function App() {
  const value = useKeys();
  return (
    <div className="relative h-screen">
      <div className="bg-img " />
      <KeysContext value={value}>
        <Home />
      </KeysContext>
    </div>
  );
}

export default App;
