import React, {Component} from 'react';
import Task from './Task';
import propTypes from 'prop-types';
import '../App.scss';

export default class Tasks extends Component{
    render(){
        return(
            this.props.tasks.map(e => <Task task = {e} key={e.id} deleteTask={this.props.deleteTask} 
                checkDone={this.props.checkDone}/> )
           )
      }
    }

Tasks.propTypes = {
    tasks: propTypes.array.isRequired
}
