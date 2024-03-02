/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import Discription from "@/components/discription";

function Contact (){
return(
    <><div className={styles.main}>
              <Discription />
    </div>
    <div>
    <div>
      <h2 className="contact-header">Contact me</h2>
      <p>
        If you have an application you are interested in developing, a feature
        that you need built or a project that needs coding. I'd love to help
        with it!
      </p>
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
      </div>
    </div>
    </div>
</>
)
}
    export default Contact