import React from "react";
import withRouter from "./withRouter";
import {
  ElementList,
  Button,
  Input,
  ElementLabel,
  Box,
  ErrorMessage,
} from "../styles/custom.styled";
import "../App.css";

type Props = {
  addExpenseHandler: any;
  router: any;
  user: any;
  state: any;
};
type State = {
  name: string;
  description: string;
  total: number;
  error: string;
};

export default withRouter(
  class AddExpense extends React.Component<Props, State> {
    state: State = {
      name: "",
      description: "",
      total: 0,
      error: "",
    };

    addExpense = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { name, description, total } = this.state;
      if (!name.trim() || !description.trim() || total <= 0) {
        this.setState({
          error: "Please fill all fields and use an amount greater than 0.",
        });
        return;
      }
      this.setState({ error: "" });
      const request = {
        userId: parseInt(this.props.router.params.userId),
        name: name.trim(),
        description: description.trim(),
        total,
      };
      this.props.addExpenseHandler(request);
      this.setState({ name: "", description: "", total: 0 });
    };

    render() {
      const userEmail =
        this.props.router.location.state?.email ??
        `User ${this.props.router.params.userId}`;
      return (
        <div className="App-container">
          <h3>Add expense</h3>
          <p
            style={{
              margin: "0 0 1em",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.95em",
            }}
          >
            Expenses for {userEmail}
          </p>
          <form onSubmit={this.addExpense}>
            <ElementList>
              <ElementLabel>Name</ElementLabel>
              <Input
                type="text"
                value={this.state.name}
                $hasError={!!this.state.error}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ name: event.target.value, error: "" })
                }
                aria-invalid={!!this.state.error}
              />
            </ElementList>
            <ElementList>
              <ElementLabel>Description</ElementLabel>
              <Input
                type="text"
                value={this.state.description}
                $hasError={!!this.state.error}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ description: event.target.value, error: "" })
                }
                aria-invalid={!!this.state.error}
              />
            </ElementList>
            <ElementList>
              <ElementLabel>Amount</ElementLabel>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={this.state.total}
                $hasError={!!this.state.error}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({
                    total: Number(event.target.value) || 0,
                    error: "",
                  })
                }
                aria-invalid={!!this.state.error}
              />
            </ElementList>
            {this.state.error && (
              <ErrorMessage>{this.state.error}</ErrorMessage>
            )}
            <Box>
              <Button type="submit">Add</Button>
            </Box>
          </form>
        </div>
      );
    }
  },
);
