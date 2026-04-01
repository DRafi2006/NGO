import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
                    alt="Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold font-body mb-6">
                        Student Union for Nation
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
                        Empowering Youth,{' '}
                        <span className="text-secondary">Building Nation</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-background/80 font-body leading-relaxed max-w-xl">
                        Uniting students to create lasting change through community service, education, and sustainable development initiatives across India.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link to="/volunteer">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-base px-8">
                                Join Us <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link to="/donate">
                            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-body text-base px-8">
                                <Heart className="w-5 h-5 mr-2" /> Donate Now
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}