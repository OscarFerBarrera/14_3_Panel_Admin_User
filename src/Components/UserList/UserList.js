
import "./UserList.css";
import React from "react";
import { FormattedMessage} from "react-intl";


const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  // Estado para almacenar usuarios
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {

    // Llamada a la API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });
      
  }, [userList]);

  return (
    <div className="user-list">
      <table className="user-list__table">
        <thead>
          <tr>
            <th>ID</th>
            <th><FormattedMessage id='users:name' /></th>
            <th><FormattedMessage id='users:username' /></th>
            <th><FormattedMessage id='users:email' /></th>
            <th><FormattedMessage id='users:website' /></th>
          </tr>
        </thead>
        <tbody>

          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default UserList;
