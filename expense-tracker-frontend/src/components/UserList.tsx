import { Link } from "react-router-dom";
import { Button, TableElement, EmptyState } from "../styles/custom.styled";
import "../App.css";

const UserList = (props: any) => {
  const selectUserHandler = (userId: number) => {
    props.getSelectedUserId(userId);
  };

  const users = props.users ?? [];
  const renderUserList = users.map((user: any) => (
    <tr key={user.userId}>
      <td>{user.email}</td>
      <td>
        <Link to={"/expenses/" + user.userId} state={{ email: user.email }}>
          <Button onClick={() => selectUserHandler(user.userId)}>
            Select
          </Button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="App-container">
      <TableElement>
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderUserList.length ? (
            renderUserList
          ) : (
            <tr>
              <td colSpan={2}>
                <EmptyState>No users yet. Create one above.</EmptyState>
              </td>
            </tr>
          )}
        </tbody>
      </TableElement>
    </div>
  );
};

export default UserList;
