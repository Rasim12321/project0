import React from "react";

class Comp1 extends React.Component {
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            count : 0,
            comment : []
        }
    }


    handler = () => {
        let currenCount = this.state.count
        currenCount++
        this.setState({
            count : currenCount
        })
    }

    addComment = () => {
         let comment = this.myRef.current.value
         let comments = this.state.comment
         comments.push(comment)
         this.setState({
            comment : comments
         })
         this.myRef.current.value = ''
    }

    render(){
        return(
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>ThisButton ChangeState</button>
                </div>
                <div>
                    {this.state.count}
                </div>
                <div>
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index.toString}>{item}</li>)}
                    </ul>
                </div>
            </>
        )
    }
        
}

export default Comp1