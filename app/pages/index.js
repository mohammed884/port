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
      x: 350,
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
      <main className="w-[100%] min-h-[100vh] bg-bg_primary scroll-smooth overflow-hidden">
        <Header
          homeRef={homeRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          whyMeRef={whyMeRef}
          skillsRef={skillsRef}
        />
        {/* Links */}
        <div className="sm:w-[18px] md:w-[26px] lg:w-[29px] h-[35vh] flex flex-col justify-between fixed sm:right-2 md:right-5 top-[40%] ">
          {
            socialLinks.map(({ link, title, icon }, index) =>
              <a href={link} title={title} rel="noreferrer" target="_blank" key={index} className="text-slate-100 hover:text-gray-400">
                <FontAwesomeIcon icon={icon} />
              </a>
            )
          }
        </div>

        <div className="rtl w-[85%] h-[100vh] flex sm:flex-col md:flex-row sm:justify-around md:justify-between items-center relative mx-auto" ref={homeRef}>
          <div className="sm:w-[93%] md:w-[44%] rtl">
            <h1 className="sm:text-4xl md:text-4xl lg:text-4xl text-blue-500 font-bold mb-2">
              <span className="text-3xl font-thin text-text_primary">مرحبا بالجميع👋</span>
              <br />
              مطور و مصمم مواقع فريدة من نوعها
            </h1>
            <p className="text-slate-100 text-lg">
              <span className="opacity-90">
                اسمي محمد عبدالعزيز من العراق.
                <br />
                اشتغل بمجال الشغل الحر و اقوم بصناعة المحتوى عن البرمجة و التصميم و البزنز
                <br />
                سوف اقوم بمناقشة فكرة مشروعك و العمل عليها من اجل جعلها حقيقة بافضل صورة ممكنة
              </span>
              <br />
              <span className="text-[.9rem] font-bold mt-2">اضغط على السهم من اجل المزيد💖</span>
            </p>
            <motion.div
              variants={arrowVarients}
              initial="hidden"
              animate="visible"
              transition="transition"
              className="text-[#F02727] hover:text-red-700 md:w-5 sm:w-[1rem] sm:mt-[3vh] lg:mt-[14vh]"
              onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })} >
              <FontAwesomeIcon icon={faArrowDown} className="cursor-pointer" />
            </motion.div>
          </div>
          <div className="md:w-[35%] md:block sm:hidden rtl text-center">
            <Image src="/svgs/home.svg"
              alt="home svg"
              loading='lazy'
              width="375"
              height="375"
              responsive="true" />
          </div>
        </div>
        <div ref={skillsRef} className="h-16 mb-4"></div>
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
