import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Homepage/HomePage'
import LoginPage from './Login&Register/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
