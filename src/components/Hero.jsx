import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name="home" className="h-screen w-full bg-space-black relative flex flex-col justify-center items-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 relative z-10 text-center">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-4 py-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-xs font-bold text-neon-purple tracking-wider backdrop-blur-md mb-6 inline-block uppercase shadow-[0_0_15px_rgba(181,123,255,0.3)]">
                        Seeking Internship Opportunities
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-royal-blue">Thilakshiya</span>. <br />
                    MERN Stack Developer.
                </motion.h1>

                {/* Bio / Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    I design and build clean, scalable web applications. Freshly graduated from MERN stack training and ready to bring value to your team through an internship.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="projects" smooth duration={500} className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-white/20">
                        View My Work
                    </Link>
                    <a href="/resume.pdf" download className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                        Download CV
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;