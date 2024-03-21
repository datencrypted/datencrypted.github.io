import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.onload = function () {
  let konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let answer = false;
  let secretCode = [];
  document.getElementsByTagName("body")[0].onkeyup = function (e) {
    var ev = e;
    secretCode.push(ev.key);
    let j = 0;

    for (let i = 0; i < secretCode.length; i++) {
      if (secretCode[i] === konamiCode[i]) {
        j++;
      } else {
        (function () {
          secretCode.splice(0, 10);
        })();
        j = 0;
      }
    }
    console.log(j + " strokes are good");
    if (j === 10) {
      answer = true;
    }
    if (answer) {
      console.log("KONAMI CODE !!!!");
      (function () {
        secretCode.splice(0, 10);
        answer = false;
      })();
      axios
        .get("https://bryanhuvelin.fr/cheat", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data.message);
          window.location.replace("https://www.bryanhuvelin.fr");
        })
        .catch((err) => console.log(err));
    }
  };
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
