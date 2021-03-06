import React, { Component } from 'react';
import Todos from "./components/Todos"
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import uuid from 'uuid';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {
    todos:[
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Text parents',
        completed: false
      }
    ]
  }

  markComplete= (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
<AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={about} />
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
