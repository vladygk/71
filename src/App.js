import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {

  const [content, setContent] = useState("");
  
  async function FetchData() {
    const response = await fetch(
      "https://jaspervdj.be/lorem-markdownum/markdown.txt"
    );
      const data = await response.text();
     setContent(data);
  }

  useEffect(() => {
   
    FetchData();
  }, []);

  return <Document title="Terms and Conditions" content={content} />;
}

export default App;
