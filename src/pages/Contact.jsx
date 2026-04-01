import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Instagram, Facebook, CheckCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!form.message.trim()) e.message = 'Message is required';
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
            <section className="relative py-28 bg-foreground text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-4">Contact Us</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">We'd love to hear from you. Reach out for collaborations, queries, or just to say hello.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <motion.div {...fadeUp} className="md:col-span-2 space-y-6">
                            <div>
                                <h2 className="font-playfair text-2xl font-bold mb-5">Reach Us At</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                                        <div><p className="text-sm font-semibold">Email</p><p className="text-muted-foreground text-sm">contact@studentunionfornation.org</p></div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Globe className="w-5 h-5 text-primary" /></div>
                                        <div><p className="text-sm font-semibold">Website</p><a href="https://studentunionfornation.org/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">studentunionfornation.org</a></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-playfair text-lg font-bold mb-4">Follow Us</h3>
                                <div className="space-y-3">
                                    <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all">
                                        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"><Instagram className="w-4 h-4 text-white" /></div>
                                        <div><p className="text-sm font-semibold">Instagram</p><p className="text-xs text-muted-foreground">@student_union_for_nation</p></div>
                                    </a>
                                    <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-blue-400 hover:bg-blue-50 transition-all">
                                        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center"><Facebook className="w-4 h-4 text-white" /></div>
                                        <div><p className="text-sm font-semibold">Facebook</p><p className="text-xs text-muted-foreground">Student Union for Nation SUN</p></div>
                                    </a>
                                    <a href="https://studentunionfornation.org/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all">
                                        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center"><Globe className="w-4 h-4 text-white" /></div>
                                        <div><p className="text-sm font-semibold">Website</p><p className="text-xs text-muted-foreground">studentunionfornation.org</p></div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="md:col-span-3">
                            {submitted ? (
                                <div className="bg-card rounded-2xl shadow-md p-12 text-center">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-secondary" /></div>
                                    <h3 className="font-playfair text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                                    <button onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setSubmitted(false); }} className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">Send Another</button>
                                </div>
                            ) : (
                                <div className="bg-card rounded-2xl shadow-md p-8">
                                    <h2 className="font-playfair text-2xl font-bold mb-6">Send a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-sm font-semibold mb-1.5 block">Your Name *</label>
                                                <input className={inputClass('name')} placeholder="Full name" value={form.name} onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }} />
                                                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold mb-1.5 block">Email Address *</label>
                                                <input className={inputClass('email')} type="email" placeholder="your@email.com" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }} />
                                                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1.5 block">Subject</label>
                                            <input className={inputClass('subject')} placeholder="What is this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1.5 block">Your Message *</label>
                                            <textarea className={`${inputClass('message')} resize-none h-36`} placeholder="Write your message here..." value={form.message} onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }} />
                                            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                                        </div>
                                        <button type="submit" disabled={loading} className="w-full bg-primary text-white py-3.5 rounded-full font-semibold hover:opacity-90 transition-all disabled:opacity-70">
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510707573!2d76.76357458659!3d28.644287349478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0" loading="lazy" title="Location Map" />
            </div>
        </div>
    );
}