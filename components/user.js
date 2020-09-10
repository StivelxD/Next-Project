const Users = (props) => {
  console.log(props);
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <div>
            <h5>{user.first_name}</h5>
            <p>Email: {user.email}</p>
          </div>
          <img src="{user.avatar}" alt="{user.first_name + user.last_name}" />
        </li>
      ))}
    </ul>
  );
};

export default Users;
