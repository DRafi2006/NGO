import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
                            </div>
                            <span className="font-heading font-bold text-lg">SUN</span>
                        </div>
                        <p className="text-sm opacity-70 font-body leading-relaxed">
                            Student Union for Nation — Empowering communities through youth-driven initiatives, education, and sustainable development.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://studentunionfornation.org/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
                        <div className="space-y-3">
                            {[{ l: 'About Us', p: '/about' }, { l: 'Our Works', p: '/works' }, { l: 'Gallery', p: '/gallery' }, { l: 'Blog', p: '/blog' }, { l: 'Contact', p: '/contact' }].map(link => (
                                <Link key={link.p} to={link.p} className="block text-sm opacity-70 hover:opacity-100 transition-opacity font-body">{link.l}</Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Get Involved</h4>
                        <div className="space-y-3">
                            <Link to="/volunteer" className="block text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Become a Volunteer</Link>
                            <Link to="/donate" className="block text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Make a Donation</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 mt-0.5 opacity-70" />
                                <span className="text-sm opacity-70 font-body">info@studentunionfornation.org</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 mt-0.5 opacity-70" />
                                <span className="text-sm opacity-70 font-body">+91-XXXXXXXXXX</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 opacity-70" />
                                <span className="text-sm opacity-70 font-body">India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm opacity-50 font-body">© 2026 Student Union for Nation. All rights reserved.</p>
                    <p className="text-sm opacity-50 font-body flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-400" /> for the nation
                    </p>
                </div>
            </div>
        </footer>
    );
}