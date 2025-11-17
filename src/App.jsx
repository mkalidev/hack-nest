
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
