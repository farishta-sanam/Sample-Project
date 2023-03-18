import React from 'react';
import { useState } from 'react';
import Table from './Table';

const Header = () => {
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [tableRender, setTableRender] = useState(false);
    
    const handleChange = (e) => {
        setText(e.target.value);
        // if(text.length === 0 ) setErrorMessage("Please enter a word or sentence");
        // else setErrorMessage("");
    }

    const handleClick= (e) => {
        e.preventDefault();
        // if()
        // if(text.length !== 0 ) setTableRender(true); 
        // else setTableRender(false);
        // if(text.length === 0 ) setErrorMessage("Please enter a word or sentence");
        // else setErrorMessage("");
    }

    return(
        <div>
            <h2 className='centered'>Character Counter</h2>
            <form className='centered' >
                <label>
                    Enter a word or a sentence to find out number of occurance of a character<br/><br/>
                </label>
                <input type="text" value={text} onChange={(e) => handleChange(e)} required/> &nbsp;
                <button onClick={(e) => handleClick(e)}>Get Count</button>
                {errorMessage && <p className="error centered"> {errorMessage} </p>}
            </form>
            {tableRender && (<Table text={text}/>) }
        </div>
    );
} 

export default Header;