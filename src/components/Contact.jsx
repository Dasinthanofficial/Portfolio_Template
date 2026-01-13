import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen bg-space-black text-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-screen-xl p-4 mx-auto flex flex-col lg:flex-row gap-16 relative z-10">

                <div className="flex-1">
                    <h2 className="text-5xl font-bold text-white mb-6">Let's <span className="text-neon-purple">Connect</span></h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all"><FaGithub size={24} /></a>
                        <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all"><FaLinkedin size={24} /></a>
                        <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all"><FaEnvelope size={24} /></a>
                    </div>
                </div>

                <div className="flex-1">
                    <form className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <input type="text" placeholder="Your Name" className="p-4 bg-black/20 border border-white/10 rounded-lg text-white focus:border-neon-purple outline-none transition-colors" />
                        <input type="email" placeholder="Your Email" className="p-4 bg-black/20 border border-white/10 rounded-lg text-white focus:border-neon-purple outline-none transition-colors" />
                        <textarea rows="5" placeholder="Your Message" className="p-4 bg-black/20 border border-white/10 rounded-lg text-white focus:border-neon-purple outline-none transition-colors resize-none"></textarea>
                        <button className="py-4 px-8 bg-gradient-to-r from-neon-purple to-royal-blue rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;