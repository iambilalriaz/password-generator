import copyIcon from '../assets/copy.svg';

const PreviousPassword = ({ password }: { password: string }) => (
  <div className='flex justify-between mb-4 items-center'>
    <p className='text-neutral-400 tracking-[0.2em] text-base'>{password}</p>
    <img
      className='cursor-pointer ml-12'
      src={copyIcon}
      alt=''
      loading='lazy'
    />
  </div>
);
const PasswordHistory = () => {
  return (
    <div className='mt-8'>
      <p className='mb-8 text-white font-semibold tracking-[0.2em] text-xl'>
        Password history
      </p>
      <div>
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
        <PreviousPassword password='^d3>~9YDA8s}cWN9L_P^' />
      </div>
      <p className='text-aureolin text-center cursor-pointer mt-8'>
        Clear history
      </p>
    </div>
  );
};

export default PasswordHistory;
