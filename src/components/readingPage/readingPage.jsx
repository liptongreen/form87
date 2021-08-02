
import React from 'react';

 
const ReadingPage = (props)=> {
    const {handleInputChange, built } = props;
        return(
            <div>
                <form className='App App-header'>
                    <div className="line">
                        <p className="App-link">Input</p>
                        <input className="inputForm" type="number" name='input' onChange={(e)=>{handleInputChange(e)}} />
                    </div>
                    <div className="line">
                        <p className="App-link">Textarea</p>
                        <input className="inputForm" type="number" name='textarea' onChange={(e)=>{handleInputChange(e)}} />
                    </div>
                    <div className="line">
                        <p className="App-link">Option</p>
                        <input className="inputForm" type="number" name='option' onChange={(e)=>{handleInputChange(e)}} />
                    </div>
                    <button className='App-link button' onClick={built}>Built</button>
                </form>

            </div>
        )
    }

export default ReadingPage;