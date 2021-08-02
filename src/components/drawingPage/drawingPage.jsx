
import React from 'react';

 
const DrawingPage = (props)=> {
    const {input, textarea, option, built } = props;
    const drawing=()=>{
        let element = [];
        for(let i=0; i<input;i++){
            element.push(React.createElement('input'))
        }
        for(let i=0; i<textarea;i++){
            element.push(React.createElement('textarea'))
        }
        return element
    }
    const drawOption=()=>{
        if (option){
            let get = [];
            for(let i=0; i<option;i++){
                get.push(React.createElement('option'))
            }
            return <select>{get}</select>
        }
    }
        return(
            <div>
                <form className='App App-header output'>
                    {drawing()}
                    {drawOption()}
                    <button className='App-link button' onSubmit={built} >Exit</button>
                </form>

            </div>
        )
    }

export default DrawingPage;