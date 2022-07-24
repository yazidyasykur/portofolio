import { Link } from "react-scroll"

function Navbar() {
    return (
        <nav className="bg-slate-800 min-h-[3rem] w-full flex z-10 items-center justify-between px-5 sticky top-0">
            <h1 className="font-bold text-lime-400 text-xs sm:text-lg">Yazid Page</h1>
            <div>
                <ul className="flex text-white text-xs gap-3 cursor-pointer sm:text-sm">
                    <li ><Link to="home" smooth={true} className="hover:font-bold hover:text-lime-400">Home</Link></li>
                    <li ><Link to="about" smooth={true} className="hover:font-bold hover:text-lime-400">About</Link></li>
                    <li ><Link to="skillset" smooth={true} className="hover:font-bold hover:text-lime-400">Skillset</Link></li>
                    <li ><Link to="project" smooth={true} className="hover:font-bold hover:text-lime-400">Project</Link></li>
                    <li ><Link to="contact" smooth={true} className="hover:font-bold hover:text-lime-400">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar