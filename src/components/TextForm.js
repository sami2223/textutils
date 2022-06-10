import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = 'new text'; //wrong way to change the state
    // text = setText('new text'); //correct way to change the state

    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case!", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value);
    }

    const handleCopyText = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); // ==> for deselecting copy text
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Enter the text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" style={{
                        backgroundColor: props.mode === 'dark' ? '#cdcbcb' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-sm btn-primary me-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Summary</h4>
                <p>{text.length} character(s) and {text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} word(s)</p>
                <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length * 0.008} minute(s) to read</p>

            </div>
            <div className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Preview</h4>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
