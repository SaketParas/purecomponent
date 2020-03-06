import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:"Saket"
        }
    }
    componentDidMount (){
        setInterval(() =>{
            this.setState({
                name:"saket"
            })
        },2000)
    }
    
    render() {
        console.log("***Parent Component******");
        
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>
            </div>
        )
    }
}

export default ParentComp
