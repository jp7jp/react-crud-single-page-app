import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions';

class UsersIndex extends Component {

  state = {
    loading: true
  }

  componentWillMount() {
    this.props.getAllUsers().then(() => {
      this.setState({
        loading: false
      })
    });
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
    if(this.state.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="well">
        <div className="clearfix">
          <Link to='/users/new' className="pull-right btn btn-primary">Create User</Link>
          <h3>List Users</h3>
        </div>
        {
          (this.props.users.length) ?
            <ul className="list-group">
              { this.props.users.map(user => this.renderRow(user)) }
            </ul>
          :
            <div>No users on database</div>
        }
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
