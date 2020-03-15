import React, { useState, useEffect } from "react";
import "./App.css";
import _ from "lodash";
import Board from "./components/board";
import FrontLogo from "./images/frontpic.png";
import backImg0 from "./images/backImage0.PNG";
import backImg1 from "./images/backImage1.PNG";
import backImg2 from "./images/backImage2.PNG";
import backImg3 from "./images/backImage3.PNG";
import backImg4 from "./images/backImage4.PNG";
import backImg5 from "./images/backImage5.PNG";
import backImg6 from "./images/backImage6.PNG";
import backImg7 from "./images/backImage7.PNG";
import backImg8 from "./images/backImage8.PNG";
import backImg9 from "./images/backImage9.PNG";
import backImg10 from "./images/backImage10.PNG";
import backImg11 from "./images/backImage11.PNG";

function App() {
  const cards = gameCards();

  return (
    <>
      <div className="App">
        <Board cards={cards} />
      </div>
    </>
  );
}

export default App;

function gameCards() {
  let id = 0;
  const images = {
    backImg0,
    backImg1,
    backImg2,
    backImg3,
    backImg4,
    backImg5,
    backImg6,
    backImg7,
    backImg8,
    backImg9,
    backImg10,
    backImg11
  };
  const cards = Object.keys(images).reduce((arr, i) => {
    console.log(i);
    const getCards = () => ({
      id: id++,
      type: i,
      frontImg: FrontLogo,
      backImg: images[i],
      flipped: false
    });

    return [...arr, getCards(), getCards()];
  }, []);
  return _.shuffle(cards);
}
