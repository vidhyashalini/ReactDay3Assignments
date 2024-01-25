import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a ToDo App' },
        // Add more initial todos if needed
      ],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { id: Date.now(), text: prevState.newTodo }],
        newTodo: '',
      }));
    }
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div style={styles.todoListContainer}>
        <h1 style={styles.heading}>ToDo List</h1>
        <div style={styles.addTodoContainer}>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Add a new todo"
            style={styles.input}
          />
          <button onClick={this.addTodo} style={styles.addButton}>
            Add Todo
          </button>
        </div>
        <div style={styles.todosContainer}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={() => this.deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  todoListContainer: {
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  addTodoContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '70%',
    padding: '10px',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  todosContainer: {},
};

export default TodoList;