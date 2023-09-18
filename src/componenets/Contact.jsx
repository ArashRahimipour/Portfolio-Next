import Image from 'next/image';
import Link from 'next/link';
import './contact.css'
// import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/contact.jpg';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='box-contact'>
        <p>Contact</p>
        <h2>Get in Touch</h2>
        <Image
        className='pic-contact'
          src={ContactImg}
          alt='/'
          width={350}
        />
        <h2>Arash Rahimipour</h2>
        <p>Front-End Developer</p>
        <p>
          I am available for full-time positions. Contact me and let&apos;s talk.
        </p>
        <p>Connect With Me</p>
        <div className='social'>
          <a
            href='https://www.linkedin.com/in/arash-rahimipour-3061b124b/'
            target='_blank'
            rel='noreferrer'
          >
            <div>
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href='https://github.com/ArashRahimipour'
            target='_blank'
            rel='noreferrer'
          >
          <div>
            <FaGithub />
          </div>
          </a>
          <AiOutlineMail />
          <Link href='/resume'>
            <div>
              <BsFillPersonLinesFill/>
            </div>
          </Link>
        </div>
      </div>
       
      {/* right */}
      <div className='contact-form'>
            <form method='POST' action='https://getform.io/f/b3175715-bc85-4927-8cf4-0e10c9a00c0c' className='form'>
                <div className='contact-text'>
                    <p className='p-text'>Contact</p> 
                </div>
                <div className='box-form'>
                <input className='name' placeholder='Name' name='name'/>
                <input className='email' placeholder='Email' name='email'/>
                <textarea className='text-area' rows="10" placeholder='Message'></textarea>
                <button className='btn-contact'>Let's Collaborate</button>
                </div>
            </form>
      </div>
      <div>
        <Link href='/'>
          <div>
            <HiOutlineChevronDoubleUp
            size={30}
            />
          </div>
        </Link>
      </div>
      
    </div>
        
      
      
  );
};

export default Contact;