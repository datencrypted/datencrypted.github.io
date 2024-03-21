const userModel = require("../models/userModel");

module.exports = (app) => {
  app.get("/usersleaderboard", (req, res) => {
    userModel
      .find()
      .then((users) => {
        //for each user in users, add a property called "total" which is the of unique id in the user's pc
        const usersWithTotal = users.map((user) => {
          const total = user.pc.reduce((acc, pokemon) => {
            if (!acc.includes(pokemon.id)) {
              acc.push(pokemon.id);
            }
            return acc;
          }, []).length;
          user.total = total;
          return user;
        });
        //sort users by total
        const sortedUsers = usersWithTotal.sort((a, b) => b.total - a.total);
        //send sorted users to frontend with message
        const message = "Trainers leaderboard";
        res.json({ sortedUsers, message });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
