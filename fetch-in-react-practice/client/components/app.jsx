import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {

    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    fetch('/api/todos',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      })
      .then(res => res.json())
      .then(todo => {
        const oldTodos = [...this.state.todos];
        const newTodos = oldTodos.concat(todo);
        this.setState({
          todos: newTodos
        });
      });
  }

  toggleCompleted(todoId) {
    var newObject = {};
    // var newId;
    for (var i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        newObject.isCompleted = !this.state.todos[i].isCompleted;
        // console.log(this.state.todos[i]);
        // newId = i;
        fetch(`/api/todos/${todoId}`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.todos)
          })
          .then(res => res.json());
        // .then(update => {
        //   const currTodos = [...this.state.todos];
        //   const we = currTodos.find(element => element.todoId === todoId);
        //   console.log(we);
        //   this.setState({
        //     todos: this.state.todos[todoId].isCompleted
        //   });
        //   console.log(this.state.todos[todoId].isCompleted);
        // });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
