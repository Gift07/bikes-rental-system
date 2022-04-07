import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Header from "../components/header";
import Map from "../components/Home/map";
import "../layout.scss"
import Locations from "../components/Home/locations";
import Navbar from '../components/navbar';
import { fetchLocation } from '../store/actions/location';


const Home = () => {
    const [navScroll, setNavScroll] = useState(false)
    const dispatch = useDispatch()
    const {is_loading,locations,error} = useSelector(state => state.location)
    useEffect(() => {
        window.onscroll = () => {
          if (window.scrollY <= 20) {
            setNavScroll(false);
          } else {
            setNavScroll(true);
          }
        };
    }, []);
    useEffect(() => {
        dispatch(fetchLocation())
    }, [dispatch])
    
    const {username,is_authenticated} = useSelector(state => state.auth)
    return (
        <div className="w-screen min-h-screen bg-black text-gray-50  font-gotham">
            <Navbar
                navScroll={navScroll}
                username={username}
                is_authenticated={is_authenticated} 
            />
            <div className="relative top-14">
                {/* Greetings area */}
                <Header
                    navScroll={navScroll}
                    username={username}
                    is_authenticated={is_authenticated} />
                <div className='flex items-center justify-center'>
                     <Map/>
                </div>
                <Locations
                    is_loading={is_loading}
                    error={error}
                    locations={locations} />
            </div>
        </div>
    )
}

export default Home