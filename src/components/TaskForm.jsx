import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // re render the component. This action is async
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { task } = this.state;
    const { saveTask } = this.props;
    // Call an action creator and save the task
    if (task.trim() !== '') {
      saveTask(task);
      this.setState({ task: '' });
    }
  }

  render() {
    const { task } = this.state;
    return (
      <div className="task-form">
        <form onSubmit={this.handleSubmit}>
          <h4>Add a task</h4>
          <textarea className="task-form__textarea" onChange={this.handleChange} value={task} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = {
  saveTask: PropTypes.func.isRequired,
};

export default connect(null, actions)(TaskForm);
