import React, { useEffect, useState } from 'react';
import Table from './Table';

const Header = () => {
    const [text, setText] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [tableValue, setTableValue] = useState(false);
    
    useEffect(() => {
        if(text !== ""){
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter a word or sentence");
        }
    },[text])

    const handleSubmit= (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = text;
        if(!form.checkValidity()){
            setErrorMessage("Please enter a word or sentence");
            setTableValue(false);
        } else {
            setErrorMessage("");
            setTableValue(data); 
        }
    }

    const handleClear = () => {
        setText('');
        setTimeout(() => {
            setErrorMessage('');
        })
    }

    return(
        <div>
            <h2 className='centered'>Character Counter</h2>
            <form className='centered' id='form' onSubmit={handleSubmit} noValidate>
                <label>
                    Enter a word or a sentence to find out number of occurance of a character<br/><br/>
                </label>
                <input type="text" value={text || ''} onChange={(e) => setText(e.target.value)} required/> &nbsp;
                <button>Get Count</button> &nbsp;
                <button onClick={handleClear}>Clear</button>
                {errorMessage && <p className='error centered'> {errorMessage} </p>}
            </form>
            {tableValue ? <Table tableValue={tableValue}/> : '' }
        </div>
    );
} 

export default Header;