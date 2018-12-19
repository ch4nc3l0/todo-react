import React, { Component } from 'react';
import './App.scss';
import Titlebar from './Titlebar';
import TodoList from './TodoList';
import Addtodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar title='Reactive Todo'/>
        <TodoList/>
        <Addtodo/>
      </div>
    );
  }
}

export default App;
