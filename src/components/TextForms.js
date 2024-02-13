import React, { useState } from 'react';

export default function TextForms(props) {
    const [text, setText] = useState('Enter text here');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const convertToUppercase = () => {
        setText(text.toUpperCase());
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    value={text}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            <button className="btn btn-success" onClick={convertToUppercase}>Convert to Uppercase</button>
        </div>
    );
}
