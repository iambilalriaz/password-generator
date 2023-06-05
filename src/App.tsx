import CopyButton from './components/CopyButton';
import Header from './components/Header';
import PasswordHistory from './components/PasswordHistory';
import PasswordInput from './components/PasswordInput';
import PasswordOptions from './components/PasswordOptions';
import Slider from './components/Slider';

const App = () => {
  return (
    <div className='bg-dark lg:h-screen lg:grid place-items-center h-full px-5 py-16'>
      <div className='lg:w-[80%] lg:mx-[10%]'>
        <Header />
        <div className='block lg:flex items-start justify-between'>
          <div className='w-full'>
            <PasswordInput />
            <CopyButton />
            <Slider />
            <PasswordOptions />
          </div>
          <div className='lg:w-[20vw]' />
          <div className='w-full'>
            <PasswordHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
