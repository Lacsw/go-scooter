import './App.css';
import Benefits from '../Benefits/Benefits';
import Hero from '../Hero/Hero';
import Parties from '../Parties/Parties';
import Membership from '../Membership/Membership';
import Terms from '../Terms/Terms';

function App() {
  return (
    <main className='app'>
      <Hero />
      <Benefits />
      <Parties />
      <Membership />
      <Terms />
    </main>
  );
}

export default App;
