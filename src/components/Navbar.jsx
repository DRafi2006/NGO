import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Instagram, Facebook, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Works', path: '/works' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
                        </div>
                        <span className="font-heading font-bold text-lg text-foreground hidden sm:block">Student Union for Nation</span>
                        <span className="font-heading font-bold text-lg text-foreground sm:hidden">SUN</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/volunteer">
                            <Button size="sm" variant="outline" className="font-body">Volunteer</Button>
                        </Link>
                        <Link to="/donate">
                            <Button size="sm" className="bg-secondary hover:bg-secondary/90 font-body">
                                <Heart className="w-4 h-4 mr-1" /> Donate
                            </Button>
                        </Link>
                        <div className="flex items-center gap-1 ml-2">
                            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://studentunionfornation.org/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Globe className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-card border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-body font-medium transition-colors ${location.pathname === link.path
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-muted'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3 flex gap-2">
                                <Link to="/volunteer" onClick={() => setOpen(false)} className="flex-1">
                                    <Button variant="outline" className="w-full font-body">Volunteer</Button>
                                </Link>
                                <Link to="/donate" onClick={() => setOpen(false)} className="flex-1">
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 font-body">
                                        <Heart className="w-4 h-4 mr-1" /> Donate
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}