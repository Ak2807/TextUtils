import React, {useState} from 'react'

export default function Textform(props) {
    const handleUPclick = ()=>{
        let newtext= text.toUpperCase();
        setText(newtext)
    
}
    const handleLowerclick =()=>{
        let newtext=text.toLowerCase();
        setText(newtext)

    }
    const clickCLR =()=>{
        let clr="";
        setText(clr)

    }
    const clickDLT =()=>{
        let dlt=text.substring(0,text.length-1);
        setText(dlt)

    }

    const handleOnchange =(event)=>{
        setText(event.target.value); //un

    }

    const clickcopy =(event)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const[text,setText]=useState('// Enter text here //');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
        <div className="mb-3">
            <h4>Email </h4>
            <input type="email" className="form-control" style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}} id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
             
             <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUPclick}>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerclick}>Lowlercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clickDLT}>Delete</button>

        <button className="btn btn-danger mx-1 my-1" onClick={clickCLR}>All clear</button>
        <button className="btn btn-danger mx-1 my-1" onClick={clickcopy}>Copy</button>

    </div>
    <div className='container my-2' style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>
            Your Text Summary
        </h2>
        <p>
            <b>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words &nbsp;

            {text.length} characters
            </b>
        </p>
        <p>
            {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
