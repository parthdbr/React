import React, {useState} from 'react'

export default function EnterText(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return(
        <>
        <div className='container my-4'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id='myBox' rows='6'></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className='container my-3'>
            <h3>Your Text Summary</h3>
            <p>{text.split(' ').length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(' ').length} Min Read</p>

            <h3>Preview</h3>
            {text}
        </div>
        </>
    );
}
