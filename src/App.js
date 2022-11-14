import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import Login from './agent/auth/login';
import Signup from './agent/auth/signup';
import Dashboard from './agent/dash/dashboard';
import Home from './agent/dash/pages/home';
import Error from './errorPage';
import Payment from './agent/dash/pages/payment';
import Properties from './agent/dash/pages/properties';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Signup" />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/dashboard' element={<Dashboard />} children={
        [
          <Route path='/dashboard/home' element={<Home />} />,
          <Route path='/dashboard/payments' element={<Payment />} />,
          <Route path='/dashboard/properties' element={<Properties />} />,
          // Error page
          <Route path='/dashboard/*' element={<Error />} />
        ]
      } />
      <Route path='*' element={<Error />} />
    </Routes>

  );
}

export default App;
