import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // Convert the text to uppercase
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been convented to Uppercase" , "Success");
    };
    
    const handleLowClick = () => {
        // Convert the text to uppercase
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been convented to Lowercase" , "Success");
    };
    
    const handleOnChange = (event) => {
        // Update the text state as user types
        setText(event.target.value);
    };
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To ClipBoard" , "Success");
    }
    
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared" , "Success");
    }
    
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Has been Removed" , "Success");
    }
    const [text, setText] = useState('');

    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-3 '>{props.heading}</h1>
                <div className="my-3">
                    {/* Corrected onChange and className */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="button">
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleLowClick}>Convert To LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleCopy}>Copy To ClipBoard</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text === "" ? 0 : text.trim(" ").split(/\s+/).length}  words and {text.replace(/\s/g, '').length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
                {/* <p>{text}</p> */}
            </div>
        </>
    );
}
