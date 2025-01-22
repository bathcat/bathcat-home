interface IconButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick = () => ({}),
  children,
  disabled = false,
  title = '',
}) => (
  <button
    type='button'
    title={title}
    disabled={disabled}
    onClick={onClick}
    className={`
      p-2
      text-gray-700 
      border 
      border-gray-700 
      font-medium 
      rounded-lg 
      text-sm 
      text-center
      inline-flex
      items-center 
      me-2
      dark:border-gray-500
      dark:text-gray-500
      ${
        disabled
          ? 'bg-gray-200 dark:bg-gray-800'
          : 'dark:hover:bg-gray-500 dark:hover:text-white  hover:text-white   hover:bg-gray-700  '
      }
      `}
  >
    {children}
  </button>
);
