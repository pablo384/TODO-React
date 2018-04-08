import React, { Component } from 'react';
class TodoForm extends Component{
  handleInput(e){
    console.log(e.target.value, e.target.name);
  }
  render(){
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
              name="priority"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
              
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Guardar"
              />
          </div>
        </form>
      </div>
    )
  }
}
export default TodoForm;
