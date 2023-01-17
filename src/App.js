import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";
function App() {
 const [content, setContent] = useState("");

 useEffect(()=>{
     fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt").then(text=>text.text()).then(text=>setContent(text));
    
  },[]);

  
  return (
    <div className="App">
      <Document  title="Terms and Conditions" content={content}/>
    </div>
  );
}

export default App;
