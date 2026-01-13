import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

const Certifications = () => {
    const certs = [
        { id: 1, name: "React Certified", platform: "HackerRank", year: "2024" },
        { id: 2, name: "AWS Practitioner", platform: "Amazon Web Services", year: "2023" },
        { id: 3, name: "Full Stack Bootcamp", platform: "Udemy", year: "2023" },
    ];

    return (
        <div name="certifications" className="w-full bg-space-black text-white py-24">
            <div className="max-w-screen-xl p-4 mx-auto w-full">
                <div className="pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8">
                    {certs.map((cert) => (
                        <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: cert.id * 0.1 }}>
                            <SpotlightCard className="p-8 relative overflow-hidden group">
                                <FaCertificate className="absolute -right-6 -top-6 text-white/5 group-hover:text-neon-purple/10 transition-colors duration-500" size={120} />
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