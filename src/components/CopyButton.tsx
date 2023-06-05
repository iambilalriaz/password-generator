import arrowIcon from '../assets/arrow.svg';
const CopyButton = () => {
  return (
    <button
      style={{
        clipPath:
          'polygon(0px 0px, 100% 0px, 100% 100%, 75% 100%, 2% 100%, 0px 70%)',
      }}
      className='flex mt-5 justify-between items-center bg-aureolin py-3 px-8 w-[90%] md:w-[70%]'
    >
      <p className='uppercase tracking-[0.2em] font-semibold'>Copy Password_</p>
      <img src={arrowIcon} alt='' loading='lazy' />
    </button>
  );
};

export default CopyButton;
