import React, { Component } from "react";
import propTypes from "prop-types";
import "../App.scss";

export default class Task extends Component {
  styleCompleted() {
    return {
      fontSize: "18px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;

    //   const btnDelete = {
    //     fontSize: '18px',
    //     background: '#ea2027',
    //     color: '#ffffff',
    //     border: 'none',
    //     borderRadius: '50%',
    //     cursor: 'pointer'
    // }

    return (
   
        <tr className="py-2" style={this.styleCompleted()}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <label className="checkbox mx-2 is-inline">
                  <input
                    checked={task.done}
                    type="checkbox"
                    onChange={this.props.checkDone.bind(this, task.id)}
                  />
                </label>
              </td>
              <td>
                <button
                  onClick={this.props.deleteTask.bind(this, task.id)}
                  className="button is-danger is-inline">
                  x
                </button>
              </td>
        </tr>
    );
  }
}

Task.propTypes = {
  task: propTypes.object.isRequired,
};
