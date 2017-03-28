import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../actions';

class UsersShow extends Component {

  componentWillMount() {
    this.props.getUser(this.props.match.params.id);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.user || (this.props.user._id !== nextProps.match.params.id)) {
      this.props.getUser(nextProps.match.params.id);
    }
  }

  render() {
    const { user, error, match } = this.props;

    if(error) {
      return <div>{error}</div>
    }
    if(!user) {
      return <div>Loading...</div>
    }
    return (
      <div id="user-show" className="well">

        <div className="clearfix">
          <div className="btn-group pull-right">
            <Link to={`/users/${user._id}/edit`} className="btn btn-primary">Edit</Link>
            <Link to={`/users/${user._id}/delete`} className="btn btn-danger">Remove</Link>
          </div>
          <h3 className="pull-left">Show User</h3>
        </div>

        <dl key={match.params.id}>
          <dt>Email:</dt>
          <dd>{ user.email }</dd>
          <dt>Password:</dt>
          <dd>{ user.password }</dd>
        </dl>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    error: state.users.error
  }
}

export default connect(mapStateToProps, { getUser })(UsersShow);
