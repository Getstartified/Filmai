interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = ''
}: ButtonProps) {
    const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300';

    const variantStyles = {
        primary: 'bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20',
        secondary: 'border-2 border-white text-white hover:bg-white hover:text-black'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
