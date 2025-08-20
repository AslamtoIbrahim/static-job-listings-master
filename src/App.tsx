import "./App.css";
import Home from "./components/Home";
import KeysContextProvider from "./store/KeysContextProvider";

function App() {
  return (
    <div className="relative h-screen">
      <div className="bg-img" />
      <KeysContextProvider>
        <Home />
      </KeysContextProvider>
     
    </div>
  );
}

export default App;
