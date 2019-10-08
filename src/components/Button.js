import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{
    

    // contextType is not required with Consumer option
    //static contextType = LanguageContext;

    render(){

        return(
            <ColorContext.Consumer>
            {(color)=>
                <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value)=> value === 'english' ? 'Submit': 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
            }
            </ColorContext.Consumer>
        )


        //const text = this.context === 'english' ? 'Submit': 'Voorleggen';
        //return <button className="ui button primary">{text}</button>
    }
}

export default Button;