import React, { Component } from 'react';

class childOne extends Component {
    render() {
        console.log("props", this.props )
        return (
            <div>
                <h1>Hi this {this.props.age}</h1>
                <h1>{this.props.hobby}</h1>
                <button onClick={() =>this.props.updateDetails("firnaas", 22)}> child button</button>
                <button onClick={() =>this.props.updateDetails("Bhuva", 22)}> child button 2</button>
            </div>
        )
    }
}

export default childOne;
