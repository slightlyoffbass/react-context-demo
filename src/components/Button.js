import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component{
    

    // contextType is not required with Consumer option
    //static contextType = LanguageContext;

    render(){
        
        return(
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value)=> value === 'english' ? 'Submit': 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        )


        //const text = this.context === 'english' ? 'Submit': 'Voorleggen';
        //return <button className="ui button primary">{text}</button>
    }
}

export default Button;