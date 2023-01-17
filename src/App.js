import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";
function App() {
 const [content, setContent] = useState("");

 useEffect(()=>{
     fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
     .then(result=>result.text())
     .then(text=>setContent(text));
    
  },[]);

  
  return (
    
      <Document  title="Terms and Conditions" content={content}/>
   
  );
}

export default App;
