import React, {Component} from 'react';

export default class AddTodo extends Component{

    render(){
        return(
            <div className='addtodo'>
                <form className='addtodo--form'>
                    <div className='addtodo--wrapper'>
                    <input className='addtodo--input' type='text' placeholder='Add Todo' hidden={false}></input>
                    <input className='addtodo--button' type='submit' value=''></input>
                    </div>
                </form>
            </div>
        );
    };
};