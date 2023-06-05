import { ChangeEvent, useState } from 'react';

const Slider = () => {
  const [passwordLength, setPasswordLength] = useState(18);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e?.target?.value >= 6) {
      setPasswordLength(+e?.target?.value);
    }
  };
  return (
    <div className='w-full mt-16 '>
      <input
        type='range'
        min='6'
        max='100'
        value={passwordLength}
        onChange={handleChange}
        className='slider'
        id='myRange'
      />
      <p className='text-white text-center mt-4 w-full'>
        Password Length: <span className='text-aureolin'>{passwordLength}</span>
      </p>
    </div>
  );
};

export default Slider;
