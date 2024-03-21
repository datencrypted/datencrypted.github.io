import React from "react";

const Home = ({ username }) => {
  return (
    <div className="home">
      {username ? (
        <h1>Welcome {username}</h1>
      ) : (
        <h1>Welcome to the home page</h1>
      )}
    </div>
  );
};

export default Home;
