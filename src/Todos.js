import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todo: 'wash bike',
        completed: false,
      },
      {
        id: 2,
        todo: 'wash car',
        completed: true,
      },
      {
        id: 3,
        todo: 'wash dog',
        completed: true,
      },
      {
        id: 4,
        todo: 'wash table',
        completed: false,
      },
      {
        id: 5,
        todo: 'wash porch',
        completed: false,
      },
      {
        id: 6,
        todo: 'wash dog',
        completed: false,
      }
    ],
    newTodo: ''
  }

  componentDidMount() {
    console.log('=============================\n')
    console.log('|| this.props.token', this.props.token)
    console.log('\n=============================')
    // IRL: use the token to /GET fetch todos and put them in state
  }

  getClassName = (task) => {
    if (task.todo === 'wash dog' &&  task.completed) return 'doggy complete'; 
    if (task.todo === 'wash dog' &&  !task.completed) return 'doggy incomplete';   
  
    if (task.todo === 'wash dog') return 'doggy';
    if (task.completed) return 'complete';
    if (!task.completed) return 'incomplete'
  }

  handleChange = async (e) => {
    await this.setState({ newTodo: e.target.value });

  }

  handleSubmit = (e) => {
    e.preventDefault();

    
    const newArrayOfTodos = this.state.todos.slice();
    
    // IRL: fetch to do make a new todo
    const fakeNewTodo = {
      id: Math.random(),
      completed: false,
      todo: this.state.newTodo
    };

    newArrayOfTodos.push(fakeNewTodo);

    this.setState({ 
      newTodo: '',
      todos: newArrayOfTodos
     })
  }

  handleClick = (id) => {
    console.log('=============================\n')
    console.log('|| preted were sending an id to the back end', id)
    console.log('\n=============================')

    // EASY MODE

    // IRL: FETCH /PUT 1 call back end with that id to set it to complete

    // IRL: FETCH /GET all todos again

    // put those new and fresh and updated list of todos in state
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo} onChange={this.handleChange} />
          <button>add</button> 
        </form>
        <ul>
          {
            this.state.todos.map(task => <li onClick={() => this.handleClick(task.id) /* whenevert you need to pass something to a handler, you need an anonymous function that CALLS that function with the right info */} className={this.getClassName(task)} key={JSON.stringify(task)}>
              {task.todo}
            </li>)
          }
        </ul>
      </div>
    )
  }
}
