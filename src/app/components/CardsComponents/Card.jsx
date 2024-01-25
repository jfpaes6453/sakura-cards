import Image from 'next/image';
import { useState } from 'react';

const Card = ({ id, name, backImage, frontImage, onSelect, isSelected, style }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    onSelect(id)
    setIsFlipped(!isFlipped)
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <>
      <div
        className={`absolute ${isSelected ? 'selected' : ''}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...style,
          width: '135px',
          height: '300px',
          perspective: '1000px', 
        }}
      >
        <div
          className="flip-card-inner"
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'transform 0.8s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front of the card */}
          <div className="flip-card-front">
            <Image
              src={isFlipped ? frontImage : backImage}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl max-w-none shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform contrast-75 saturate-75 brightness-100 grayscale-2"
            />
          </div>

          {/* Back of the card */}
          <div className="flip-card-back" style={{ transform: 'rotateY(180deg)' }}>
            <Image
              src={isFlipped ? frontImage : backImage}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl max-w-none shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform contrast-75 saturate-75 brightness-100 grayscale-2"
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      
    </>
  );
};

export default Card;
