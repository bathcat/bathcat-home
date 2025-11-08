import { useDeck } from './use-deck';

interface Props extends React.PropsWithChildren {
  className?: string;
  slideIndex: number;
}

export const Slide: React.FC<Props> = ({ slideIndex, children, ...props }) => {
  const { currentSlide } = useDeck();

  return (
    <div
      {...props}
      className={`
        bc-slide
        ${currentSlide == slideIndex ? 'opacity-100 z-10' : 'opacity-0'}
        print:opacity-100
        print:static
        print:break-after-page
      `}
    >
      {children}
    </div>
  );
};
