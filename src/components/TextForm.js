import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlort('upper case converted','successfully')
    }
    const handleLoClick = ()=>{
        // console.log("Upper case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlort('lowercase conversion ','successfully')
    }
    const handleClearClick = ()=>{
        // console.log("Upper case was clicked");
        let newText="";
        setText(newText);
        props.showAlort('message has been deleted','successfully')
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText]=useState("")
    // setText("new text");
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Cleat Text</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>My text contain summery </h1>
        <p>it contains {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'please enter the text above to preview the text'}</p>

    </div>
    </>
  )
}
