/* eslint-disable @next/next/no-img-element */
'use client'

import './projects.css';
import Discription from '@/components/discription';
import { useEffect } from 'react';
import Image from 'next/image'
import { renderToString } from 'react-dom/server';



const projectDetails = [
  {
    name: 'Space Shooter',
    description: 'an intense Unity space shooter where players pilot a high-tech starship, battling waves of alien enemies and dodging asteroids. With epic boss fights, upgradable weapons, and stunning cosmic visuals, it’s a fight for survival in the stars!',
    featuredImageMobile: require('./spaceShoter.png'),
    featuredImageDesktop: './picture/1687482603881.jpg',
    technologies: 'uonty / c#',
    buttons: 'projectss#1',
    linkLive: 'https://stevenwafeek.github.io/Space_Shooter/',
    linkSource: 'https://github.com/StevenWafeek/Space_Shooter',
  },
  {
    name: 'Quiz Game',
    description: 'Quiz Master" is a fast-paced Unity trivia game where players answer multiple-choice questions across fun categories. With vibrant graphics, timers, and power-ups, it offers single-player and multiplayer modes for endless brain-teasing challenges!',
    featuredImageMobile: require('./quizGame.jpg'),
    featuredImageDesktop: '',
    technologies: 'uNITY / c#',
    buttons: 'projectss#2',
    linkLive: 'https://stevenwafeek.github.io/QuizGame/',
    linkSource: 'https://github.com/StevenWafeek/QuizGame',
  },
  {
    name: 'Snow boarder',
    description: 'A fast-paced arcade snowboarder built in Unity. stylized mountains, pulling off insane tricks and grinding rails. Master smooth controls to nail huge jumps and beat your best time.',
    featuredImageMobile: require('./snowBoard.jpg'),
    featuredImageDesktop: '',
    technologies: 'Unity / C#',
    buttons: 'projectss#3',
    linkLive: 'https://stevenwafeek.github.io/snowBoarder/',
    linkSource: 'https://github.com/StevenWafeek/snowBoarder',
  }
  
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