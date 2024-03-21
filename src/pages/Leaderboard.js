import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState();
  useEffect(() => {
    axios
      .get("https://bryanhuvelin.fr/usersleaderboard")
      .then((res) => {
        setLeaderboard(res.data.sortedUsers);
      })
      .catch((err) => console.log(err));
  }, []);
  return leaderboard ? (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table className="Leaderboard_table">
        <thead>
          <tr>
            <th>Trainer</th>
            <th>Pokemons catched</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.pc.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Leaderboard;
