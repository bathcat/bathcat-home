// Inspired by:
//   https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/
//   https://www.lifewire.com/how-to-make-torn-paper-edge-1701698

const styles: React.CSSProperties = {
  position: 'absolute',
  top: '-999px',
};

export const PaperFilter: React.FC = () => {
  //Only insert into the DOM once.
  if (document.getElementById('roughpaper')) {
    return null;
  }
  return (
    <svg style={styles}>
      <filter id='roughpaper'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.09'
          numOctaves='5'
        ></feTurbulence>
        <feDiffuseLighting lightingColor='white' surfaceScale='2'>
          <feDistantLight azimuth='45' elevation='60'></feDistantLight>
        </feDiffuseLighting>
        <feComposite operator='in' in2='SourceAlpha'></feComposite>
        <feBlend in2='SourceGraphic' mode='multiply'></feBlend>
      </filter>
    </svg>
  );
};
