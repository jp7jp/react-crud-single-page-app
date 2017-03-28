import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class UsersForm extends Component {

  render() {
    const { header, cancelAndRedirectLink, handleSubmit, pristine, submitting, userError, finished } = this.props;

    if (finished) {
      return <Redirect to={cancelAndRedirectLink} />
    }

    return (
      <div className="well">
        <div className="clearfix">
          <Link to={cancelAndRedirectLink} className="pull-right btn btn-default">Cancel / Go Back</Link>
          <h3>{header}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={ userError ? 'alert alert-danger' : 'alert alert-info' }>Error: {userError || 'No errors'}</div>
          <div className="form-group">
            <label>Email:</label>
            <Field name="email" component="input" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <Field name="password" component="input" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(reduxForm({
  form: 'user',
  enableReinitialize: true
})(UsersForm));
