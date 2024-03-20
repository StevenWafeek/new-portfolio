/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import Discription from "@/components/discription";
import { FaTwitter, FaLinkedinIn, FaGithub, FaHandPeace } from 'react-icons/fa';
import './contact.css';

function Contact (){
return(
    <><div className={styles.main}>
              <Discription />
    </div>
    <div className="contact-container">
    <ul className="Icon">
      <li>
        <a href="https://twitter.com/steven_hakeem" target="_blank" rel="noopener">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/steven-wafeek-b629341b6/" target="_blank" rel="noopener">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="https://github.com/StevenWafeek" target="_blank" rel="noopener">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://wellfound.com/u/steven-wafeek" target="_blank" rel="noopener">
          <FaHandPeace />
        </a>
      </li>

    </ul>
      <button id="resume">
        <a href="https://drive.google.com/file/d/1aLA6Ejy3iC2H9hWyj-QQc0aKXgIdQKn4/view?usp=sharing" target="_blank" rel="noopener">Get my resume</a>
      </button>
    <div className="contactme">
      <h2 className="contact-header">CONTACT ME</h2>
      <div className="contact-form">
        <form action="https://formspree.io/f/mlekpene" method="post" className="form">
          <input
            className="name"
            type="text"
            maxLength={30}
            placeholder="Lorem Ipsum"
            required
            name="name"
          />
          <input
            className="email"
            type="email"
            name="email"
            placeholder="loremipsum@gmail.com"
            required
          />
          <textarea
            className="textarea"
            name="massage"
            cols={30}
            rows={10}
            maxLength={500}
            required
            placeholder="Write your message here..."
          ></textarea>
          <button type="submit" className="form-button">
            Get in touch
          </button>
        </form>
        <div className="contact-info">
          <p>
            If you have an application you are interested in developing, a feature
            that you need built or a project that needs coding. I'd love to help
            with it!
          </p>
          <h2>Email.</h2>
          <p>steven.wafeek@gmail.com</p>
          <h2>Phone.</h2>
          <p>+2 01503396332</p>
          <h2>Adress.</h2>
          <p>Elgesh st. assiut. egypt</p>

        </div>
      </div>
    </div>
    </div>
</>
)
}
    export default Contact