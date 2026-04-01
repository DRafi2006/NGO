import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-6"
        >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
            </div>
            <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground font-body">{label}</p>
        </motion.div>
    );
}