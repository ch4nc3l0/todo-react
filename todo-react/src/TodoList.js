import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
constructor(props){
    super(props);
    this.mapTodo=this.mapTodo.bind(this);
}

    mapTodo() {
        if(this.props.todo.length===0){
            return(
                <div  className='todoitem'>
                    <p>Add Something Todo!</p>
                </div>
                );
        };
        return this.props.todo.map((todo, index) =>{
            return <TodoItem key={index} todo={todo}/>
        });
    }

    render(){
        return(
            <div className='todolist'>
            {this.mapTodo()}
            </div>
        );
    };
};