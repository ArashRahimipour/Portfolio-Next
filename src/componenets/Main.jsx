import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './main.css'

const Main = () => {
  return (
    <div className='container-main'>
      
        <p>
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <h1>
          Hi, I&#39;m <span className='name'> Arash</span>
        </h1>
        <h3>A Front-End Web Developer</h3>
        <p className=''>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
        </p>
        <div className='wrap-main'>
          <a
            href='https://www.linkedin.com/in/arash-rahimipour-3061b124b/'
            target='_blank'
            rel='noreferrer'
            >
            <div className='link'>
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href='https://github.com/ArashRahimipour'
            target='_blank'
            rel='noreferrer'
          >
            <div className='git'>
              <FaGithub />
            </div>
          </a>
          <Link href='/#contact'>
            <div className='mail'>
              <AiOutlineMail />
            </div>
          </Link>
          <Link href='/resume'>
            <div className='resume'>
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      
    </div>
  );
};

export default Main;