import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    icon,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden group active:scale-95 cursor-pointer";

    const variants = {
        primary: "bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-0.5",
        secondary: "bg-primary-50 text-primary-700 hover:bg-primary-100",
        outline: "border-2 border-neutral-200 text-neutral-600 hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50/50",
        ghost: "text-neutral-600 hover:text-primary-600 hover:bg-neutral-100",
    };

    const sizes = {
        sm: "text-sm px-4 py-2 gap-2",
        md: "text-base px-6 py-3 gap-2.5",
        lg: "text-lg px-8 py-4 gap-3",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="transition-transform group-hover:translate-x-1 duration-300">{icon}</span>}
            </span>

            {/* Subtle shine effect on hover for primary buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            )}
        </button>
    );
};

export default Button;
