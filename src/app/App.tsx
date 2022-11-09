import { Navbar } from 'src/app/components';
import { About, Header, Portfolio, Contact, Footer } from 'src/sections';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
