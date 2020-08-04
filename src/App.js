import React, { Component } from "react";
import "./App.scss";
import tasks from "./sample/task.json";
import Tasks from "./components/Tasks";
import Taskform from "./components/Form";
import {Header} from "./components/Header";

console.log(tasks);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    }, () => localStorage.setItem('Bulmatodos', JSON.stringify(this.state)));
    console.log(newTask);
  };

  deleteTask = (id) => {
    const refreshTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: refreshTasks }, () => localStorage.setItem('Bulmatodos', JSON.stringify(this.state)));
  };

  checkDone = (id) => {
    const checkTask = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ task: checkTask }, () => localStorage.setItem('Bulmatodos', JSON.stringify(this.state)));
  };


  componentDidMount = () =>{
    let data = localStorage.getItem("Bulmatodos");
    this.setState(data != null 
     ? JSON.parse(data): {
      tasks: tasks,
     })
  }

  

  render() {
    return (
      <div  className="container  px-3 mt-6  has-text-centered">
       <Header/>
        <div className="columns">
          <div className="column">
            <Taskform addTask={this.addTask} />
          </div>
          <div className="column mt-2 mb-3">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead className="has-background-grey-dark" >
                <tr>
                  <th className="has-text-white">Title</th>
                  <th className="has-text-white">Description</th>
                  <th className="has-text-white">Done</th>
                  <th className="has-text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
              <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
              </tbody>
         
            </table>
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
