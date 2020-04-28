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
  }

  renderComments() {
    const { tasks } = this.props;
    // eslint-disable-next-line react/no-array-index-key
    return tasks.map((task, index) => (<li key={index}>{task}</li>));
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
};

export default connect(mapStateToProps, actions)(Home);
