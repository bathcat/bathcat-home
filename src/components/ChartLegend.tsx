// TODO: Add parameters.
//
// Inspired by:
// https://stackoverflow.com/questions/42598497/how-to-change-the-color-of-a-unicode-character
//
//


export const ChartLegend = () => (
  <div className='flex gap-5 place-content-center text-xl font-semibold'>
    <div>
      <span>With Effect </span>
      <span className='text-red-400 text-2xl'>⬛&#xfe0e;</span>
    </div>
    <div>
      <span>Without Effect </span>
      <span className='text-blue-400 text-2xl'>⬛&#xfe0e;</span>
    </div>
  </div>
);
