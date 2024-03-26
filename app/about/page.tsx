/* eslint-disable @next/next/no-img-element */
'use client'

import './projects.css';
import Discription from '@/components/discription';
import { useEffect } from 'react';
import Image from 'next/image'
import { renderToString } from 'react-dom/server';



const projectDetails = [
  {
    name: 'Space Travel',
    description: 'Space Travel is a React-Redux application consists of Rockets, Missions, Dragon, and the My Profile section',
    featuredImageMobile: require('./1687482603881.png'),
    featuredImageDesktop: './picture/1687482603881.jpg',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#1',
    linkLive: 'https://space-travelers-hub-snowy.vercel.app/',
    linkSource: 'https://github.com/enmanuelbayen/space-Travelers-Hub',
  },
  {
    name: 'Book Store',
    description: 'A web application for storing your book collection and tracking your progress.This project is built using HTML, CSS, JavaScript, and React',
    featuredImageMobile: require('./1687482720771.jpg'),
    featuredImageDesktop: '',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#2',
    linkLive: 'https://incredible-eclair-ea9cda.netlify.app',
    linkSource: 'https://github.com/StevenWafeek/Bookstore',
  },
  {
    name: 'Math Magicians',
    description: 'A web app for mathematical calculations and motivational advice, it offers both math solutions and inspirational quotes through an API. Built with HTML, CSS, JavaScript, and React.',
    featuredImageMobile: require('./Screenshot 2023-10-11 170712.jpg'),
    featuredImageDesktop: '',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#3',
    linkLive: 'https://polite-cendol-9a4954.netlify.app',
    linkSource: 'https://github.com/StevenWafeek/math-magicians',
  },
  {
    name: 'Pokemon List',
    description: 'A web app that displays a list of Pokémon along with their powers and speed from two APIs. built with HTML, CSS, JavaScript, and React.',
    featuredImageMobile: require('./Screenshot 2023-10-11 170906.jpg'),
    featuredImageDesktop: '',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#4',
    linkLive: 'https://fantastic-faloodeh-f20cab.netlify.app/',
    linkSource: 'https://github.com/StevenWafeek/metrics-webapp-capstone',
  },
  {
    name: 'Tesla car booking',
    description: 'app to book Tesla car test drives. The app allows admin users to create and delete cars from the availability list. Besides, it allows to make reservations by car model, city and time.',
    featuredImageMobile: require('./Screenshot 2023-12-19 161238.jpg'),
    featuredImageDesktop: '',
    technologies: 'HTML , CSS , JavaScript , React',
    buttons: 'projectss#5',
    linkLive: 'https://tesla-car-booking-front.onrender.com/',
    linkSource: 'https://github.com/StevenWafeek/Tesla-car-booking-front-end',
  },
];
const About = () => {
  useEffect(() => {
    const root = document.getElementById('portfolio');
    if (root) {
      root.innerHTML = ''; 
      projectDetails.forEach(project => {
        const projectCard = document.createElement('section');
        projectCard.className = 'project-card';
        const imageDesktop = (
          <Image
            src={project.featuredImageMobile}
            width={300}
            height={200}
            alt="Picture of the author"
          />
        );

        appendChild(projectCard, <div className="Tonic">{imageDesktop}</div>);
        appendChild(projectCard, <div className="canopy">
          <h2>{project.name}</h2>
          <ul><li>Front End Dev</li><li>2023</li></ul>
         <p className="Tonic-paragraph">{project.description}</p> 
         <ul className="Tonic-ul"><li>{project.technologies}</li></ul>
         <div className='cards-buttons'>
         <button><a className="Demo" href={project.linkLive} target="_blank">See live</a></button>
            <button><a className="Links" href={project.linkSource} target="_blank">See source</a></button>
          </div> 
         </div>
         );
        root.appendChild(projectCard);
      });
    }
  }, []);

  const appendChild = (parent: HTMLElement, child: JSX.Element) => {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = renderToString(child);
    parent.appendChild(tempContainer.firstChild as Node);
  };
  
    return (
      <>
          <Discription />
        <div className='projects-page'>
          <h1>Here is some Projects ...</h1>
          <div id="portfolio"></div>
        </div>
      </>
    );
  }
  
  export default About;