import Image from 'next/image';

export default function Card({ id, name, src, onSelect, isSelected, style }) {
    const handleClick = () => {
        onSelect(id);
    };

    return (
        <div
            className={`absolute ${isSelected ? 'selected' : ''}`}
            onClick={handleClick}
            style={{
                ...style,
                width: '115px',
                height: '159.55px',
            }}
        >
            <Image
                src={src}
                fill
                alt={name}
                className="rounded-2xl max-w-none shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-(-30%) hover:scale-110" />
        </div>
    );
};