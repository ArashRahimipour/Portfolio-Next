import Link from 'next/link';
import AboutImg from '../../public/assets/front.jpg';
import Image from 'next/image';
import './about.css';

const About = () => {
  return (
    <div className='about'>
        <div className='top'>
          <p className='text1'>
            About
          </p>
          <h2 className=''>Who I Am</h2>
          <p className='detail'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='detail'>
            I started web developement in 2022 managing multiple 
            websites.You can find my projects in the link below. Furthermore, In my spare, I love to go gym and relaxing.
          </p>
          
          <Link href='/#projects'>
            <p className='text2'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='box-img'>
          <Image src={AboutImg} className='img' alt='/'/>
        </div>
    </div>
  );
};

export default About;