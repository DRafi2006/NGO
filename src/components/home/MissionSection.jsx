import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const items = [
    {
        icon: Target,
        title: 'Our Mission',
        text: 'To empower students and youth to take active roles in nation-building through education, community service, and social awareness.'
    },
    {
        icon: Eye,
        title: 'Our Vision',
        text: 'A united nation where every young citizen contributes towards creating an equitable, educated, and empowered society.'
    },
    {
        icon: Lightbulb,
        title: 'Our Values',
        text: 'Integrity, compassion, education, sustainability, and unity — the pillars that guide every initiative we undertake.'
    }
];

export default function MissionSection() {
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="Who We Are" title="Driven by Purpose" subtitle="We believe in the power of youth to shape the future of our nation." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                                <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground font-body leading-relaxed text-sm">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}