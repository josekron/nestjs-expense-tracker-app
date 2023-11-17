import React from "react";
import "../App.css";
import { Box, Button, Input } from "../styles/custom.styled";

type Props = {
  createUserHandler: any;
};
type State = {
  email: string;
};

class CreateUser extends React.Component<Props, State> {
  state: State = {
    email: "",
  };
  createUser = (event: any) => {
    event.preventDefault();
    if (this.state.email === "") {
      alert("Please introduce an email");
      return;
    }

    console.log(`Email: ${this.state.email}`);
    this.props.createUserHandler(this.state);
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="App-container">
        <h3>Introduce an email</h3>
        <form onSubmit={this.createUser}>
          <Box>
            <Input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={(event: any) =>
                this.setState({ email: event.target.value })
              }
            />
          </Box>
          <Box>
            <Button>Create User</Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default CreateUser;
