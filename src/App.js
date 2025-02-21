import './App.css';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

// MEDIA-QUERIES NÃO FUNCIONAM

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
