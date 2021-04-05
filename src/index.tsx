import "bulmaswatch/superhero/bulmaswatch.min.css";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import bundle from "./bundler";
import CodeEditor from "./components/code-editor";
import Preview from "./components/preview";

const App = () => {
  const ref = useRef<any>();
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    if (!ref.current) return;

    const output = await bundle(input);
    setCode(output);
  };

  return (
    <>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <Preview code={code} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
