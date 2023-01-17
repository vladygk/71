export default function Document(props) {
    const checkScrollHeight = (e)=>{
         
        if ((e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight){
            console.log(e.target.parentElement.children[2]);
            e.target.parentElement.children[2].disabled = false;
            //document.getElementsByName("button")[0].disabled = false;
        }
    }
 
    return (
    <>
      <h1 className="title ">{props.title}</h1>
      <p onScroll={checkScrollHeight} style={{overflowY:"auto",height:"200px",width:"200px",overflowX:"hidden"}}className="content ">{props.content}</p>
      <button disabled>I Agree</button>
    </>
  );
}
