import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Users, Award, Linkedin, Mail } from 'lucide-react';

function CountUp({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    start += step;
                    if (start >= target) { setCount(target); clearInterval(timer); }
                    else setCount(start);
                }, 20);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const team = [
    { name: 'Arjun Sharma', role: 'Founder & President', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', bio: 'Arjun founded SUN in 2014 with a vision to mobilize India\'s youth for nation-building. A social entrepreneur at heart.', email: 'arjun@sun.org' },
    { name: 'Priya Patel', role: 'Vice President', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', bio: 'Priya leads our strategic partnerships and drives community health initiatives across 10+ states.', email: 'priya@sun.org' },
    { name: 'Rahul Singh', role: 'Program Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80', bio: 'Rahul oversees project execution and volunteer training, ensuring every program creates measurable impact.', email: 'rahul@sun.org' },
    { name: 'Sneha Gupta', role: 'Community Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80', bio: 'Sneha connects grassroots communities with our programs, specializing in women\'s empowerment initiatives.', email: 'sneha@sun.org' },
];

const stats = [
    { value: 5000, suffix: '+', label: 'Volunteers' },
    { value: 120, suffix: '+', label: 'Projects' },
    { value: 10, suffix: '+', label: 'Years Active' },
    { value: 1000000, suffix: '+', label: 'Lives Touched' },
];

const timeline = [
    { year: '2014', title: 'SUN Founded', desc: 'A small group of college students started SUN in a university campus in Delhi.' },
    { year: '2016', title: 'First 1000 Volunteers', desc: 'Rapid growth as the movement expanded to 5 states and launched education camps.' },
    { year: '2018', title: 'Health Initiative Launch', desc: 'Partnered with medical colleges to run free health camps across rural Rajasthan and UP.' },
    { year: '2020', title: 'COVID Relief Drive', desc: 'Over 500 volunteers mobilized to distribute essentials to 50,000+ affected families.' },
    { year: '2022', title: '50,000 Trees Planted', desc: 'Our largest environmental drive spanning 15 states in a single weekend.' },
    { year: '2024', title: '1 Million Lives Touched', desc: 'SUN crossed a historic milestone of impacting over 1 million lives across India.' },
];

const values = [
    { icon: Target, title: 'Mission', desc: 'To empower students and youth to serve society through education, health, environment, and community development programs.' },
    { icon: Eye, title: 'Vision', desc: 'A nation where every young person is an active contributor to the social, economic, and environmental well-being of their community.' },
    { icon: Users, title: 'Community', desc: 'We build inclusive communities that uplift everyone, leaving no voice unheard and no person behind.' },
    { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of integrity, transparency, and measurable impact in all our work.' },
];

function Timeline() {
    const [active, setActive] = useState(0);
    return (
        <section className="py-16 md:py-24 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Journey</span>
                    <h2 className="font-playfair text-4xl font-bold mt-3">10 Years of Impact</h2>
                </motion.div>
                {/* Year selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {timeline.map((t, i) => (
                        <button key={i} onClick={() => setActive(i)}
                            className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${active === i ? 'bg-primary text-white border-primary shadow-lg scale-105' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>
                            {t.year}
                        </button>
                    ))}
                </div>
                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
                        className="bg-card rounded-2xl shadow-md p-8 md:p-12 text-center border-t-4 border-primary">
                        <div className="text-5xl font-bold text-primary font-playfair mb-3">{timeline[active].year}</div>
                        <h3 className="font-playfair text-2xl font-bold mb-4">{timeline[active].title}</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{timeline[active].desc}</p>
                        <div className="flex justify-center gap-2 mt-8">
                            {timeline.map((_, i) => (
                                <button key={i} onClick={() => setActive(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${active === i ? 'bg-primary w-6' : 'bg-border hover:bg-primary/40'}`} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function TeamCard({ member, index }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
            className="cursor-pointer" style={{ perspective: 1000 }} onClick={() => setFlipped(!flipped)}>
            <div style={{ transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', position: 'relative', height: '280px' }}>
                {/* Front */}
                <div style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }} className="rounded-2xl overflow-hidden bg-card shadow-md">
                    <img src={member.img} alt={member.name} className="w-full h-48 object-cover" />
                    <div className="p-3 text-center">
                        <h4 className="font-bold text-base">{member.name}</h4>
                        <p className="text-primary text-xs font-medium mt-0.5">{member.role}</p>
                        <p className="text-muted-foreground text-xs mt-1">Click to learn more</p>
                    </div>
                </div>
                {/* Back */}
                <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', inset: 0 }} className="rounded-2xl bg-primary text-white p-5 flex flex-col justify-between shadow-md">
                    <div>
                        <h4 className="font-bold text-base mb-2">{member.name}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                    <a href={`mailto:${member.email}`} onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-xs text-white/70 hover:text-white mt-3 transition-colors">
                        <Mail className="w-3.5 h-3.5" /> {member.email}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-28 bg-foreground text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-5">Our Story & Purpose</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                            Born from the passion of students who believed change starts with them, Student Union for Nation has grown into a nationwide movement.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-14 bg-primary">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                        {stats.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="text-4xl font-bold font-playfair"><CountUp target={s.value} suffix={s.suffix} /></div>
                                <div className="text-white/70 text-sm mt-1 font-medium">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80" alt="Our Story" className="rounded-2xl w-full h-96 object-cover shadow-xl" />
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Background</span>
                            <h2 className="font-playfair text-4xl font-bold mt-3 mb-5">Started by Students, Driven by Purpose</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">Founded over a decade ago by a group of college students who were frustrated by the lack of youth participation in nation-building, Student Union for Nation (SUN) set out to create a platform where young voices and hands could make real change.</p>
                            <p className="text-muted-foreground leading-relaxed mb-4">What started as a small study circle in a university campus quickly expanded to multiple states, with thousands of volunteers and hundreds of projects completed across education, health, environment, and women empowerment.</p>
                            <p className="text-muted-foreground leading-relaxed">Today, SUN stands as one of India's most dynamic youth-led NGOs, recognized for its grassroots approach and commitment to sustainable impact.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Timeline />

            {/* Values */}
            <section className="py-16 md:py-24 px-4 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-14">
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">What Guides Us</span>
                        <h2 className="font-playfair text-4xl font-bold mt-3">Our Vision, Mission & Values</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-card p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                                    <v.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-playfair text-lg font-bold mb-3">{v.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-14">
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">The People</span>
                        <h2 className="font-playfair text-4xl font-bold mt-3">Meet Our Team</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <TeamCard key={i} member={member} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}