import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to toggle glass effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Removed 'contact' from here to avoid duplicate buttons
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
    ];

    return (
        <>
            {/* Main Navbar Container - Fixed & Centered */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
            >
                {/* The Floating Dock */}
                <div
                    className={`
                        pointer-events-auto flex justify-between items-center px-6 py-3 
                        w-full max-w-5xl rounded-full border transition-all duration-500 ease-in-out
                        ${scrolled
                            ? 'bg-[#030014]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]'
                            : 'bg-transparent border-transparent'
                        }
                    `}
                >
                    {/* --- Logo Section --- */}
                    <div className="flex items-center gap-3 group cursor-pointer select-none">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-royal-blue flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-neon-purple/50 group-hover:scale-110 transition-all duration-300">
                            T
                        </div>
                        <span className="text-lg font-bold font-sans tracking-wide text-gray-200 group-hover:text-white transition-colors">
                            <Link to="home" smooth duration={500}>Portfolio</Link>
                        </span>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <ul className="hidden md:flex gap-1 bg-white/[0.02] p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                        {links.map(({ id, link }) => (
                            <li key={id}>
                                <Link
                                    to={link}
                                    smooth
                                    duration={500}
                                    spy={true}
                                    offset={-100}
                                    className="relative px-5 py-2 text-sm font-medium text-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:text-white hover:bg-white/5 block"
                                    activeClass="!text-white bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-white/5"
                                >
                                    <span className="capitalize relative z-10">{link}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* --- CTA Button (Desktop) --- */}
                    <div className="hidden md:block">
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all cursor-pointer pointer-events-auto shadow-sm"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* --- Mobile Hamburger Toggle --- */}
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer p-2 rounded-full hover:bg-white/10 text-gray-300 md:hidden transition-all pointer-events-auto"
                    >
                        {nav ? <FaTimes size={22} className="text-white" /> : <FaBars size={22} />}
                    </div>
                </div>
            </motion.nav>

            {/* --- Mobile Menu Overlay --- */}
            <AnimatePresence>
                {nav && (
                    <>
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setNav(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Floating Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-24 left-4 right-4 z-50 md:hidden origin-top"
                        >
                            <div className="bg-[#0f0c29]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden relative">
                                {/* Decorative Gradient Blob */}
                                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-neon-purple/20 rounded-full blur-[80px] pointer-events-none"></div>

                                <ul className="flex flex-col gap-2 relative z-10">
                                    {links.map(({ id, link }) => (
                                        <li key={id}>
                                            <Link
                                                onClick={() => setNav(false)}
                                                to={link}
                                                smooth
                                                duration={500}
                                                offset={-80}
                                                className="flex items-center justify-between p-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all capitalize group"
                                            >
                                                {link}
                                                <span className="w-2 h-2 rounded-full bg-neon-purple opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#B57BFF]"></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <Link
                                        onClick={() => setNav(false)}
                                        to="contact"
                                        smooth
                                        duration={500}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-purple to-royal-blue text-center text-white font-bold shadow-lg flex justify-center items-center hover:scale-[1.02] transition-transform active:scale-[0.98]"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;