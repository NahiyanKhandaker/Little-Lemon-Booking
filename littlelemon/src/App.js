import './index.css';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;