function UserProfile(props) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {props.username}</p>
    </div>
  );
}

function Icon(props) {
  return (
    <div>
      <UserProfile username={props.username} />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <h2>Header Section</h2>
      <Icon username={props.username} />
    </div>
  );
}

function App() {
  const name = "Raj";

  return (
    <div>
      <h1>My App</h1>
      <Header username={name} />
    </div>
  );
}

