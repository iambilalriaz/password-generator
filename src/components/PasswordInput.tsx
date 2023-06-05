import refreshIcon from '../assets/refresh.svg';
import highStrength from '../assets/strength-high.svg';
const PasswordInput = () => {
  return (
    <div className='border-2 mt-8 border-bright-aqua bg-[rgba(0, 240, 255, 0.1)] p-2 text-bright-aqua tracking-[0.2em] flex justify-between items-center'>
      <p>1a4Txe3m*%Qm^vdXs!</p>
      <div className='flex'>
        <img src={highStrength} alt='' loading='lazy' />
        <img
          className='ml-3 cursor-pointer'
          src={refreshIcon}
          alt=''
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default PasswordInput;
