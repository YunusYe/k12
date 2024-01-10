import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const NavbarRight = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex items-center h-24 max-w-[1240px] ml-0 px-4 text-white'>

      <ul className='hidden md:flex justify-end '>

        <li className='p-4'>
            <Link to="/Anasayfa">Anasayfa</Link>
            {/*Dropdown menu*/}
        </li>

        <li className='p-4'>
            <Link to="/NeYapıyoruz">Ne Yepıyoruz</Link>
            {/*Dropdown menu*/}
        </li>

        <li className='p-4'>
            <Link to="/NasılYapıyoruz">Nasıl Yapıyoruz</Link>
            {/*Dropdown menu*/}
        </li>

        <li className='p-4'>
            <Link to="Hakkımızda">Hakkımızda</Link>
            {/*Dropdown menu*/}
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden justify-end'>
          {nav ? <AiOutlineClose className='justify-end' size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      
      <ul className={nav ? 'fixed right-1.5 top-20 w-[40%] text-center border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#5d5f5f] mt-5 mb-6'>K 12</h1>
          
          
          <li className='p-4 border-b border-gray-600'>
            <Link to="/Anasayfa">Anasayfa</Link> 
            {/*Dropdown menu*/}
            </li>

          <li className='p-4 border-b border-gray-600'>
            <Link to="NeYapıyoruz">Ne Yapıyoruz</Link>
            {/*Dropdown menu*/}
            </li>
          
          <li className='p-4 border-b border-gray-600'>
            <Link to="/NasılYapıyoruz">Nasıl Yapıyoruz</Link>
            {/*Dropdown menu*/}
             </li>
          
          <li className='p-4 border-b border-gray-600'>
              <Link to="/Hakkımızda">Hakkımızda</Link>
            </li>
          
          
      </ul>
    </div>
  );
};

export default NavbarRight;
