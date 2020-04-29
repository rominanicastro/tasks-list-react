import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskForm from '../taskForm/TaskForm';
import * as actions from '../../actions';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    const { fetchTasks } = this.props;
    fetchTasks();
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {
    const { removeTask } = this.props;
    removeTask(event.target.value);
  }

  renderComments() {
    const { tasks } = this.props;
    return tasks.map((task, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index} className="tasks-list__element">
        <span>{task}</span>
        <div>
          <button type="button" value={task} className="tasks-list__btn tasks-list__btn--resolve" onClick={this.handleRemove}>Resolve</button>
          <button type="button" value={task} className="tasks-list__btn tasks-list__btn--remove" onClick={this.handleRemove}>Remove</button>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Interactive list</h1>
        <TaskForm />
        {/* This logic can be placed in other component in order to make the code nicer */}
        <div className="tasks-list">
          <h4 className="tasks-list__title">Tasks List: </h4>
          <ul className="tasks-list__list">
            {this.renderComments()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

Home.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchTasks: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(Home);
