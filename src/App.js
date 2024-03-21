import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Encounter, Liste, Captured, Erreur404, Leaderboard } from "./pages";
import Protected from "./features/Protected";
import {
  Logo,
  Navigation,
  Footer,
  MessageBox,
  Profile,
  Log,
  Register,
  Home,
} from "./components";

const App = () => {
  //authentification
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const handleLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    setToken(token);
    setUser(user);
    window.location = "/";
  };
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setToken(null);
    setUser(null);
    window.location = "/";
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      setToken(token);
      setUser(user);
    }
  }, []);

  //messagebox
  const [message, setMessage] = useState([]);

  return (
    <BrowserRouter>
      <Logo />
      <Navigation handleLogout={handleLogout} token={token} />
      <MessageBox
        message={message[0]}
        messageType={message[1]}
        setMessage={setMessage}
      ></MessageBox>
      <Routes>
        <Route path="/" element={<Home username={user} />} />

        {/* PROTECTED ROUTES */}

        <Route
          path="/encounter"
          element={
            <Protected>
              <Encounter setMessage={setMessage} username={user} />
            </Protected>
          }
        />
        <Route
          path="/list"
          element={
            <Protected token={token}>
              <Liste setMessage={setMessage} username={user} />
            </Protected>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/captured"
          element={
            <Protected token={token}>
              <Captured setMessage={setMessage} username={user} />
            </Protected>
          }
        />

        {/* PUBLIC ROUTES */}
        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route
          path="/login"
          element={<Log handleLogin={handleLogin} setMessage={setMessage} />}
        />

        <Route
          path="/register"
          element={
            <Register setMessage={setMessage} handleLogin={handleLogin} />
          }
        />
        {/* path="*" fonctionne si l'URL ne coresponds pas à un des routes définies */}
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
