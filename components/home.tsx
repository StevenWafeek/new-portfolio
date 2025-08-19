/* eslint-disable react/no-unescaped-entities */
'use client'

import Discription from "@/components/discription";
import './discription.css';
import Image from 'next/image'
import { useState } from "react";
import myImage from './pictures/5708995.webp';
import codkit from './pictures/Codekit.png';
import GitHub from './pictures/github-logo.png';
import Unity from './pictures/5969347.png';
import html from './pictures/Ellipse1.png';
import css from './pictures/Ellipse2.png';
import js from './pictures/Ellipse3.png';
import CSharp from './pictures/CSHARP.png';
import Bs from './pictures/bootstrap-logo-shadow.png';
import next from './pictures/next-js-icon-512x512-zuauazrk.png';
import tailwind from './pictures/tailwind.png';
import redux from './pictures/redux.png';
import react from './pictures/react-3.png';

function HomePage(){

    const [showSkills, setShowSkills] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    };
    const [showLanguages, setshowLanguages] = useState(false);

    const toggleLanguages = () => {
        setshowLanguages(!showLanguages);
    };
    const [showFrameworks, setshowFrameworks] = useState(false);

    const toggleFrameworks = () => {
        setshowFrameworks(!showFrameworks);
    };

    return (
        <>
            <Discription />
            <div className="Home-summary">
                <span>
                    <Image
                            src={myImage}
                            alt="pic"
                            width={120}
                            height={120}
                            />
                </span>
                <div>
                    <h1 className='typing-animation'>Hello there, I'm Steven ...</h1>
                    <p>Passionate 2D Unity Developer skilled in C#,
                         focused on building immersive gameplay and clean, efficient code.
                          Eager to join a talented team to create amazing games and grow as a developer.</p>
                </div>
            </div>
            <div className="buttonskills">
                <h2>About Myself</h2>
                    <ul id="AboutMe-info">
                    <li>I finished a scholarship in my country called LINKME in Front-end development.</li>
                        <li>I have completed comprehensive coursework on <a href="https://www.udemy.com/" target="_blank" rel="noopener">Udemy</a> to master these skills.</li>
                    <li>Now, I'm looking for a new opportunity.</li>
                </ul>
                <div className="all-button">
                    <div className="capabilities">
                    <button onClick={toggleSkills} className={showSkills ? 'aboutButn active' : 'aboutButn'}> Skills</button>
                    <div className={showSkills ? 'skillTree active' : 'skillTree'}>
                            <ul>
                            <li className="tooltip">                    <Image
                            src={codkit}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">codkit</span>
                            </li>
                                <li className="tooltip">
                                    <Image
                                    src={GitHub}
                                    alt="github"
                                    width={40}
                                    height={40}
                                    />
                                    <span className="tooltip-text">GitHub</span>
                                    </li>
                                    <li className="tooltip">                     <Image
                            src={Unity}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">Unity</span>
                            </li>
                            </ul>
                        </div>

                    </div>
                    <div className="capabilities">
                    <button onClick={toggleLanguages} className={showLanguages ? 'aboutButn active' : 'aboutButn'}> Languages</button>

                            <div className={showLanguages ? 'LanguagesTree active' : 'LanguagesTree'}>
                            <ul>
                            <li className="tooltip">                    <Image
                            src={html}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">html</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={css}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">css</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={js}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">JavaScript</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={CSharp}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">C#</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                        <div className="capabilities">
                        <button onClick={toggleFrameworks} className={showFrameworks ? 'aboutButn active' : 'aboutButn'}> Frameworks</button>
                            <div className={showFrameworks ? 'FrameworksTree active' : 'FrameworksTree'}>

                                <ul>
                                <li className="tooltip">                    <Image
                            src={Bs}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">Bootstrap</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={next}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">Next</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={redux}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">Redux</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={react}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">React</span>
                            </li>
                            <li className="tooltip">                    <Image
                            src={tailwind}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">Tailwind</span>
                            </li>
                                </ul>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    );
}

export default HomePage;
