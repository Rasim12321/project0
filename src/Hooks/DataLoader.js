import React from "react";
export default class DataLoader extends React.Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(1)
            this.setState({data : data})
            console.log(this.state.data)
        })
    }
    render(){
        return(
            <>
                <div>
                    <ul>
                        {this.state.data.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}