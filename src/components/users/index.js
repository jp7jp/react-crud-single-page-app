import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions';

class UsersIndex extends Component {

  componentWillMount() {
    this.props.getAllUsers();
  }

  renderRow(user) {
    return (
      <li className={ (this.props.user && (user._id === this.props.user._id)) ? 'list-group-item active' : 'list-group-item'} key={user._id}>
        <Link to={`/users/${user._id}`}>{user.email}</Link>
      </li>
    )
  }

  render() {
    if(this.props.error) {
      return <div>{this.props.error}</div>
    }
    if(!this.props.users.length) {
      return <div>Loading...</div>
    }
    return (
      <div className="well">
        <div className="clearfix">
          <Link to='/users/new' className="pull-right btn btn-primary">Create User</Link>
          <h3>List Users</h3>
        </div>
        <ul className="list-group">
          { this.props.users.map(user => this.renderRow(user)) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    users: state.users.all,
    error: state.users.error
  }
}

export default connect(mapStateToProps, { getAllUsers })(UsersIndex);
