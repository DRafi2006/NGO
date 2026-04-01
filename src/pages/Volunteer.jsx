import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Users, Clock } from 'lucide-react';

const perks = [
    { icon: Heart, title: 'Make Real Impact', desc: 'Directly contribute to projects that change lives' },
    { icon: Users, title: 'Join a Community', desc: 'Connect with 5000+ like-minded volunteers' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Volunteer on your own schedule' },
];

export default function Volunteer() {
    const [form, setForm] = useState({ full_name: '', email: '', phone: '', age: '', address: '', skills: '', motivation: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.full_name.trim()) e.full_name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
        if (!form.phone.trim()) e.phone = 'Phone is required';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        setSubmitted(true);
    };

    const inputClass = (field) => `w-full border ${errors[field] ? 'border-destructive' : 'border-input'} bg-background rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all`;

    return (
        <div className="min-h-screen">
            <section className="relative py-28 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Join Us</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-4">Register as Volunteer</h1>
                        <p className="text-white/75 text-lg max-w-xl mx-auto">Fill in your details and become part of the nation-building movement.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                        {perks.map((perk, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-card p-6 rounded-2xl shadow-sm text-center">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <perk.icon className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="font-bold mb-2">{perk.title}</h3>
                                <p className="text-muted-foreground text-sm">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {submitted ? (
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card rounded-2xl shadow-md p-12 text-center max-w-xl mx-auto">
                            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                <CheckCircle className="w-10 h-10 text-secondary" />
                            </div>
                            <h2 className="font-playfair text-3xl font-bold mb-3">Thank You!</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">Your volunteer application has been submitted. We'll review your profile and get in touch within 3–5 business days.</p>
                            <button onClick={() => { setForm({ full_name: '', email: '', phone: '', age: '', address: '', skills: '', motivation: '' }); setSubmitted(false); }}
                                className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">Submit Another</button>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-md p-8 md:p-12 max-w-3xl mx-auto">
                            <h2 className="font-playfair text-3xl font-bold mb-2 text-center">Volunteer Application</h2>
                            <p className="text-muted-foreground text-center mb-8">All fields marked with * are required</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Full Name *</label>
                                        <input className={inputClass('full_name')} placeholder="Your full name" value={form.full_name} onChange={e => { setForm({ ...form, full_name: e.target.value }); setErrors({ ...errors, full_name: '' }); }} />
                                        {errors.full_name && <p className="text-destructive text-xs mt-1">{errors.full_name}</p>}
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Email Address *</label>
                                        <input className={inputClass('email')} type="email" placeholder="your@email.com" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }} />
                                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Phone Number *</label>
                                        <input className={inputClass('phone')} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }} />
                                        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Age</label>
                                        <input className={inputClass('age')} type="number" placeholder="Your age" min="15" max="35" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1.5 block">Address</label>
                                    <input className={inputClass('address')} placeholder="Your city, state" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1.5 block">Skills & Interests</label>
                                    <input className={inputClass('skills')} placeholder="e.g., Teaching, Photography, Medical, Event Management..." value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1.5 block">Why do you want to volunteer?</label>
                                    <textarea className={`${inputClass('motivation')} resize-none h-28`} placeholder="Tell us what drives you..." value={form.motivation} onChange={e => setForm({ ...form, motivation: e.target.value })} />
                                </div>
                                <button type="submit" disabled={loading} className="w-full bg-secondary text-white py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all disabled:opacity-70">
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}