import Image from 'next/image';

export default function Card ({ id, name, src, onSelect, isSelected, style }) {
    const handleClick = () => {
        onSelect(id);
    };

    return (
    <section
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
        className="rounded-2xl max-w-none hover:translatey(-30%)" />
    </section>
    );
};