import "./App.css";

function App() {
  // const userData = (
  //   <div>
  //   <h2>John Doe</h2>
  // <div>useremail@gmail.com</div>
  //  </div>
  // );

  return (
    <div>
      <UserData />
      <UserLink />
    </div>
  );
}

//userData component
const UserData = () => {
  return (
    <div>
      <h2>John Doe</h2>
      <div>useremail@gmail.com</div>
    </div>
  );
};

//userLink component
const UserLink = () => {
  return <div><a href="https://ejs.co/">click me</a></div>;
};

export default App;
