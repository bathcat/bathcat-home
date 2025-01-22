export const BreadCrumbSpacer = () => {
  return (
    <svg
      className='w-3 h-3 mr-3 text-gray-800 dark:text-white'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m9 5 7 7-7 7'
      />
    </svg>
  );
};

interface BreadcrumbLinkProps {
  href: string;
  spacer: boolean;
  children: React.ReactNode;
}

export const BreadCrumbLink = ({
  href,
  children,
  spacer = false,
}: BreadcrumbLinkProps) => {
  return (
    <li className='inline-flex items-center'>
      {spacer && <BreadCrumbSpacer />}
      <a
        href={href}
        className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
      >
        {children}
      </a>
    </li>
  );
};

interface BreadcrumbCurrentProps {
  children: React.ReactNode;
}

export const BreadCrumbCurrent = ({ children }: BreadcrumbCurrentProps) => {
  return (
    <li className='inline-flex items-center' aria-current='page'>
      <BreadCrumbSpacer />
      <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
        {children}
      </span>
    </li>
  );
};

interface BreadCrumbProps {
  links: Array<{ href: string; text: string }>;
  current: string;
  className: string;
}

export const BreadCrumbs = ({ links, current, className }: BreadCrumbProps) => {
  if (!links || links.length === 0) return null;

  return (
    <nav className={`flex ${className || ''}`} aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        {links.map((link, index) => (
          <BreadCrumbLink key={index} href={link.href} spacer={index !== 0}>
            {link.text}
          </BreadCrumbLink>
        ))}
        <BreadCrumbCurrent>{current}</BreadCrumbCurrent>
      </ol>
    </nav>
  );
};
