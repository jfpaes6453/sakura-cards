// Card.jsx
import Image from 'next/image';

const Card = ({ id, name, src, onSelect, isSelected, style }) => {
    const handleClick = () => {
        onSelect(id);
    };

    return (
    <div
        className={`absolute ${isSelected ? 'selected' : ''}`}
        onClick={handleClick}
        style={{
            ...style,
            
        }}
    >
        
        <Image 
        src={src} 
        width={170} 
        height={300} 
        alt={name} 
        className="w-aut h-auto object-cover rounded-2xl max-w-none shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:translatey(-30%) hover:scale-110" />
    </div>
    );
};

export default Card;
