import "./App.css";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AddItem from "./Components/Item/add";
import EditItem from "./Components/Item/edit";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [userstate, setUserState] = useState(null);

  useEffect(() => { 

    const user = sessionStorage.getItem('user');
    if (user != null)
      setUserState(user);

  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate != null ?
                <Home
                  setUserState={setUserState}
                  name={userstate.name}
                />
              :
              <Login setUserState={setUserState}/>
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/item/add" element={<AddItem />}></Route>
          <Route path="/item/edit/:id" element={<EditItem />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
