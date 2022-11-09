import './Header.scss';

export const Header = () => {
  return (
    <header className='Header' id='home'>
      <div className='container Header__content'>
        <div className='first'>Je Suis</div>
        <div className='middle'>Jonathan Nadeau</div>
        <h2 className='last'>Développeur Web Frontend</h2>
      </div>
    </header>
  );
};
