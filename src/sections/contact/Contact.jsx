import { Link } from "react-router-dom";
import data from "./data";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className="container contact__container">
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
