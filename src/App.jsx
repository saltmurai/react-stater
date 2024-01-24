import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Button variant="filled">ABCD</Button>
      </MantineProvider>
    </>
  );
}

export default App;
