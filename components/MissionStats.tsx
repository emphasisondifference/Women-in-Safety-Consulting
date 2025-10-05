import React from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../constants';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            staggerChildren: 0.2 
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
};

const MissionStats: React.FC = () => {
    return (
        <motion.section 
            id="mission" 
            className="mission-stats"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container">
                <motion.h2 variants={itemVariants}>Our Mission</motion.h2>
                <motion.p variants={itemVariants}>
                    To empower women in safety professions through mentoring, education, and community, fostering a more inclusive future for all.
                </motion.p>
                <motion.div className="stats-container" variants={sectionVariants}>
                    {STATS_DATA.map((stat, index) => (
                        <motion.div key={index} className="stat-item" variants={itemVariants}>
                            <div className="stat-circle">
                                <span className="value">{stat.value}</span>
                            </div>
                            <p className="label">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MissionStats;
