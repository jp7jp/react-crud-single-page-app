import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteUser } from '../../actions';

class UsersDelete extends Component {

  componentWillMount() {
    this.props.deleteUser(this.props.match.params.id);
  }

  render() {
    return (
      <Redirect to='/users' />
    );
  }
}

export default connect(null, { deleteUser })(UsersDelete);
