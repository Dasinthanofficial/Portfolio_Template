import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

// ----------------------------------------------------------------------
// IMPORT YOUR IMAGES HERE
// import ecommerceImg from '../assets/ecommerce.png';
// import dashboardImg from '../assets/dashboard.png';
// ----------------------------------------------------------------------

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern shopping experience featuring a fully functional shopping cart, secure checkout via Stripe, and user authentication.',
            tech: ['React', 'Redux', 'Stripe', 'Node.js'],
            code: '#',
            demo: '#',
            // Replace with your imported image variable (e.g., image: ecommerceImg)
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop', 
            // Keeps the color theme overlay
            color: 'from-violet-600 to-indigo-600'
        },
        {
            id: 2,
            title: 'SaaS Analytics Dashboard',
            description: 'Real-time data visualization dashboard for tracking business metrics. Includes interactive charts, data filtering, and dark mode.',
            tech: ['Next.js', 'Tailwind', 'Chart.js', 'Prisma'],
            code: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            id: 3,
            title: 'Real-Time Chat App',
            description: 'Instant messaging application allowing users to create private rooms, share images, and view active status in real-time.',
            tech: ['Socket.io', 'Express', 'React', 'MongoDB'],
            code: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop',
            color: 'from-emerald-400 to-teal-600'
        },
        {
            id: 4,
            title: 'AI Image Generator',
            description: 'A creative tool that leverages the OpenAI DALL-E API to generate unique, high-quality images based on user text prompts.',
            tech: ['OpenAI API', 'MERN Stack', 'Cloudinary'],
            code: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1365&auto=format&fit=crop',
            color: 'from-orange-400 to-purple-600'
        },
    ];

    return (
        <div name="projects" className="w-full bg-space-black text-white py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            {/* Ambient ambient glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-royal-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-screen-xl p-4 mx-auto w-full relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-neon-purple">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A selection of projects that showcase my technical skills in building complex web applications.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full flex flex-col group rounded-3xl border border-white/5 bg-[#080810]/50 backdrop-blur-md hover:border-white/10 transition-all duration-500">
                                
                                {/* Image Area */}
                                <div className="h-64 w-full relative overflow-hidden rounded-t-3xl">
                                    
                                    {/* 1. The Project Image */}
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />

                                    {/* 2. Color Tint Overlay (Keeps the aesthetic consistent) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-60 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* 3. Dark Fade at bottom (For text readability) */}
                                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#080810] via-[#080810]/80 to-transparent"></div>

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 shadow-lg">
                                        Full Stack
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-grow -mt-8 relative z-10">
                                    
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors duration-300 flex items-center gap-2">
                                            {project.title}
                                            <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 group-hover:border-neon-purple/30 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-sm font-semibold hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                        >
                                            <FaGithub className="text-gray-400 group-hover/btn:text-white transition-colors" /> 
                                            Source Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-neon-purple/20 to-royal-blue/20 border border-neon-purple/30 text-center text-sm font-semibold hover:border-neon-purple hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-white shadow-[0_0_15px_rgba(124,58,237,0.1)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                                        >
                                            <FaExternalLinkAlt /> 
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;