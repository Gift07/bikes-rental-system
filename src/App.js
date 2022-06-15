import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Home from './screens/home';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom"
import { loadUser } from "./store/actions/auth"
import LocationId from './screens/locationId';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Profile from './screens/profile';
import Travels from './screens/travels';
import Register from './screens/rentRegister';
import Cart from './screens/cart';
import Loading from './screens/loading';
import Bike from "./components/profile/bike"
import RentBike from "./components/profile/rentBike"
import Profits from "./components/profile/profits"
import RentedBikes from "./components/profile/rentedBikes"
import Checkout from './screens/checkout';


function App() {
    const { is_authenticated } = useSelector(state => state.auth)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/pay' element={<Checkout/>}/>
                <Route path="rental-location/:id" element={<LocationId />} />
                <Route path="rental/register" element={<Register />} />
                <Route path='user/sign-in' element={<Signin />} />
                <Route path="user/sign-up" element={<Signup />} />
                <Route path='verify-phone' element={<Loading/>}/>
                <Route path="profile" element={is_authenticated ? <Profile /> : <Navigate replace to="/" />} >
                    <Route path="add-bike" element={<Bike />} />
                    <Route path="rent-bike" element={<RentBike/>} />
                    <Route path="profits" element={<Profits />} />
                    <Route path= "rented-bikes" element={<RentedBikes />} />
                </Route>
                <Route path="travels" element={is_authenticated ? <Travels /> : <Navigate replace to="/"/>} />
                <Route path="bike/rent" element={is_authenticated ? <Cart /> : <Navigate replace to="/"/>} />
            </Routes>
        </Router>
    );
}

export default App;
