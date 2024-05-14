import { useState } from "react";
import "./App.css";
import SignUp from "./Components/SignUpForm";
import Authenticate from "./Components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  return (
    <>
      <Authenticate
        setToken={setToken}
        token={token}
        username={username}
        setUsername={setUsername}
      />
      <SignUp
        setToken={setToken}
        token={token}
        username={username}
        setUsername={setUsername}
      />
    </>
  );
}

export default App;