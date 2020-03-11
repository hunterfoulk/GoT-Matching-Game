import React, { useState, useEffect } from "react";
import Card from "./card";

const Board = props => {
  const [cards, setCards] = useState(props.cards);
  const [turns, setTurns] = useState([]); //turn state array
  const [matched, setMatched] = useState([]); //matched cards state array

  const handleClick = card => {
    //if turn is capped(2) then reset the turn after 1 second.
    if (turnsCapped(turns) || foundMatchedCard(turns, card)) return;
    //clone "turns" array and add the specific card clicked onto it aswell.
    //then set our "turns" array to our "newTurns" clone with our specific card object in it.
    const newTurns = [...turns, card];
    setTurns(newTurns);

    //check "newTurns" array for a matched card, if a match is found add that specific card img ID to our "matched" array
    const matchedCard = validateTurns(newTurns);
    if (matchedCard) {
      setMatched([...matched, newTurns[0].type]);
    }
    if (turnsCapped(newTurns)) {
      resetTurns(1000);
    }
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
  };

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped: turns.find(c => c.id === card.id) || matched.includes(card.type)
    }));
    setCards(newCards);
  }, [turns, matched]);

  return (
    <>
      <div className="board">
        {cards.map(card => (
          <Card {...card} onClick={() => handleClick(card)} key={card.id} />
        ))}
      </div>
      <button onClick={restartGame}>restart</button>
    </>
  );
};
export default Board;
