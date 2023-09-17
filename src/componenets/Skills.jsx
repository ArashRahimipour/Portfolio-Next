import Image from 'next/image';
import React from 'react';
import './skills.css';
import html from '../../public/assets/skills/html.png'
import css from '../../public/assets/skills/css.png'
import javascript from '../../public/assets/skills/javascript.jpeg'
import react from '../../public/assets/skills/react.png'
import bootstrap from '../../public/assets/skills/bootstrap.png'
import next from '../../public/assets/skills/next.png'
import tailwind from '../../public/assets/skills/tailwind.png'
import material from '../../public/assets/skills/material.png'
import the from '../../public/assets/skills/th.jpeg'
import node from '../../public/assets/skills/node.jpeg'
import Express from '../../public/assets/skills/Express.png'
import mongodb from '../../public/assets/skills/mongodb.jpg'
import firebase from '../../public/assets/skills/firebase.png'

const Skill = () => {
    const pics = [
        {
          id:1,
          describ:html,
          photo: html, 
        },
        {
          id:2,
          describ:css,
          photo: css,
        },
         {
           id:3,
           describ:javascript,
           photo: javascript, 
        },
        {
          id:4,
          describ:react,
          photo: react, 
        },
        {
          id:5,
          describ:firebase,
          photo: firebase, 
        },
        {
          id:6,
          describ:bootstrap,
          photo: bootstrap, 
        },
        {
          id:7,
          describ:next,
          photo: next, 
        },
        {
          id:8,
          describ:tailwind,
          photo: tailwind, 
        },
        {
          id:9,
          describ:material,
          photo: material, 
        },
        {
          id:10,
          describ:the,
          photo: the, 
        },
        {
          id:11,
          describ:Express,
          photo: Express, 
        },
        {
          id:12,
          describ:node,
          photo: node, 
        },
        {
          id:13,
          describ:mongodb,
          photo: mongodb, 
        },
    ]

    return (
        <div className='container-skill'>
            <h3 className='skills'>Skills</h3>
            <h4>What I can do</h4>
            <div className='skill'>
              {pics.map(item => (<Image src={item.photo} alt={item.id} key={item.id} width={120} height={60}/>))}
            </div>
        </div>
      )
    }

export default Skill;