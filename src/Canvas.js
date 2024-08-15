// src/Canvas.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const addCard = () => {
    setCards([
      ...cards,
      { id: cards.length, text: 'This is some dummy text to show. Show more', detailedText: 'This is the detailed text of the card.', x: 0, y: 0 }
    ]);
  };

  const handleShowMore = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="canvas-container">
      <button onClick={addCard} className="btn btn-primary my-3">Add Card</button>
      <div className="canvas">
        {cards.map((card, index) => (
          <Draggable key={index} defaultPosition={{ x: card.x, y: card.y }}>
            <ResizableBox className="box" width={200} height={100} minConstraints={[100, 50]} maxConstraints={[400, 200]}>
              <div className="card">
                {card.text.slice(0, 20)}...
                <button onClick={() => handleShowMore(card)} className="btn btn-link p-0">Show More</button>
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Card Details</h3>
            <p>{selectedCard.detailedText}</p>
            <button onClick={() => setSelectedCard(null)} className="btn btn-secondary">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
