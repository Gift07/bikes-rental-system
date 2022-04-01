import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import Header from "../components/header";
import Map from "../components/Home/map";
import "../layout.scss"
import Locations from "../components/Home/locations";
import Navbar from '../components/navbar';


const Home = () => {
    const [navScroll, setNavScroll] = useState(false)
    
    useEffect(() => {
        window.onscroll = () => {
          if (window.scrollY <= 20) {
            setNavScroll(false);
          } else {
            setNavScroll(true);
          }
        };
    }, []);
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
                <Map/>
                <Locations/>
            </div>
        </div>
    )
}

export default Home