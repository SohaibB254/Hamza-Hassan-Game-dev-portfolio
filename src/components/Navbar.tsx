import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between p-8 fixed w-full z-10'>
        <div id='logo' >
            <h1 className='text-4xl font-jura text-primary'>Hamza Hassan.</h1>
        </div>
        <div id='menu' className='flex gap-5 items-center'>
            <ul className='flex gap-4 items-center text-white'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
            </ul>
            <Button className='text-[16px] p-5 cursor-pointer text-black'>Resume <Download/></Button>
        </div>
    </nav>
  )
}

export default Navbar
