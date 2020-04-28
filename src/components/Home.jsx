import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  renderComments() {
    const { tasks } = this.props;
    return tasks.map((task) => (<li key={task}>{task}</li>));
  }

  render() {
    return (
      <div>
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
};

export default connect(mapStateToProps)(Home);
