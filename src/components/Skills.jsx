import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVercel, SiRender } from 'react-icons/si';
import TiltCard from './TiltCard';

const Skills = () => {
    const skills = [
        { id: 1, icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
        { id: 2, icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
        { id: 3, icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
        { id: 4, icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { id: 5, icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
        { id: 6, icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { id: 7, icon: <SiExpress />, name: 'Express', color: '#ffffff' },
        { id: 8, icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
        { id: 9, icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
        { id: 10, icon: <FaAws />, name: 'AWS', color: '#FF9900' },
        { id: 11, icon: <SiVercel />, name: 'Vercel', color: '#ffffff' },
        { id: 12, icon: <SiRender />, name: 'Render', color: '#46E3B7' },
    ];

    return (
        <div name="skills" className="w-full min-h-screen bg-space-black text-white py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-neon-purple">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        My arsenal of modern technologies and tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map(({ id, icon, name, color }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: id * 0.05, type: "spring", stiffness: 100 }}
                        >
                            <TiltCard className="h-[220px] w-full relative">
                                {/* Glass Card Container */}
                                <div className="h-full w-full bg-[#080810]/60 backdrop-blur-xl border border-white/5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/10 transition-colors duration-500">

                                    {/* 1. Ambient Background Spot (Moves on hover) */}
                                    <div
                                        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px]"
                                        style={{ background: color }}
                                    ></div>

                                    {/* 2. The 3D Floating Content */}
                                    <div
                                        style={{ transform: "translateZ(40px)" }}
                                        className="relative flex flex-col items-center justify-center z-20"
                                    >
                                        {/* THE LIQUID RING CONTAINER */}
                                        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">

                                            {/* Rotating Ring (Faint by default, Bright on hover) */}
                                            <div
                                                className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `conic-gradient(from 0deg, transparent 0deg, ${color} 360deg)`,
                                                    animation: "spin 3s linear infinite",
                                                    filter: "blur(1px)"
                                                }}
                                            ></div>

                                            {/* Glow Layer (Only visible on hover) */}
                                            <div
                                                className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"
                                                style={{
                                                    background: `conic-gradient(from 0deg, transparent 0deg, ${color} 360deg)`,
                                                    animation: "spin 3s linear infinite"
                                                }}
                                            ></div>

                                            {/* The Black Hole Center (Icon Container) */}
                                            <div className="absolute inset-[2px] bg-[#050505] rounded-full z-10 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors duration-300">

                                                {/* Icon */}
                                                <div
                                                    className="text-5xl transition-all duration-300 group-hover:scale-110"
                                                    style={{
                                                        color: color,
                                                        filter: "drop-shadow(0 0 0 transparent)" // Default no shadow
                                                    }}
                                                >
                                                    {/* Inject drop shadow on hover via style prop isn't cleanly animated in CSS filters, so we use a text-shadow effect class or inline */}
                                                    <span className="group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 block">
                                                        {icon}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text Label */}
                                        <h3 className="font-bold text-gray-500 group-hover:text-white transition-colors tracking-widest text-xs uppercase">
                                            {name}
                                        </h3>
                                    </div>

                                    {/* 3. Shine Reflection Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CSS Animation for smooth rotation */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Skills;