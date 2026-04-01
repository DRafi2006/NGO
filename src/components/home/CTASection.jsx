import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80"
                        alt="Join us"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/85" />
                    <div className="relative py-16 md:py-24 px-8 md:px-16 text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto mb-8">
                            Join hundreds of students who are already creating positive change in their communities.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/volunteer">
                                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-base px-8">
                                    Become a Volunteer <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/donate">
                                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
                                    <Heart className="w-5 h-5 mr-2" /> Support Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}