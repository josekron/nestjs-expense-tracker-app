import { Link } from "react-router-dom";
import { Button, TableElement } from "../styles/custom.styled";
import "../App.css";

const UserList = (props: any) => {
  const selectUserHandler = (userId: number) => {
    console.log(`user selected: ${userId}`);
    props.getSelectedUserId(userId);
  };

  const renderUserList = props.users.map((user: any) => {
    return (
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
    );
  });

  if (renderUserList.length) {
    return (
      <div className="App-container">
        <TableElement>
          <thead>
            <tr>
              <th scope="col">Existing Users</th>
            </tr>
          </thead>
          <tbody>{renderUserList}</tbody>
        </TableElement>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UserList;
