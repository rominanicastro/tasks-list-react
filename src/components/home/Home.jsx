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
    this.state = { filters: 'all' };
    fetchTasks();
    this.handleRemove = this.handleRemove.bind(this);
    this.handleResolve = this.handleResolve.bind(this);
    this.updateStateFilter = this.updateStateFilter.bind(this);
  }

  handleRemove(event) {
    const { removeTask } = this.props;
    removeTask(event.target.value);
  }

  handleResolve(event) {
    const { resolveTask } = this.props;
    resolveTask(event.target.value);
  }

  updateStateFilter(event) {
    this.setState({ filters: event.target.value });
  }

  renderTasks() {
    const { tasks } = this.props;
    const { filters } = this.state;
    let tasksFiltered = tasks;
    if (filters !== 'all') {
      tasksFiltered = tasks.filter((task) => task.state === filters);
    }

    return tasksFiltered.length !== 0
      ? tasksFiltered.map((task, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="tasks-list__element">
          <span>{task.taskName}</span>
          {
            task.state === 'pending'
            && (
              <div>
                <button type="button" value={task.taskName} className="tasks-list__btn tasks-list__btn--resolve" onClick={this.handleResolve}>Resolve</button>
                <button type="button" value={task.taskName} className="tasks-list__btn tasks-list__btn--remove" onClick={this.handleRemove}>Remove</button>
              </div>
            )
          }
        </li>
      ))
      : <h5 className="tasks-list__empty">There is no tasks in this filter</h5>;
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Interactive list</h1>
        <TaskForm />
        <div className="tasks-list">
          <div className="task-list__buttons">
            <button type="button" value="all" onClick={this.updateStateFilter} className="tasks-list__btn tasks-list__all">All</button>
            <button type="button" value="pending" onClick={this.updateStateFilter} className="tasks-list__btn tasks-list__pending">Pending</button>
            <button type="button" value="resolved" onClick={this.updateStateFilter} className="tasks-list__btn tasks-list__resolved">Resolved</button>
            <button type="button" value="removed" onClick={this.updateStateFilter} className="tasks-list__btn tasks-list__removed">Removed</button>
          </div>
          <div className="tasks-list__header">
            <h4 className="tasks-list__title">Tasks List: </h4>
          </div>
          <ul className="tasks-list__list">
            {this.renderTasks()}
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
  tasks: PropTypes.arrayOf(PropTypes.shape(
    {
      taskName: PropTypes.string,
      state: PropTypes.string,
    },
  )).isRequired,
  fetchTasks: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  resolveTask: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(Home);
