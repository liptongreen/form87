
import React from 'react';
import ReadingPage from '../readingPage';
import DrawingPage from '../drawingPage';

class FormsCreatePage extends React.Component {
    state = {
        input: 0,
        textarea: 0, 
        option: 0,
        built: false,
    }
    render(){
        
        const handleInputChange =(e)=> {
            const target = e.target;
            const value = target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
          }
        const built=()=>{
            if(this.state.built){
                this.setState({built:false})
            } else {
                this.setState({built:true})
            }
            
        }
          const choice = (!this.state.built) ? <ReadingPage handleInputChange={handleInputChange} built={built}/> : <DrawingPage input={this.state.input} textarea={this.state.textarea} option={this.state.option} built={built}/>;
        return(
            <div>
                {choice}
            </div>
        )
    }
}

export default FormsCreatePage;