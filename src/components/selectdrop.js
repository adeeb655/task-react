import React from 'react';
class Hello extends React.Component {
    constructor(){
        super();
        this.state={name : 'Ram'} }  
    render() {
        return (
            <>
                <h1>My name is {this.state.name} </h1>
                <select>
                    <option>one</option>
                    <option>Two</option>
                </select>
           </>
        )
    }
}
export default Hello;