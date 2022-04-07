import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Home from './screens/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { loadUser } from "./store/actions/auth"
import LocationId from './screens/locationId';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Profile from './screens/profile';
import Travels from './screens/travels';
import Cart from './screens/cart';

function App() {
    const dispatch = useDispatch()
    const {is_authenticated} = useSelector(state => state.auth)
  
    useEffect(() => {
      dispatch(loadUser())
    }, [dispatch])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="rental-location/:id" element={<LocationId />} />
                <Route path='user/sign-in' element={<Signin />} />
                <Route path="user/sign-up" element={<Signup />} />
                <Route path="profile" element={<Profile />} />
                <Route path="travels" element={<Travels />} />
                <Route path="bike/rent" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
