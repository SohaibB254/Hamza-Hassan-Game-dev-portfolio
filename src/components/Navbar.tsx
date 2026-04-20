"use client"
import { Button } from '@/components/ui/button'
import { Download, FolderCode, Home, Menu, UserCog2, X } from 'lucide-react'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen ] = useState(true)

  return (
    <>
       {isNavOpen &&  <div onClick={() => setIsNavOpen(false)} className='h-screen w-screen block sm:hidden backdrop-blur-sm z-15 bg-black/10 fixed top-0 left-0 '></div>}
    <nav className='flex justify-between   p-6 fixed w-full z-20 backdrop-blur-md '>
        <div id='logo' >
            <h1 className='sm:text-2xl text-xl font-jura text-primary cursor-pointer'>Hamza Hassan.</h1>
        </div>
        { !isNavOpen && <Menu  onClick={() => setIsNavOpen(true)} className='sm:hidden text-white '/>}
            {isNavOpen && <X  onClick={() => setIsNavOpen(false)} className='sm:hidden text-white ' />}
        <menu id='menu' className={`flex fixed top-20  right-0 px-4 h-screen sm:h-auto sm:bg-transparent   sm:static sm:flex-row flex-col sm:gap-5 items-center ${isNavOpen? 'translate-x-0': 'translate-x-100'} transition-all duration-300 `}>
            <ul className={`flex sm:flex-row flex-col gap-4 sm:items-center   text-white  `}>
                <li className='hover:text-primary cursor-pointer transition flex gap-1 items-center'><Home size={16} className='sm:hidden'/> Home</li>
                <li className='hover:text-primary cursor-pointer transition flex gap-1 items-center'><UserCog2 size={16} className='sm:hidden'/> About</li>
                <li className='hover:text-primary cursor-pointer transition flex gap-1 items-center'><FolderCode size={16} className='sm:hidden'/> Projects</li>
            </ul>

            <Button className='text-[16px] sm:flex hidden p-5 cursor-pointer  text-black '>Resume <Download/></Button>
        </menu>

    </nav>
    </>
  )
}

export default Navbar
