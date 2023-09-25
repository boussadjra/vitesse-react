import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

type ButtonProps = {
  as?: 'button' | 'a' | typeof Link;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
  variant?: 'solid' | 'outline' | 'link' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  prependIcon?: string;
  appendIcon?: string;
  to?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  iconOnly?: boolean;
};

const Button = ({
  as = 'button',
  color = 'default',
  className = '',
  variant = 'solid',
  size = 'md',
  children,
  prependIcon,
  appendIcon,
  to,
  target,
  type = 'button',
  onClick,
  iconOnly = false,
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const colorClasses = {
    default:
      'text-gray-100 bg-gray-700 hover:bg-gray-800 dark:text-gray-700 dark:bg-gray-100 dark:hover:bg-gray-200 dark:focus:ring-gray-500',
    primary: 'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500',
    success: 'text-white bg-green-600 hover:bg-green-700 focus:ring-green-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    warning: 'text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300',
    info: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  };
  const outlineClasses = {
    default:
      'text-gray-700 hover:bg-gray-300 hover:text-gray-600 dark:text-gray-100 bg-transparent border border-gray-700 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700 dark:focus:ring-gray-500',
    primary: 'text-primary-600 bg-transparent border border-primary-600 hover:bg-primary-100 focus:ring-primary-500',
    secondary:
      'text-secondary-600 bg-transparent border border-secondary-600 hover:bg-secondary-100 focus:ring-secondary-500',
    success: 'text-green-600 bg-transparent border border-green-600 hover:bg-green-100 focus:ring-green-500',
    danger: 'text-red-600 bg-transparent border border-red-600 hover:bg-red-100 focus:ring-red-500',
    warning: 'text-yellow-400 bg-transparent border border-yellow-400 hover:bg-yellow-100 focus:ring-yellow-300',
    info: 'text-blue-600 bg-transparent border border-blue-600 hover:bg-blue-100 focus:ring-blue-500',
  };
  const linkClasses = {
    default: 'text-gray-700 dark:text-gray-100 hover:text-gray-500 focus:ring-gray-500',
    primary: 'text-primary-600 hover:text-primary-500 focus:ring-primary-500',
    secondary: 'text-secondary-600 hover:text-secondary-500 focus:ring-secondary-500',
    success: 'text-green-600 hover:text-green-500 focus:ring-green-500',
    danger: 'text-red-600 hover:text-red-500 focus:ring-red-500',
    warning: 'text-yellow-400 hover:text-yellow-300 focus:ring-yellow-300',
    info: 'text-blue-600 hover:text-blue-500 focus:ring-blue-500',
  };
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs rounded',
    sm: 'px-3 py-2 text-sm leading-4 rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-4 py-2 text-base rounded-md',
    xl: 'px-6 py-3 text-base rounded-md',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${
    variant === 'solid' ? colorClasses[color] : variant === 'outline' ? outlineClasses[color] : linkClasses[color]
  } ${iconOnly ? '!rounded-full w-10 h-10 !p-0' : ''} ${className}`;

  const iconClasses = 'h-5 w-5';

  const prependIconElement = prependIcon ? <i className={`${prependIcon} ${iconClasses} me-2`} /> : null;

  const appendIconElement = appendIcon ? <i className={`${appendIcon} ${iconClasses} ms-2`} /> : null;

  if ((as === 'a' || as === Link) && to !== undefined) {
    return React.createElement(
      as,
      { className: classes, to, target, onClick },
      prependIconElement,
      children,
      appendIconElement,
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {prependIconElement}
      {children}
      {appendIconElement}
    </button>
  );
};

export default Button;
