import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './TaskForm.scss';
import Button from '../button/Button';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '', disabled: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // re render the component. This action is async
    this.setState({ task: event.target.value, disabled: false });
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
    const { task, disabled } = this.state;
    return (
      <div className="task-form">
        <form className="task-form__form" onSubmit={this.handleSubmit}>
          <input className="task-form__input" onChange={this.handleChange} value={task} />
          <Button disabled={disabled} type="submit">Add</Button>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = {
  saveTask: PropTypes.func.isRequired,
};

export default connect(null, actions)(TaskForm);
