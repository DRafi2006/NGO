import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe, Star, Instagram, Facebook, ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
    { q: 'How can I join SUN as a volunteer?', a: 'Simply fill out our volunteer registration form on the Volunteer page. We review applications within 3–5 business days and will reach out with next steps.' },
    { q: 'Is my donation tax-deductible?', a: 'Yes! SUN is a registered NGO under Section 80G. You will receive a tax exemption certificate via email after your donation is confirmed.' },
    { q: 'What kind of projects can I participate in?', a: 'We run programs in education, healthcare, environmental conservation, and women empowerment. You can choose based on your skills and interests.' },
    { q: 'Can organizations partner with SUN?', a: 'Absolutely. We welcome CSR partnerships, institutional collaborations, and co-funding opportunities. Reach out to us via the Contact page.' },
    { q: 'How is the donation money used?', a: '100% of donations go directly to our programs. We maintain complete transparency and publish annual impact reports on our website.' },
];

function FAQ() {
    const [open, setOpen] = useState(null);
    return (
        <section className="py-16 md:py-24 px-4 bg-muted">
            <div className="max-w-3xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
                    <h2 className="font-playfair text-4xl font-bold mt-3">Frequently Asked Questions</h2>
                </motion.div>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                            className="bg-card rounded-2xl shadow-sm overflow-hidden">
                            <button className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-sm gap-4 hover:text-primary transition-colors"
                                onClick={() => setOpen(open === i ? null : i)}>
                                <span>{faq.q}</span>
                                {open === i ? <Minus className="w-4 h-4 shrink-0 text-primary" /> : <Plus className="w-4 h-4 shrink-0 text-muted-foreground" />}
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                        <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const stats = [
    { value: '5000+', label: 'Volunteers', icon: Users },
    { value: '120+', label: 'Projects Done', icon: Star },
    { value: '50+', label: 'Communities', icon: Globe },
    { value: '1M+', label: 'Lives Touched', icon: Heart },
];

const highlights = [
    { title: 'Education for All', desc: 'Providing quality education resources to underprivileged students across rural areas.', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80', category: 'Education' },
    { title: 'Community Health', desc: 'Free medical camps and health awareness drives in underserved communities.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', category: 'Health' },
    { title: 'Environment Drive', desc: 'Tree plantation and clean-up drives to protect and restore our natural environment.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80', category: 'Environment' },
];

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80" alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
                        <span className="inline-block bg-primary/20 border border-primary/40 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                            Student Union for Nation
                        </span>
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Empowering Youth,<br /><span className="text-accent">Building Nation</span>
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                            We are a youth-led NGO dedicated to education, community health, environmental sustainability, and youth empowerment across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/volunteer" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2">
                                Join as Volunteer <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/works" className="bg-white/15 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/25 transition-all backdrop-blur-sm">
                                Our Impact
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60">
                    <ChevronDown className="w-7 h-7 animate-bounce" />
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center text-white">
                                <s.icon className="w-7 h-7 mx-auto mb-2 opacity-80" />
                                <div className="text-3xl font-bold font-inter">{s.value}</div>
                                <div className="text-sm text-white/70 mt-1">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Mission</span>
                            <h2 className="font-playfair text-4xl font-bold mt-3 mb-6 leading-tight">Creating Lasting Change Through Youth Action</h2>
                            <p className="text-muted-foreground leading-relaxed mb-5">Student Union for Nation (SUN) is a grassroots movement of passionate young people committed to nation-building through service, awareness, and community development.</p>
                            <p className="text-muted-foreground leading-relaxed mb-8">We believe that every student has the power to be an agent of change. Our programs bridge the gap between education and real-world impact.</p>
                            <div className="flex gap-4">
                                <Link to="/about" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">Learn More</Link>
                                <Link to="/donate" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">Support Us</Link>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
                            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80" alt="Mission" className="rounded-2xl w-full h-96 object-cover shadow-2xl" />
                            <div className="absolute -bottom-5 -left-5 bg-primary text-white p-5 rounded-xl shadow-xl">
                                <div className="text-2xl font-bold">10+</div>
                                <div className="text-xs text-white/80">Years of Service</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 md:py-24 px-4 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-14">
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
                        <h2 className="font-playfair text-4xl font-bold mt-3">Our Key Initiatives</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {highlights.map((item, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="relative overflow-hidden h-52">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                    <Link to="/works" className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 hover:gap-2 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/works" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all inline-block">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 px-4 bg-secondary text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div {...fadeUp}>
                        <h2 className="font-playfair text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join thousands of students who are already making an impact. Volunteer, donate, or spread the word.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/volunteer" className="bg-white text-secondary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-all">Become a Volunteer</Link>
                            <Link to="/donate" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/15 transition-all">Donate Now</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <FAQ />

            {/* Social Media */}
            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div {...fadeUp}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Connect With Us</span>
                        <h2 className="font-playfair text-3xl font-bold mt-3 mb-8">Follow Our Journey</h2>
                        <div className="flex flex-wrap justify-center gap-5">
                            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
                                <Instagram className="w-5 h-5" /> @student_union_for_nation
                            </a>
                            <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
                                <Facebook className="w-5 h-5" /> Student Union for Nation
                            </a>
                            <a href="https://studentunionfornation.org/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
                                <Globe className="w-5 h-5" /> studentunionfornation.org
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}