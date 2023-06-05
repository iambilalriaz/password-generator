const CheckBox = ({ label }: { label: string }) => (
  <div className='flex items-center'>
    <label className='container'>
      <input type='checkbox' />
      <span className='checkmark  text-xs' />
      {label}
    </label>
  </div>
);
const PasswordOptions = () => {
  return (
    <div className='mt-12 text-white text-left flex justify-between items-center'>
      <div>
        <CheckBox label='Uppercase letters' />
        <CheckBox label='Numbers' />
      </div>
      <div>
        <CheckBox label='Lowercase letters' />
        <CheckBox label='Symbols' />
      </div>
    </div>
  );
};

export default PasswordOptions;
