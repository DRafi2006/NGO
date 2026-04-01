import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle, center = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${center ? 'text-center' : ''}`}
        >
            {label && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold font-body uppercase tracking-wider mb-4">
                    {label}
                </span>
            )}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
            {subtitle && (
                <p className="mt-3 text-muted-foreground font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>
            )}
        </motion.div>
    );
}