import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'info' | 'inProgress' |'planned';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  const variantClasses = {
    default:
      'bg-primary text-primary-foreground border-transparent hover:bg-primary/80',
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
    destructive:
      'bg-destructive text-destructive-foreground border-transparent hover:bg-destructive/80',
    outline: 'text-foreground border-border',
    success:
      'bg-green-500/20 bg-green-600 dark:text-white border-green-500/30',
    info:
      'bg-primary/10 text-primary border-primary/30',
    inProgress: "bg-yellow-500 hover:bg-yellow-600",
    planned: "bg-blue-500 hover:bg-blue-600",
  };

  const sizeClasses = {
    default: 'px-2.5 py-0.5 text-xs',
    sm: 'px-2 py-0.5 text-[10px]',
    lg: 'px-3 py-0.5 text-sm',
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
