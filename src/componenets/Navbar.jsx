"use client";
import Image from 'next/image';
import Link from 'next/link';
// import {Link}  from 'next-scroll'
import { useState } from 'react';
import './navBar.css';
import {FiPaperclip} from 'react-icons/fi';
import {AiOutlineProject} from 'react-icons/ai';
import {TbFileDescription} from 'react-icons/tb';
import {AiOutlineContacts} from 'react-icons/ai';
import {AiOutlineTool} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaPagelines, FaTimes} from 'react-icons/fa';
// import resume from '../../public/assets/CV.pdf';
import NavLogo from '../../public/assets/skills/logo.png'
// import {AiFillHome} from 'react-icons/ai';




const NavBar = () => {
    const [open, setOpen] = useState(false);
    const handelburger = () => setOpen(!open);


    return(
      <div className="container">
            <Link href='/'>
              <Image 
              className='pic' 
              src={NavLogo} 
              width={100} 
              height={50}
              alt='/'
              />
            </Link>
          <div className="title">
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
              <li><a onClick={handelburger}  href="#about">About <TbFileDescription/></a></li> 
              <li><a onClick={handelburger}  href="#projects">Projects <AiOutlineProject/></a></li>
              <li><a onClick={handelburger}  href="#skills">Skills <AiOutlineTool/></a></li>
              {/* <li><Link href='/resume'>Resume<FiPaperclip/></Link></li> */}
              <li><Link onClick={handelburger} href= "#contact">Contact <AiOutlineContacts/></Link></li>
            </ul>
          </div>
          <div className='burger' onClick={handelburger}>
            {open ? (<FaTimes/>) : (<GiHamburgerMenu />)}
          </div>
      </div>
    )
}

export default NavBar;