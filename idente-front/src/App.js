import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/log/SignIn.js'
import SignUp from './pages/log/SignUp.js';
import Home from './pages/contents/Home.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SignIn />} />
          <Route path='/sign-up' element={ <SignUp />}  />

          <Route path='/home' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
