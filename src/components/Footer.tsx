import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' border-t border-primary/30  flex   justify-between items-center px-10 py-3 bg-black '>
        <div>
            <h1 className="sm:text-2xl  font-jura text-primary bg-black text-center ">
        Hamza Hassan
      </h1>
      <p className='sm:text-sm text-xs text-zinc-600 italic'>Design by: <span className='text-white/80'>Sohaib</span></p>
        </div>
        <div >
      <p className='sm:text-sm text-xs  text-zinc-600 flex items-center gap-2  italic'> <Mail size={16}/> example@gmail.com</p>
      <p className='sm:text-sm text-xs  text-zinc-600 flex items-center gap-2  italic'> <Phone size={16}/> +92 342 7882342</p>

        </div>
    </footer>
  )
}

export default Footer
