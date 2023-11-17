import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import api from "./api/expensetracker";
import "./App.css";
import { Button } from "./styles/custom.styled";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Pagination from "./components/Pagination";

function App() {
  // Data:
  const [users, setUsers] = useState<any[]>([]);
  let selectedUser: any;
  const [expenses, setExpenses] = useState<any>({ total: 0, expenses: [] });

  // Pagination Users:
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastUserRecord = currentPage * recordsPerPage;
  const indexOfFirstUserRecord = indexOfLastUserRecord - recordsPerPage;
  const currentUserRecords = users.slice(
    indexOfFirstUserRecord,
    indexOfLastUserRecord
  );
  const nUserPages = Math.ceil(users.length / recordsPerPage);

  // Pagination Expenses:
  const [currentExpensePage, setCurrentExpensePage] = useState(1);
  const [expenseRecordsPerPage] = useState(5);

  const indexOfLastExpenseRecord = currentExpensePage * expenseRecordsPerPage;
  const indexOfFirstExpenseRecord =
    indexOfLastExpenseRecord - expenseRecordsPerPage;
  const currentExpenseRecords = expenses.expenses.slice(
    indexOfFirstExpenseRecord,
    indexOfLastExpenseRecord
  );
  const nExpensePages = Math.ceil(
    expenses.expenses.length / expenseRecordsPerPage
  );

  // Users:

  const createUserHandler = async (user: any) => {
    const request = {
      email: user.email,
    };

    const response: any = await api.post("/user", request);

    setUsers([...users, response.data]);
  };

  const selectUserHandler = async (userId: number) => {
    const filteredUser = users.find((user) => user.userId === userId);
    if (filteredUser) {
      console.log(filteredUser);
      selectedUser = filteredUser;
    }
    console.log("user selected: ", selectedUser);

    const response = await getExpenses(selectedUser.userId);
    if (response.data) {
      setExpenses({
        total: response.data.total,
        expenses: response.data.expenses,
      });
    }
  };

  const retrieveUsers = async () => {
    const response = await api.get("/user/list");
    return response;
  };

  // Expenses:

  const addExpenseHandler = async (expense: any) => {
    const response = await api.post("/expense", expense);
    console.log("response: ", response);

    if (response.data) {
      setExpenses({
        total:
          ((parseFloat(expenses.total) + parseFloat(response.data.total)) *
            100) /
          100,
        expenses: [...expenses.expenses, response.data],
      });
    }
  };

  const deleteExpenseHandler = async (expenseId: number) => {
    const response = await api.delete("/expense/" + expenseId);

    if (response.data) {
      setExpenses({
        total:
          ((parseFloat(expenses.total) - parseFloat(response.data.total)) *
            100) /
          100,
        expenses: expenses.expenses.filter(
          (expense: any) => expense.expenseId !== expenseId
        ),
      });
    }
  };

  const getExpenses = async (userId: number) => {
    const response = await api.get("/expense/user/" + userId);
    return response;
  };

  // Update view data:

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const allUsers = await retrieveUsers();
        if (allUsers.data) {
          setUsers(allUsers.data);
        }
      } catch (error) {
        alert("There was an error while retrieving the data");
        setUsers([]);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div>
      <div className="App-header">Expense Tracker</div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateUser createUserHandler={createUserHandler} />
                <UserList
                  users={currentUserRecords}
                  getSelectedUserId={selectUserHandler}
                />
                <Pagination
                  nPages={nUserPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            }
          ></Route>
          <Route
            path="/expenses/:userId"
            element={
              <>
                <GoBack></GoBack>
                <AddExpense addExpenseHandler={addExpenseHandler} />
                <ExpenseList
                  expenses={{
                    expenses: currentExpenseRecords,
                    total: expenses.total,
                  }}
                  deleteExpenseHandler={deleteExpenseHandler}
                />
                <Pagination
                  nPages={nExpensePages}
                  currentPage={currentExpensePage}
                  setCurrentPage={setCurrentExpensePage}
                />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const GoBack = () => {
  let navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="App-back">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  );
};

export default App;
