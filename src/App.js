import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          >
          </Route>
          
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
