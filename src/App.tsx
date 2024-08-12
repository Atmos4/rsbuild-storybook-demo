import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AssetInCss } from "./stories/AssetInCss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rsbuild + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rsbuild and React logos to learn more
      </p>
      <AssetInCss>Hello world</AssetInCss>
    </>
  );
}

export default App;
