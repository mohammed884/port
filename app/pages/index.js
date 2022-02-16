import Head from 'next/head'
import Header from '../components/header'
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Projects from '../components/projects';
import Why_me from '../components/why_me'
import Footer from '../components/Footer';
import Contact_me from '../components/contact_me';
import Skills from '../components/skills';
export default function Home() {
  const [isWinner, setIsWinner] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState('');
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const whyMeRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  //VARIRENTS
  const arrowVarients = {
    hidden: {
      x: -350,
    },
    visible: {
      x: 0,
      transition: {
        delay: .6,
      },
    },

  }

  const socialLinks = [
    {
      link: 'https://github.com/mohammed884',
      title: 'Github',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/mohammed-abdulaziz-964a8021b/',
      title: 'Linkedin',
      icon: faLinkedin,
    },
    {
      link: 'https://www.youtube.com/channel/UCDi3iYOBUH0gWMH3ODvkSeQ',
      title: 'Youtube',
      icon: faYoutube,
    },
    {
      link: 'https://www.instagram.com/1kdd1/',
      title: 'Instagram',
      icon: faInstagram,
    },
  ];
  return (
    <div>
      <Head>
        <title>Mohammed Abdulaziz</title>
        <meta name="description" content="Hello i'm a Web Developer and content creator and this is my portfolio!/ مرحبا بالجميع انا مبرمج ويب وصانع محتوى الق نظرة على معرض اعمالي!" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="w-[100%] min-h-[100vh] bg-bg_primary scroll-smooth">
        <Header
          homeRef={homeRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          whyMeRef={whyMeRef}
          skillsRef={skillsRef}
        />
        {/* Links */}
        <div className="sm:w-[20px] md:w-[27px] h-[35vh] flex flex-col justify-between fixed sm:right-2 md:right-5 top-[40%] ">
          {
            socialLinks.map(({ link, title, icon }, index) =>
              <a href={link} title={title} rel="noreferrer" target="_blank" key={index} className="text-slate-200 hover:text-gray-400">
                <FontAwesomeIcon icon={icon} />
              </a>
            )
          }
        </div>

        <div className="w-[85%] h-[100vh] flex sm:flex-col md:flex-row sm:justify-around md:justify-between items-center relative mx-auto" ref={homeRef}>
          <div className="sm:w-[93%] md:w-[44%]" >
            <h1 className="sm:text-4xl md:text-4xl lg:text-5xl text-text_primary mb-12 font-bold">Hello 👋,
              <br />
              I’m a Freelancer Web Developer
            </h1>
            <p className="text-slate-300">
              <span className="opacity-90">I’m Mohammed Abdulaziz i’m Web developer also i’m a content creator on instagram and youtube i teach people about programming</span>
              <br />
              <span className="font-bold mt-1">Scroll For More 💖</span>
            </p>
            <motion.div
              variants={arrowVarients}
              initial="hidden"
              animate="visible"
              transition="transition"
              className="text-blue-500 hover:text-blue-800 md:w-5 sm:w-[1rem] sm:mt-[3vh] lg:mt-[14vh]"
              onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })} >
              <FontAwesomeIcon icon={faArrowDown} className="cursor-pointer" />
            </motion.div>
          </div>
          <div className="md:w-[35%] md:block sm:hidden">
            <Image src="/svgs/home.svg"
              alt="home svg"
              loading='lazy'
              width="375"
              height="375"
              responsive="true" />
          </div>
        </div>
        <div ref={skillsRef} className="h-16"></div>
        <Skills skillsRef={skillsRef} projectsRef={projectsRef} />
        <div ref={projectsRef} className="h-16"></div>
        <Projects />
        <div ref={whyMeRef} className="h-16"></div>
        <Why_me />
        <Contact_me contactRef={contactRef} />
        <Footer />
      </main>
    </div>
  )
}
