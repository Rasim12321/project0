import React, {Component} from "react";
export default class Hook2 extends Component {
    constructor(props){
        super();
        this.state = {
            buttonText : 'Push'
        }
    }

    handleClick = () => {
        this.setState({ buttonText : 'I was pushed'})
    }

    render(){
        return(
            <>
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            
            </>
        )
    }
}