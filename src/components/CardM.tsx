import { useEffect, useState } from 'react';
import dorso from '../../public/assets/cards/Dorso.webp'
import ReactCardFlip from 'react-card-flip';
import type CardProps from '../config/CardProps';
export default function Card({ cardName, flipCards, img, index, unFlippedCards, disabledCards }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  const handleClick = () => {
    if (hasEvent && flipCards) {
    flipCards(cardName, index!)
      setIsFlipped(!isFlipped);
    }
  };

  useEffect(() => {
    if (unFlippedCards?.includes(index!)) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 700);
    }
  }, [unFlippedCards]);

  useEffect(() => { 
    if (disabledCards?.includes(index!)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <img src={dorso} width={107} className="m-1" alt="" onClick={handleClick} />
      <img src={`/assets/cards/${img}`} width={107} className="m-1" alt="" onClick={handleClick} />
    </ReactCardFlip>
  );
}