import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="pt-14 w-full">
        <Footer />
      </div>
    </main>
  );
}

export default App;
