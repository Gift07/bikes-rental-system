import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Header from "../components/header";
import Map from "../components/Home/map";
import "../layout.scss"
import Locations from "../components/Home/locations";
import Navbar from '../components/navbar';
import { fetchLocation } from '../store/actions/location';
import Landing from '../components/Home/landing';
import Driver from '../components/Home/driver';
import Search from '../components/Home/search';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';


const Home = () => {
    const [navScroll, setNavScroll] = useState(false)
    const [sidebar,setSidebar] = useState(false)
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
        <div className="w-screen h-auto relative">
            <div className="w-full min-h-screen bg-black text-gray-50  font-gotham absolute">
                <Navbar
                    navScroll={navScroll}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    username={username}
                    is_authenticated={is_authenticated} 
                />
                <div className="relative top-14">
                    {/* Greetings area */}
                    <Landing/>
                    <Locations
                        is_loading={is_loading}
                        error={error}
                        locations={locations} />
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <Search/>
                        <Map/>
                    </div>
                    <Driver/>
                </div>
                <Footer/>
            </div>
            {sidebar && (
                <div className="absolute z-50">
                    <Sidebar
                        sidebar={sidebar}
                        setSidebar={setSidebar}/>
                </div>
            )}
        </div>
    )
}

export default Home