import React, { Component } from 'react';
import './App.scss';
import Titlebar from './Titlebar';
import TodoList from './TodoList';
import Addtodo from './AddTodo';

class App extends Component {
  constructor(props){
    super(props);
    this.handleAddTodo=this.handleAddTodo.bind(this);
    this.state={
      todo:[]
    };
  }

    handleAddTodo(e) {
     e.preventDefault();
     let todo = document.getElementById('addTodo').value.trim();
     if(todo!==''){
     this.setState(prevState=>({todo:[...prevState.todo, todo]}));
     }
    };
  
  render() {
    return (
      <div className="App">
        <Titlebar title='Reactive Todo'/>
        <TodoList todo={this.state.todo}/>
        <Addtodo handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default App;
