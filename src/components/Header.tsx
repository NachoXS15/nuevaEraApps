import { NavLink } from 'react-router'
import logo from '../assets/logo2.webp'

export default function Header() {
    return (
        <header className="w-full h-fit bg-blue-600 flex items-cente justify-center">
            <NavLink to="/"><img src={logo} className='w-32 h-32 active:scale-110 hover:scale-110 transition' alt="" /></NavLink>
        </header>
    )
}
