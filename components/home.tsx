/* eslint-disable react/no-unescaped-entities */
'use client'

import Discription from "@/components/discription";
import './discription.css';
import Image from 'next/image'
import myImage from './5708995.webp';
import codkit from './Codekit.png';
import GitHub from './github-logo.png';
import webpack from './webpacklogo.png';
import { useState } from "react";

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
                    <p>Microverse graduate and software engineer passionate about building scalable web applications looking for a job in a reputable company as a web developer to enhance my knowledge,
                        grow as a developer,
                        and benefit the company.</p>
                </div>
            </div>
            <div className="buttonskills">
                <h2>About Myself</h2>
                    <ul id="AboutMe-info">
                    <li>I finished a scholarship in my country called LINKME in Front-end development.</li>
                    <li>I finished <a href="https://www.microverse.org/" target="_blank" rel="noopener">Microverse.</a></li>
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
                            src={webpack}
                            alt="pic"
                            width={40}
                            height={40}
                            />
                            <span className="tooltip-text">webpack</span>
                            </li>
                            </ul>
                        </div>

                    </div>
                    <div className="capabilities">
                    <button onClick={toggleLanguages} className={showLanguages ? 'aboutButn active' : 'aboutButn'}> Languages</button>

                            <div className={showLanguages ? 'LanguagesTree active' : 'LanguagesTree'}>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </div>
                    </div>
                        <div className="capabilities">
                        <button onClick={toggleFrameworks} className={showFrameworks ? 'aboutButn active' : 'aboutButn'}> Frameworks</button>
                            <div className={showFrameworks ? 'FrameworksTree active' : 'FrameworksTree'}>

                                <ul>
                                    <li>Skill 1</li>
                                    <li>Skill 2</li>
                                    <li>Skill 3</li>
                                </ul>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    );
}

export default HomePage;
