import React from 'react';
import { motion } from 'framer-motion';
import { FaFreeCodeCamp } from 'react-icons/fa'; // Imported the specific brand icon
import SpotlightCard from './SpotlightCard';

const Certifications = () => {
    const certs = [
        { 
            id: 1, 
            name: "Responsive Web Design", // Change this to your specific FCC cert (e.g., JavaScript Algorithms)
            platform: "freeCodeCamp", 
            year: "2024" 
        },
    ];

    return (
        <div name="certifications" className="w-full bg-space-black text-white py-24">
            <div className="max-w-screen-xl p-4 mx-auto w-full">
                <div className="pb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
                </div>

                {/* Changed grid to flex/justify-center so the single card is centered */}
                <div className="flex flex-wrap justify-center md:justify-start gap-8">
                    {certs.map((cert) => (
                        <motion.div 
                            key={cert.id} 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ delay: cert.id * 0.1 }}
                            className="w-full max-w-md" // Limits width so the card doesn't stretch too wide
                        >
                            <SpotlightCard className="p-8 relative overflow-hidden group h-full">
                                {/* Used FaFreeCodeCamp icon */}
                                <FaFreeCodeCamp className="absolute -right-6 -top-6 text-white/5 group-hover:text-green-500/20 transition-colors duration-500" size={120} />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                                    <p className="text-neon-purple text-sm mb-4">{cert.platform}</p>
                                    <p className="text-gray-500 text-xs">{cert.year}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;