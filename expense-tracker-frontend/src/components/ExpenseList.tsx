import { Button, TableElement } from "../styles/custom.styled";
import "../App.css";

const ExpenseList = (props: any) => {
  const deleteExpenseHandler = (expenseId: number) => {
    props.deleteExpenseHandler(expenseId);
  };

  const renderExpenseList = props.expenses.expenses.map((expense: any) => {
    return (
      <tr key={expense.expenseId}>
        <td>{expense.name}</td>
        <td>{expense.description}</td>
        <td>{expense.total}</td>
        <td>
          <Button onClick={() => deleteExpenseHandler(expense.expenseId)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  if (renderExpenseList.length) {
    return (
      <div className="App-container">
        <h3>Total: {props.expenses.total} </h3>
        <TableElement>
          <thead>
            <tr>
              <th scope="col">Expenses</th>
            </tr>
          </thead>
          <tbody>{renderExpenseList}</tbody>
        </TableElement>
      </div>
    );
  }
};

export default ExpenseList;
