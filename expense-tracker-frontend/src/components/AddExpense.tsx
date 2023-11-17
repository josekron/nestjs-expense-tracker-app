import React from "react";
import withRouter from "./withRouter";
import {
  ElementList,
  Button,
  Input,
  ElementLabel,
  Box,
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
};

export default withRouter(
  class AddExpense extends React.Component<Props, State> {
    state: State = {
      name: "",
      description: "",
      total: 0,
    };

    addExpense = async (event: any) => {
      event.preventDefault();
      if (
        this.state.name === "" ||
        this.state.description === "" ||
        this.state.total <= 0
      ) {
        alert("Please fill all the fields");
        return;
      }

      const request = {
        userId: parseInt(this.props.router.params.userId),
        ...this.state,
      };
      console.log("input: ", request);
      this.props.addExpenseHandler(request);
      this.setState({ name: "", description: "", total: 0 });
    };

    render() {
      return (
        <div className="App-container">
          <h3>
            {/* Hey {this.props.router.params.userId}, introduce your expense: */}
            Hey {this.props.router.location.state.email}, introduce your
            expense:
          </h3>
          <form onSubmit={this.addExpense}>
            <ElementList>
              <ElementLabel>Name</ElementLabel>
              <Input
                type="text"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </ElementList>
            <ElementList>
              <ElementLabel>Description</ElementLabel>
              <Input
                type="text"
                value={this.state.description}
                onChange={(event) =>
                  this.setState({ description: event.target.value })
                }
              />
            </ElementList>
            <ElementList>
              <ElementLabel>Total</ElementLabel>
              <Input
                type="number"
                value={this.state.total}
                onChange={(event) =>
                  this.setState({ total: Number(event.target.value) })
                }
              />
            </ElementList>
            <Box>
              <Button>Add</Button>
            </Box>
          </form>
        </div>
      );
    }
  }
);
