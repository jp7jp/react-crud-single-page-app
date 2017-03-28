import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import UsersForm from './form';

class UsersNew extends Component {

  state = {
    finished: false,
    newUser: null
  }

  handleSubmit(values) {
    this.props.createUser(values).then((res) => {
      if (!this.props.userError) {
        this.setState({
          finished: true,
          newUser: res.payload.data,
        });
      }
    });
  }

  render() {
    console.log(this.state.newUser);
    return (
      <UsersForm
        header='Create User'
        cancelAndRedirectLink={
          this.state.newUser ?
            `/users/${this.state.newUser._id}`
          :
            '/users'
        }
        onSubmit={this.handleSubmit.bind(this)}
        userError={this.props.userError}
        finished={this.state.finished}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    newUser: state.users.newUser,
    userError: state.users.error
  }
}

export default connect(mapStateToProps, { createUser })(UsersNew);
