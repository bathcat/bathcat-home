// Borrowed from:
//      https://flowbite.com/icons/

interface IconProps {
  className?: string;
}

export const ArrowUp = () => (
  <svg
    className='w-6 h-6 text-gray-800 dark:text-white'
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
      d='M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8'
    />
  </svg>
);

export const ForwardStep = () => (
  <svg
    className='w-6 h-6 text-gray-800 dark:text-white'
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
      d='M16 6v12M8 6v12l8-6-8-6Z'
    />
  </svg>
);

export const BackwardStep = () => (
  <svg
    className='w-6 h-6 text-gray-800 dark:text-white'
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
      d='M8 6v12m8-12v12l-8-6 8-6Z'
    />
  </svg>
);

export const GraduationCap = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path d='M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z' />
    <path d='M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z' />
  </svg>
);

export const FileLines = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      d='M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Home = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      d='M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Sun = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
    />
  </svg>
);

export const Moon = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z'
    />
  </svg>
);

export const Github = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Hamburger = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 17 14'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 1h15M1 7h15M1 13h15'
    />
  </svg>
);

export const Close = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M6 18 17.94 6M18 18 6.06 6'
    />
  </svg>
);

export const EmptyStar = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      strokeWidth='2'
      d='M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z'
    />
  </svg>
);

export const HalfStar = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      d='M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Star = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
  </svg>
);

export const Expand = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5'
    />
  </svg>
);

export const Compress = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4'
    />
  </svg>
);

export const CaretLeft = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M16 16.881V7.119a1 1 0 0 0-1.636-.772l-5.927 4.881a1 1 0 0 0 0 1.544l5.927 4.88a1 1 0 0 0 1.636-.77Z'
    />
  </svg>
);

export const CaretRight = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
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
      d='M8 16.881V7.119a1 1 0 0 1 1.636-.772l5.927 4.881a1 1 0 0 1 0 1.544l-5.927 4.88A1 1 0 0 1 8 16.882Z'
    />
  </svg>
);

export const Print = ({ className }: IconProps) => (
  <svg
    className={`
        w-6 
        h-6 
        text-gray-600
        dark:text-white
        ${className || ''}`}
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      d='M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z'
      clipRule='evenodd'
    />
  </svg>
);
