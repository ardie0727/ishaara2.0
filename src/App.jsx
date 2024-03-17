import './App.css';
import { Box } from 'theme-ui';
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import Mission from './components/pages/Tryitnow';
import About from './components/pages/About';
import Counter from './components/pages/Counter';
import Services from './components/pages/Services';
// import Contact from './components/contact';
// import Logs from './components/logs';

function App() {
  return (
    <Box mx={20}>
        <Navbar />
        <Hero/>
        <Counter />
        <Services/>
        <Mission />
        <About/>
        {/* <Contact/> */}
    </Box>
  );
}

export default App;
