import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
// import './App.css'

function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
