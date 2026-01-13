import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import SpotlightCard from './SpotlightCard';

const About = () => {
    // Stats tailored for a Fresher / Intern Seeker
    const stats = [
        { id: 1, label: 'Projects Built', value: '10+' },
        { id: 2, label: 'Tech Stack', value: 'MERN' },
        { id: 3, label: 'Status', value: 'Open to Work' },
    ];

    return (
        <div name="about" className="w-full min-h-screen bg-space-black text-white py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>

            <div className="max-w-screen-xl p-4 mx-auto flex flex-col w-full h-full relative z-10">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        About <span className="text-neon-purple">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-royal-blue rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-16 items-center mt-10">

                    {/* Left Col: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <SpotlightCard className="p-2 rounded-2xl bg-[#0F0C29] border border-white/10 relative group">
                            {/* Gradient Border Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-purple to-royal-blue rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>

                            <div className="relative rounded-xl overflow-hidden aspect-square w-full max-w-[350px]">
                                <img src={profileImg} alt="Thilakshiya" className="object-cover w-full h-full duration-500 group-hover:scale-105" />
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Right Col: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 flex flex-col gap-6"
                    >
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Ready to launch my career as a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-royal-blue">
                                Full Stack Developer.
                            </span>
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Hello! I'm <span className="text-white font-semibold">Thilakshiya</span>. I have successfully mastered the <span className="text-neon-purple font-medium">MERN Stack (MongoDB, Express, React, Node.js)</span> and built a diverse portfolio of web applications. My journey has been fueled by a relentless drive to learn and a passion for creating seamless user experiences.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am now actively seeking an <span className="text-white font-semibold underline decoration-neon-purple underline-offset-4">Internship</span> opportunity where I can apply my skills, contribute to real-world projects, and continue growing as a developer alongside a talented team.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                            {stats.map(({ id, label, value }) => (
                                <div key={id} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-neon-purple/50 transition-colors duration-300">
                                    <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-royal-blue whitespace-nowrap">
                                        {value}
                                    </span>
                                    <span className="text-sm text-gray-400 mt-1 text-center uppercase tracking-wide">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;