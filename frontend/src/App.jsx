import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const UserContext = createContext(null);

function App() {
const [currentUser, setCurrentUser] = useState({id: null
});
  
useEffect(() => {
  console.log(`Current user in App.js: ${currentUser.id}`);
}, [])
  return (
    <>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export { UserContext };
export default App
