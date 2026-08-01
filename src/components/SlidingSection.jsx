import React, { useRef } from 'react';
import { ImBlogger2 } from "react-icons/im";
import { motion, useScroll, useTransform } from "framer-motion"; 
import Card from './Cart';

const SlidingSection = () => {
    const containerRef = useRef(null);

    // Scroll progress track karne ke liye
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Scroll ke hisaab se rows ki position translate karein
    const xRow1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const xRow2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const xRow3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

 

    const cardsArray = Array.from({ length: 12 });

    return (
        <div ref={containerRef} className="w-full bg-gray-900 flex flex-col my-4 gap-6 overflow-hidden py-8 px-4">
            <p className="text-center text-2xl text-white my-2 font-bold">OUR Companies</p>

            {/* Row 1 - Left ki taraf slide hogi */}
            <motion.div 
                style={{ x: xRow1 }} 
                className="flex items-center gap-4 px-6"
            >
                {cardsArray.map((_, i) => (
                    <Card key={`row1-${i}`} label="Blogger" />
                ))}
            </motion.div>

            {/* Row 2 - Right ki taraf slide hogi */}
            <motion.div 
                style={{ x: xRow2 }} 
                className="flex items-center gap-4 px-6"
            >
                {cardsArray.map((_, i) => (
                    <Card key={`row2-${i}`} label="Blogger" />
                ))}
            </motion.div>

            {/* Row 3 - Fast Left ki taraf slide hogi */}
            <motion.div 
                style={{ x: xRow3 }} 
                className="flex items-center gap-4 px-6"
            >
                {cardsArray.map((_, i) => (
                    <Card key={`row3-${i}`} label="Blogger" />
                ))}
            </motion.div>
        </div>
    );
};

export default SlidingSection;