interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, disabled = false }: Props) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`
        font-bold 
        py-2 
        px-4 
        rounded
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : ' bg-blue-500  hover:bg-blue-700 text-white'}
        `}
  >
    {children}
  </button>
);
