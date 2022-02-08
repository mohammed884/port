import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion'
export default function Header({ homeRef, whyMeRef, contactRef, projectsRef }) {
    const liVarients = {
        hidden: {
            x: -15,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }
    const [isOpen, setIsOpen] = useState(false);
    const refs = [
        homeRef,
        projectsRef,
        whyMeRef,
        contactRef,
        homeRef,
    ];
    const links = [
        { path: '#home', title: 'Home' },
        { path: '#project', title: 'Project', },
        { path: '#whyme', title: 'Why Me' },
        { path: '#contact', title: 'Contact Me', },
    ];
    const scrollDown = (index) => {
        if (!refs[index].current) return;
        refs[index].current.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(!isOpen);
    }
    return (
        <header className="w-[100%] h-[60px] fixed z-20" style={{ background: '#02010A' }}>

            <div className="w-[85%] h-[100%] mx-auto flex sm:items-center">
                <div className="w-[1.2rem] sm:block lg:hidden">
                    {
                        !isOpen
                            ?
                            <FontAwesomeIcon
                                onClick={() => setIsOpen(!isOpen)}
                                icon={faBars}
                                className="text-slate-200 cursor-pointer" />
                            :
                            <FontAwesomeIcon
                                onClick={() => setIsOpen(!isOpen)}
                                icon={faTimes}
                                className="text-slate-200 cursor-pointer" />
                    }
                </div>
                <ul className={`
                w-[50%] 
                h-[100%] 
                overflow-hidden
                sm:hidden
                lg:flex 
                md:justify-between 
                md:items-center 
                md:flex-row`}>
                    {
                        links.map(({ path, title }, index) =>
                        (
                            <li key={index}>
                                <a
                                    href={path}
                                    className="hover:text-gray-400"
                                    onClick={() => scrollDown(index)}>
                                    {title}
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </div>
            {
                isOpen
                &&
                <ul className={`
                w-[85%] 
                h-[330px]
                bg-bg_primary
                overflow-hidden
                sm:flex
                sm:flex-col
                sm:justify-between
                lg:hidden
                mx-auto
                z-30`}>
                    {
                        links.map(({ path, title }, index) =>
                        (
                            <motion.li key={index} variants={liVarients} initial="hidden" animate="visible">
                                <a
                                    href={path}
                                    className="hover:text-gray-400"
                                    onClick={() => scrollDown(index)}>
                                    {title}
                                </a>
                            </motion.li>
                        ))
                    }
                </ul>
            }
        </header >
    );
}
