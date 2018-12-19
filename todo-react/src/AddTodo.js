import React, {Component} from 'react';

export default class AddTodo extends Component{

    render(){
        return(
            <div className='addtodo'>
                <form className='addtodo--form' onSubmit={this.props.handleAddTodo}>
                    <div className='addtodo--wrapper'>
                    <input className='addtodo--input' id='addTodo' type='text' placeholder='Add Todo' hidden={false}></input>
                    <input className='addtodo--button' type='submit' value=''></input> 
                    </div>
                </form>
            </div>
        );
    };
};