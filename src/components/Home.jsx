import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskForm from './TaskForm';
import * as actions from '../actions';

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
      <li key={index}>
        {task}
        <button type="button" value={task} className="" onClick={this.handleRemove}>Remove</button>
        <button type="button" className="" onClick={this.handleRemove}>Resolve</button>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <TaskForm />
        <h4>Tasks List: </h4>
        <ul>
          {this.renderComments()}
        </ul>
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
