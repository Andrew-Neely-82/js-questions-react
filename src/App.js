import "./App.scss";
import { Editor } from "@monaco-editor/react";

function App() {
  const editorOptions = {
    fontFamily: "Courier New, monospace !important", // Set your desired font family here
  };

  const editorProps = {
    height: "10rem",
    width: "50%",
    theme: "vs-dark",
    defaultLanguage: "javascript",
    options: editorOptions,
  };

  return (
    <div className="App">
      <h1>TEST test</h1>
      <Editor {...editorProps} />
    </div>
  );
}

export default App;
