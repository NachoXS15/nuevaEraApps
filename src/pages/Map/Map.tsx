import { NavLink } from 'react-router'
import Header from '../../components/Header'


export default function Map() {
    return (
        <>
        <Header />
        <div className="w-full min-h-screen relative flex items-center justify-center">
            <NavLink to="/" className="absolute top-10"><img src="/assets/lr_logo.png"  width={200} alt="" /></NavLink>
            <NavLink to="/map/north" style={{backgroundImage: 'url("https://www.norte.com/img/2018/09/la-rioja.jpg")'}} className="w-1/3 min-h-screen flex items-center bg-center justify-center bg-cover">
            <div className="w-full min-h-screen px-10 bg-red-lr bg-opacity-80 flex items-center justify-center active:bg-opacity-85 transition">
                <img src="/assets/map/logos/Norte.png" alt="" />
            </div>
            </NavLink>
            <NavLink to="/map/west" style={{backgroundImage: 'url("https://www.lanacion.com.ar/resizer/v2/laguna-brava-y-sus-7PSIMBYTEBEBNC6Q4NX57UEFBY.jpg?auth=c849e5ff15e01c76517cae3f5da1cdbcddd7eacb8ef2876b197c3089ef6fab1f&width=1920&height=1280&quality=70&smart=true")'}} className="w-1/3 min-h-screen flex items-center justify-center bg-cover bg-center">
            <div className="w-full min-h-screen px-10 bg-orange-lr bg-opacity-70 flex items-center justify-center active:bg-opacity-85 ">
                <img src="/assets/map/logos/Oeste.png" alt="" />
            </div>
            </NavLink>
            <NavLink to="/map/south" style={{backgroundImage: 'url("/assets/map/south_bg.jpg")'}} className="w-1/3 min-h-screen flex items-center justify-center bg-orange-900 bg-opacity-70 bg-cover bg-center">
            <div className="w-full min-h-screen px-10 bg-green-lr bg-opacity-70 flex items-center justify-center active:bg-opacity-85 ">
                <img src="/assets/map/logos/Sur.png" alt="" />
            </div>
            </NavLink>
        </div>
        
        </>
    )
}
