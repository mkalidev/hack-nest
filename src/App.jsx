
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
