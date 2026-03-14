import React from "react";
import "../App.css";
import { Box, Button, Input, ErrorMessage } from "../styles/custom.styled";

type Props = {
  createUserHandler: any;
};
type State = {
  email: string;
  error: string;
};

class CreateUser extends React.Component<Props, State> {
  state: State = {
    email: "",
    error: "",
  };

  createUser = (event: any) => {
    event.preventDefault();
    const email = this.state.email.trim();
    if (email === "") {
      this.setState({ error: "Please enter an email." });
      return;
    }
    this.setState({ error: "" });
    this.props.createUserHandler({ email });
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="App-container">
        <h3>Create a user</h3>
        <form onSubmit={this.createUser}>
          <Box>
            <label htmlFor="create-user-email" className="sr-only">
              Email
            </label>
            <Input
              id="create-user-email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              $hasError={!!this.state.error}
              onChange={(event: any) =>
                this.setState({ email: event.target.value, error: "" })
              }
              aria-invalid={!!this.state.error}
              aria-describedby={this.state.error ? "create-user-error" : undefined}
            />
          </Box>
          {this.state.error && (
            <ErrorMessage id="create-user-error">{this.state.error}</ErrorMessage>
          )}
          <Box>
            <Button type="submit">Create User</Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default CreateUser;
