import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // user is logged in
        dispatch(login({
          email : userAuth.user.email,
          uid : userAuth.user.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">

      <Header />
      {!user ? (<Login/>): (
        <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets/> 
      </div>
      )}
    
    </div>
  );
}

export default App;
