import { useState } from 'react';

export const App = () => {
  const emojis = [
    "😀", "😀",
    "🚀", "🚀",
    "🔥", "🔥",
    "💎", "💎",
    "🍕", "🍕",
    "🎮", "🎮",
    "⚡", "⚡",
    "🦄", "🦄"
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  const [cards, setCards] = useState(shuffleArray(emojis));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const handleCardClick = (index) => {
    if(isLocked) return;
    if(flippedCards.includes(index)) return;
    if(matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsLocked(true);
      const [firstIndex, secondIndex] = newFlippedCards;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setFlippedCards([]);
        setIsLocked(false);
      }, 1000);
    }
  }

  return (
    <main className="App">
      <h1>Memory Game</h1>

      <div className="cards">
        {cards.map((emoji, index) => {
          const isFlipped = flippedCards.includes(index);
          const isMatched = matchedCards.includes(index);

          return (
            <div key={index} className="card" onClick={() => handleCardClick(index)}>
              {isFlipped || isMatched ? emoji : "❔"}
            </div>
          );
        })}
      </div>
      
      <button className="reset-button" onClick={() => window.location.reload()}>Reset Game</button>
    </main>
  )
}
