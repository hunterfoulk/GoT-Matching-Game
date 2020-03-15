import React, { useState, useEffect } from "react";
import Card from "./card";
import _ from "lodash";

const Board = props => {
  const [cards, setCards] = useState(props.cards);
  const [turns, setTurns] = useState([]); //turn state array
  const [matched, setMatched] = useState([]); //matched cards state array
  const [modal, setModal] = useState(false);

  const handleClick = card => {
    //if turn is capped(2) then reset the turn after 1 second.
    if (turnsCapped(turns) || foundMatchedCard(turns, card))
      //clone "turns" array and add the specific card clicked into it aswell.
      //then set our "turns" array to our "newTurns" clone with our specific card object in it.
      return;
    const newTurns = [...turns, card];
    setTurns(newTurns);

    //check "newTurns" array for a matched card, if a match is found add that specific card img ID to our "matched" array
    const matchedCard = validateTurns(newTurns);
    if (matchedCard) {
      setMatched([...matched, newTurns[0].type]);
      console.log("matched array", matched);
    }
    if (turnsCapped(newTurns)) {
      resetTurns(1000);
    }

    //functions
    function validateTurns(turns) {
      return turns.length === 2 && turns[0].type === turns[1].type;
    }

    function foundMatchedCard(turns, card) {
      return turns.length === 1 && turns[0].id === card.id;
    }
    function turnsCapped(turns) {
      return turns.length === 2;
    }

    function resetTurns(time) {
      setTimeout(() => {
        setTurns([]);
      }, time);
    }
  };

  const restartGame = () => {
    setMatched([]);
    setCards(_.shuffle(cards));
    setModal(false);
  };

  let count = matched.length;

  useEffect(() => {
    if (matched.length === 12) {
      setModal(true);
    }
  }, [matched]);

  useEffect(() => {
    setCards(prevCards =>
      prevCards.map(card => ({
        ...card,
        flipped:
          turns.find(c => c.id === card.id) || matched.includes(card.type)
      }))
    );
  }, [turns, matched]);

  return (
    <>
      <div className="board">
        <div className="text">
          <h1>Match the cards</h1>
        </div>
        <div className="count-container">
          <div className="count-circle"> {count}</div>
        </div>
        {modal && (
          <div className="modal">
            <h1>You found all the matches!</h1>
            <button onClick={restartGame}>Play Again!</button>
          </div>
        )}
        <div className="cards-container">
          {cards.map(card => (
            <Card {...card} onClick={() => handleClick(card)} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Board;
