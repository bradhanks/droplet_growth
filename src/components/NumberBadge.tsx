import React from 'react';

interface NumberBadgeProps {
  number: number | string;
  size?: 'sm' | 'md' | 'lg';
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const NumberBadge: React.FC<NumberBadgeProps> = ({
  number,
  size = 'md',
  gradientFrom = '#6601e8',
  gradientTo = '#ac00d7',
  className = '',
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-20 h-20 text-[3.2rem]',
    lg: 'w-24 h-24 text-4xl',
  };

  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
      {/* Number element */}
      <div className="
        relative z-10
        w-full h-full
        flex items-center justify-center
        bg-white
        border-8 border-white
        rounded-full
        font-bold
        leading-none
      ">
        {number}
      </div>

      {/* Gradient overlay - using style for dynamic colors */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          mix-blend-screen
          bg-gradient-to-b
          rounded-full
        "
        style={{
          backgroundImage: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`
        }}
      />
    </div>
  );
};

export default NumberBadge;
