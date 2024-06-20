import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Upper case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        // console.log("Upper case was clicked");
        let newText="";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText]=useState("")
    // setText("new text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Cleat Text</button>

    </div>
    <div className="container">
        <h1>My text contain summery </h1>
        <p>it contains {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
