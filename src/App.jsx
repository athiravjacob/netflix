
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import {AuthProvider} from './context/AuthContext'
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import ProtectedRoutes from './components/ProtectedRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
       <ToastContainer position="top-right"
      autoClose={1000} // Auto-dismiss after 5 seconds
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
      <AuthProvider>
      <Router>
        <Routes>
            <Route path="/home" element={
              <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
              } />
          <Route path="/" element={<SignIn/>}></Route>
        </Routes>
     </Router>
     </AuthProvider> 
      
      
    </>
  )
}

export default App

