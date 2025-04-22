import  { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = 'Shape IT| Innovative IT Solutions';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;