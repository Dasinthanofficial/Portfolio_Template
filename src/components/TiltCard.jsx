import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className={`relative group rounded-xl ${className}`}
        >
            {/* Gradient Border Background */}
            <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple to-royal-blue p-[1px] -z-10 group-hover:opacity-100 opacity-50 transition-opacity duration-300"
                style={{ transform: "translateZ(-10px)" }}
            >
                {/* The card background covers the inner part, leaving only 1px border */}
                <div className="w-full h-full bg-[#121212] rounded-xl"></div>
            </div>

            {/* Inner Card Content */}
            <div className="relative h-full w-full bg-[#121212]/90 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center overflow-hidden border border-white/5">

                {/* Glare/Sheen Effect - simplified reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />

                {/* Floating Content with TranslateZ */}
                <div style={{ transform: "translateZ(50px)" }} className="z-10 flex flex-col items-center">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default TiltCard;
