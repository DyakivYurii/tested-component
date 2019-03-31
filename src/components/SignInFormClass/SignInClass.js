import React from 'react';

export default class SignInClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userPassword: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit()}>
        <label htmlFor="userName">
          <p>User name:</p>
          <input
            id="userName"
            type="text"
            value={this.state.userName}
            name="userName"
            placeholder="Name"
            onChange={this.handleChangeInput()}
          />
        </label>
        <label htmlFor="userPassword">
          <p>User password:</p>
          <input
            id="userPassword"
            type="password"
            value={this.state.userPassword}
            name="userPassword"
            placeholder="Password"
            onChange={this.handleChangeInput()}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleChangeInput = () => (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = () => (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
  };
}
