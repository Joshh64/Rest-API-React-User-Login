import './App.css';
import Login from "./components/Login"
import Register from "./components/Register"
import ReadUsers from "./components/ReadUsers"
import { useState } from "react"

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <h1>My amazing app!</h1>

      <Register></Register>

      <Login newUser={setUser}></Login>

      {user
        ?
        <>
          <h2>Hello welcome {user} you have logged in</h2>
          <ReadUsers></ReadUsers>
        </>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
}

export default App;
