view sourceprint ?
import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "anhtuan.com",
      todoItems: [{ action: "Iphone 7", done: false },
      { action: "Iphone 8", done: false },
      { action: "Iphone 10", done: true },
      { action: "Iphone 11", done: false }],
      newItemText: ""
    }
  }
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }
  createNewTodo = () => {
    if (!this.state.todoItems
      .find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: this.state.newItemText, done: false }],
        newItemText: ""
      });
    }
  }
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} items to do (False))
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
              onClick={this.createNewTodo}>Add</button>

            <ul>
              {
                this.state.todoItems.map((item, index) => (
                  <li>{item.action} <strong>{item.done ? "true" : "false"}</strong></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  };
}
