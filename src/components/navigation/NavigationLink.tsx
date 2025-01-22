import type React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
}

export const NavigationLink = ({
  title,
  className,
  href,
  children,
  ...props
}: Props) => {
  return (
    <a
      className={`flex flex-row items-center p-3 group no-underline ${className || ''}`}
      title={title}
      href={href}
      {...props}
    >
      {children}
      <span className='bc-menu-link-text'>{title}</span>
    </a>
  );
};
