import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Register from './pages/Register'
// import './App.css'

function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
