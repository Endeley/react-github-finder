import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

//
function App() {
    return (
        <Router>
            <div className='flex flex-col justify-between h-screen'>
                <Navbar />
                <main className='container mx-auto px-3 pb-12'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/notfound' element={<NotFound />} />
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;