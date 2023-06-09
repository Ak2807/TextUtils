import React, {useState} from 'react'

export default function Aboutus(props) {

    // const[ myStyle,setMyStyle]= useState( {
    //     color: 'black',
    //     backgroundColor:'white'
    // })

   let myStyle ={
        color : props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'? '#042743':'white',
          
   }



  return (
    <div className='container' >
        <h1 className="conatiner my-1" style ={{ color : props.mode ==='dark'?'white':'#042743'}}>AboutUs</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provide instant character count & word count staististics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web Browser such as chrome, firefox, internet explorer, safari, opera. It suits to count character in faceboook, blog, books,  excel documents, pdf dociment, essays, etc.
                </div>
                </div>
            </div>
            </div>
       
           

    </div>
  )
}
 