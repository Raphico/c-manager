import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import AddContact from './pages/AddContact';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import UpdateContact from './pages/UpdateContact';
import NotFound from './pages/404';
import SendContactViaSms from './pages/SendContactViaSms';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/add-contact' element={<AddContact />} />
              <Route path='/update-contact/:id' element={<UpdateContact />} />
              <Route path='/send-contact-via-sms/:id' element={<SendContactViaSms />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </GlobalProvider>
    </>
  );
}

export default App;
