import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-700 text-white p-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p>&copy; 2024 ChatBot with Maximum IQ. All rights reserved.</p>
            <p>Created by Aman Taneja</p>
            <a
                href="mailto:contact@chatbotwithmaxiq.com"
                className="text-blue-400 underline"
            >
                Contact Us
            </a>
        </motion.footer>
    );
};

export default Footer;
