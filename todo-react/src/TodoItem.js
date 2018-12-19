import React, { Component } from 'react';

export default class TodoItem extends Component{

    render(){
        return(
            <div className='todoitem'>
                <p>{this.props.todo}</p>
            </div> 
        );
    };
};