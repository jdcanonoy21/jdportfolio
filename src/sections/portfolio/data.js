import Image1 from '../../assets/royalrealty.jpg';
import Image2 from '../../assets/apollos.jpg';
import Image4 from '../../assets/inkstone.jpg';
import Image3 from '../../assets/freelance-logos.jpg';
import Image5 from '../../assets/ramesesinc.jpg';
import Image7 from '../../assets/etracs.jpg';

const data = [
  {
    id: 1,
    category: 'Web Development',
    image: Image1,
    title: 'RoyalRealty Concept Website',
    desc: 'This website is a concept website that I made while learning more about Google Firebase using React. Basically, this website allows you to sign in and sign up using your Gmail account, and lets you post a house for sale or for rent. All the data will be saved in the Firebase database. This website is fully functioning, and it is a clone of a realty website out there. I deployed it on Vercel, a cloud platform service company, which is similar to Netlify. You check the code on GitHub and the live demo below. ',
    demo: 'https://royalrealty.vercel.app/',
    github: 'https://github.com/jdcanonoy21/realty',
    alt: 'Royal realty a concept website',
    tools: ['React', 'Firebase'],
  },
  {
    id: 2,
    category: 'Freelance',
    image: Image2,
    title: 'Apollos Travel Services',
    desc: 'This website is one of my freelance projects. I helped them with branding and other marketing materials. I designed and conceptualized this website using Figma, then I converted it into Webflow. Webflow is a powerful platform for creating websites without code, but it requires that you know how HTML and CSS work, especially in layout, such as flex and grid.',
    demo: 'https://apollostravel.webflow.io/',
    alt: 'Apollos travel frontend design image',
    tools: ['Photoshop', 'Figma', 'Webflow'],
  },

  {
    id: 3,
    category: 'graphics',
    image: Image3,
    title: 'Freelance Logo Design',
    desc: 'I created some of my logos using Illustrator, but I usually start in Photoshop. After I have the concept I want, I convert it into Illustrator for the final design. Sometimes, I also use Adobe XD for app icons.',
    demo: '',
    github: '',
    alt: 'Freelance Logo Design',
    tools: ['Photoshop', 'Illustrator', 'XD'],
  },
  {
    id: 4,
    category: 'frontend',
    image: Image4,
    title: 'Inkstone',
    desc: 'This website is one of my freelance projects, and I also made the logo. The website was made in WordPress, but I designed it first in Figma. After designing some of the pages, I turned it over to the client. Some pages were continued by their IT employee.',
    demo: '',
    github: '',
    alt: 'Freelance Website Design Inkstone',
    tools: ['Photoshop', 'Figma', 'Wordpress'],
  },
  {
    id: 5,
    category: 'frontend',
    image: Image5,
    title: 'Rameses Inc Website',
    desc: 'I created this website using ANUBIS with Bootstrap in 2016. ANUBIS is a platform based on Groovy developed by the company. Despite being just a one-page website, it had a significant impact on me as it marked the beginning of my journey in website design.',
    demo: 'https://www.ramesesinc.com/',
    github: '',
    alt: 'Rameses Inc frontend design image',
    tools: ['Photoshop', 'Anubis', 'Bootstrap'],
  },
  {
    id: 7,
    category: 'frontend',
    image: Image7,
    title: 'Etracs Website',
    desc: 'This website was also one of my first website designs created using ANUBIS with Bootstrap.',
    demo: 'https://etracs.org/index',
    github: 'https://github.com/jdcanonoy21/etracsorg.git',
    alt: 'etracs frontend design image',
    tools: ['Photoshop', 'Anubis', 'Groovy', 'Bootstrap'],
  },
];

export default data;
