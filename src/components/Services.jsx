import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

const Services = () => {
    const services = [
        { id: 1, icon: <FaCode size={30} />, title: 'Web Development', desc: 'Custom websites built with modern technologies.' },
        { id: 2, icon: <FaLaptopCode size={30} />, title: 'Full Stack', desc: 'Scalable web apps with React, Node, and SQL/NoSQL.' },
        { id: 3, icon: <FaMobileAlt size={30} />, title: 'Responsive Design', desc: 'Interfaces that look perfect on any device.' },
        { id: 4, icon: <FaServer size={30} />, title: 'API Integration', desc: 'Connecting frontends to robust backend systems.' },
    ];

    return (
        <div name="services" className="w-full bg-space-black text-white py-24 relative">
            <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-royal-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="text-royal-blue">Services</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map(({ id, icon, title, desc }) => (
                        <SpotlightCard key={id} className="p-8 h-full">
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-neon-purple mb-6 border border-white/5">
                                {icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{title}</h3>
                            <p className="text-gray-400 leading-relaxed">{desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;