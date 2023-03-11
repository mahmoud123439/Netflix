import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { useState, useEffect } from 'react';
import LoginScreen from './components/loginScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile/Profile';


function App() {
  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(

      userAuth => {
        if (userAuth) {
          //Logged in
          // console.log(userAuth);
          dispatch(login({
            uid: userAuth.email,
            email: userAuth.email,
          }))
        } else {
          //Logged out
          dispatch(logout())
        }
      }
    );
      return unsubscribe;
  }, [dispatch]);

  return (
    <>
    {loading ? (
      <div className="loader-container">
        <Loading />
      </div>
      ):(<Router>
        {!user ? (
          <LoginScreen />

        ) : (
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>  
        )}
        
      </Router>)}    
    </>
  );
}

export default App;
