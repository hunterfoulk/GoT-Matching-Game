// export default function initializeDeck() {
//   deck = 16;

//   let cards = [];

//   for (let i = 0; i < deck.length; i++) {
//     cards.push({
//       id: i,
//       name: `card${i}`,
//       img: `cardImage${i}`
//     });
//     cards.push({
//       id: i,
//       name: `card${i}`,
//       img: `cardImage${i}`
//     });

//   }

//   return cards.reduce((newArr, name) => {
//     newArr.push({
//       id: cards.id++,
//       name
//     });
//     newArr.push({
//       id: cards.id++,
//       name
//     });
//     return shuffle(newArr);
//   }, []);
// }

// function shuffle(array) {
//   const arrayCopy = [...array];

//   for (let i = 0; i < array.length - 1; i++) {
//     let randomIndex = Math.floor(Math.random() * (i + 1));
//     let temp = arrayCopy[i];
//     arrayCopy[i] = arrayCopy[randomIndex];
//     arrayCopy[randomIndex] = temp;
//   }
//   return arrayCopy;
// }
