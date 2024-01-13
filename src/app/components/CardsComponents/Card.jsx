// Card.jsx
import Image from 'next/image';

const Card = ({ id, name, src, onSelect, isSelected, style }) => {
    const handleClick = () => {
        onSelect(id);
    };

    return (
    <div
        className={`card ${isSelected ? 'selected' : ''}`}
        onClick={handleClick}
        style={{
            ...style,
            
        }}
    >
        
        <Image 
        src={src} 
        width={150} 
        height={250} 
        alt={name} 
        className="rounded-2xl hover:translatey(-30%) max-w-none " />
    </div>
    );
};

export default Card;
