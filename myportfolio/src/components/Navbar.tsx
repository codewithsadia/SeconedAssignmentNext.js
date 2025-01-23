import Link from 'next/link';
import React from 'react';


const Navbar = () => {
  return (
    <div className='bg-pink-600 h-12'>
      <div className=' text-blue-900 flex justify-between items-center'>
      <h1 className='text-xl m-2 cursor-pointer hover:text-yellow-500'>Web Developer</h1>
      
      <ul className='flex gap-4 mr-4 cursor-pointer'>
        <li className= ' menuLink hover:text-yellow-500'><Link href= "/">Home </Link> </li>
        <li className='hover:text-yellow-500'> <Link href= "/about"> About </Link> </li>
        <li className='hover:text-yellow-500'> <Link href= "/projects"> Projects </Link> </li>
        <li className=  'hover:text-yellow-500'> <Link href= "/contact/"> Contact </Link> </li>
        <li className=  'hover:text-yellow-500'> <Link href= "/service/"> Service </Link></li>
        <li className=  'hover:text-yellow-500'> <Link href= "/skills/"> Skills </Link></li>
    </ul>
    </div>
    </div>
  )
}
export default Navbar
