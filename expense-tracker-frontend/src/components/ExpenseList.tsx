import { Button, TableElement, EmptyState } from "../styles/custom.styled";
import "../App.css";

function formatCurrency(value: number | string): string {
  const n = typeof value === "string" ? parseFloat(value) : value;
  if (Number.isNaN(n)) return "0.00";
  return n.toFixed(2);
}

const ExpenseList = (props: any) => {
  const deleteExpenseHandler = (expenseId: number) => {
    if (window.confirm("Delete this expense?")) {
      props.deleteExpenseHandler(expenseId);
    }
  };

  const expenseList = props.expenses?.expenses ?? [];
  const total = props.expenses?.total ?? 0;
  const renderExpenseList = expenseList.map((expense: any) => (
    <tr key={expense.expenseId}>
      <td>{expense.name}</td>
      <td>{expense.description}</td>
      <td>{formatCurrency(expense.total)}</td>
      <td>
        <Button onClick={() => deleteExpenseHandler(expense.expenseId)}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className="App-container">
      <h3>Total: {formatCurrency(total)}</h3>
      <TableElement>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderExpenseList.length ? (
            renderExpenseList
          ) : (
            <tr>
              <td colSpan={4}>
                <EmptyState>No expenses yet. Add one above.</EmptyState>
              </td>
            </tr>
          )}
        </tbody>
      </TableElement>
    </div>
  );
};

export default ExpenseList;
