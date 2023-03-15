import { Link } from "react-router-dom";
import data from "./data";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>\
      <p>Shoot me a message via any of the links below!</p>
      <div className="container contact__container" data-aos="fade-up">
        {data.map((item) => (
          <Link to={item.link} key={item.id}>
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
