import "./styles.css";
import { useState } from "react";

const action = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"];

export default function App() {
  const [genre, setGenre] = useState("action");

  return (
    <div className="App">
      <div
        className="img"
        style={{
          margin: "0px",
          padding: "0px",
          backgroundImage: `url(/src/${genre}/a1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "70% 100%",
          backgroundPosition: "center"
        }}
      >
        <div className="blur">
          <h1 className="header">The best movie recommendations</h1>

          <hr />

          <div className="btns">
            <button
              className="btn"
              style={{
                color: genre === "action" ? "green" : "black",
                fontSize: genre === "action" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("action")}
            >
              Action
            </button>
            <button
              className="btn"
              style={{
                color: genre === "biography" ? "green" : "black",
                fontSize: genre === "biography" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("biography")}
            >
              Biograpgy
            </button>
            <button
              className="btn"
              style={{
                color: genre === "sifi" ? "green" : "black",
                fontSize: genre === "sifi" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("sifi")}
            >
              Sci-Fi
            </button>
            <button
              className="btn"
              style={{
                color: genre === "animated" ? "green" : "black",
                fontSize: genre === "animated" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("animated")}
            >
              Animated
            </button>
          </div>
          <hr />
          <div className="mov-grid">
            {action.map((item) => {
              return (
                <div key={item} className="mov-tile">
                  <img
                    className="mov-img"
                    key={item}
                    src={`./src/${genre}/${item}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>

          <h2 className="header">Best of each genre</h2>
          <div className="mov-grid">
            <div className="mov-tile">
              <h3>Action</h3>
              <img className="mov-img" src="./src/action/a2.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Biography</h3>
              <img className="mov-img" src="./src/biography/a1.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Sci-Fi</h3>
              <img className="mov-img" src="./src/sifi/a1.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Animated</h3>
              <img className="mov-img" src="./src/animated/a2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
