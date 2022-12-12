import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from './view/Inicio';
import Novelas from './view/Novelas';
import SerieTV from './view/Serietv';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/novelas" element={<Novelas/>}/>
          <Route path="/serietv" element={<SerieTV/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
