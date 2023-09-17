import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './project.css';
import boy from '../../public/assets/projects/boy.png';
import cryptoImg from '../../public/assets/projects/Crypto.png';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';
import expense from '../../public/assets/projects/expense.png';
import UI from '../../public/assets/projects/UiMaterial.png';
import motor from '../../public/assets/projects/TypeScript.png';
import tourism from '../../public/assets/projects/Tourism attraction.png';
import mern from '../../public/assets/projects/Mern.png';
import weather from '../../public/assets/projects/weatherapp.png';
import ProjectItem from './ProjectItems';

const Projects = () => {
  return (
    <div className='container-project'>
        <p className='text'>
          Projects
        </p>
        <h2 className=''>What I&apos;ve Built</h2>
        <div className='box-project'>
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'
          />
          <ProjectItem
            title='Expense-Tracker'
            backgroundImg={expense}
            projectUrl='/expense'
            tech='Next JS'
          />
           <ProjectItem
            title='Social App'
            backgroundImg={UI}
            projectUrl='/social'
            tech='React.js'
          />
           <ProjectItem
            title='Motor Shopp'
            backgroundImg={motor}
            projectUrl='/motor-shopp'
            tech='TypeScript'
          />
           <ProjectItem
            title='Tourism web'
            backgroundImg={tourism}
            projectUrl='/tourism'
            tech='React.js'
          />
           <ProjectItem
            title='Card'
            backgroundImg={mern}
            projectUrl='/mern'
            tech='Mern Stack'
          />
           <ProjectItem
            title='BMI Calculator'
            backgroundImg={boy}
            projectUrl='/boy'
            tech='React JS'
          />
           <ProjectItem
            title='Weather App'
            backgroundImg={weather}
            projectUrl='/weather'
            tech='React JS & API'
          />

        </div>
    </div>
  );
};

export default Projects;