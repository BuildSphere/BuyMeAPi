import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App