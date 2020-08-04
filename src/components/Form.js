/* eslint-disable no-sequences */
import React, {Component} from 'react';
import '../App.scss';

export default class Taskform extends Component  {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }


    
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.addTask(this.state.title, this.state.description);

    }

    updateNextValue = (e) => {
        console.log(e.target.value);
        this.setState({
           [e.target.name]: e.target.value,
       
        })
    }
    





    render(){
        return (
       
                    <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="label has-text-left has-text-primary">Create a New Task</label>
                        <div className="control">
                            <input value = {this.state.title}
                            name="title" 
                            onChange={this.updateNextValue} 
                            className="input is-rounded" 
                            type="text" 
                            placeholder="Write a task title"/>
                        </div>
                        <p className="help">This is a help text</p>
                    </div>
                    <div className="field">
                        <textarea onChange={this.updateNextValue}
                         name="description"
                         value = {this.state.description} 
                        className="textarea" 
                        placeholder="write a task description"></textarea>
                    </div>
                        <input disabled={!this.state.title, !this.state.description} className="button is-primary" type="submit" value="Save a task"></input>
                    </form>
           
          
 
        )
    }
}