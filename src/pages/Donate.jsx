import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, Shield, Users, Leaf } from 'lucide-react';

const amounts = [200, 500, 1000, 2500, 5000];
const impacts = [
    { icon: Users, title: 'Education', desc: '₹500 sponsors books and stationery for a student for one month' },
    { icon: Heart, title: 'Healthcare', desc: '₹1000 covers a free medical check-up for 5 villagers' },
    { icon: Leaf, title: 'Environment', desc: '₹200 plants 5 trees in a deforested area' },
];

export default function Donate() {
    const [form, setForm] = useState({ donor_name: '', email: '', amount: 1000, custom_amount: '', message: '', anonymous: false });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const finalAmount = form.custom_amount ? Number(form.custom_amount) : form.amount;

    const validate = () => {
        const e = {};
        if (!form.donor_name.trim()) e.donor_name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!finalAmount || finalAmount < 10) e.amount = 'Minimum donation is ₹10';
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
            <section className="relative py-28 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <Heart className="w-10 h-10 mx-auto mb-4 fill-white" />
                        <h1 className="font-playfair text-5xl font-bold mb-4">Make a Donation</h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">Your contribution directly funds programs that change lives. Every rupee matters.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-14 bg-muted">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {impacts.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-card p-6 rounded-2xl shadow-sm text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><item.icon className="w-6 h-6 text-primary" /></div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card rounded-2xl shadow-md p-12 text-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle className="w-10 h-10 text-primary" /></div>
                            <h2 className="font-playfair text-3xl font-bold mb-3">Thank You!</h2>
                            <p className="text-muted-foreground mb-2">Your donation of <span className="font-bold text-primary">₹{finalAmount.toLocaleString()}</span> has been recorded.</p>
                            <p className="text-muted-foreground mb-6 text-sm">We'll send a confirmation to {form.email}. Together, we're building a better nation.</p>
                            <button onClick={() => { setForm({ donor_name: '', email: '', amount: 1000, custom_amount: '', message: '', anonymous: false }); setSubmitted(false); }} className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">Donate Again</button>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-md p-8 md:p-10">
                            <h2 className="font-playfair text-3xl font-bold mb-2 text-center">Complete Your Donation</h2>
                            <p className="text-muted-foreground text-center mb-8 text-sm">Secure & transparent — 100% goes to programs</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="text-sm font-semibold mb-3 block">Select Amount (₹)</label>
                                    <div className="grid grid-cols-5 gap-2 mb-3">
                                        {amounts.map(amt => (
                                            <button key={amt} type="button" onClick={() => setForm({ ...form, amount: amt, custom_amount: '' })}
                                                className={`py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${form.amount === amt && !form.custom_amount ? 'border-primary bg-primary text-white' : 'border-border hover:border-primary/40'}`}>
                                                ₹{amt >= 1000 ? `${amt / 1000}k` : amt}
                                            </button>
                                        ))}
                                    </div>
                                    <input className={inputClass('amount')} type="number" placeholder="Or enter custom amount (₹)" min="10"
                                        value={form.custom_amount} onChange={e => setForm({ ...form, custom_amount: e.target.value, amount: 0 })} />
                                    {errors.amount && <p className="text-destructive text-xs mt-1">{errors.amount}</p>}
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Full Name *</label>
                                        <input className={inputClass('donor_name')} placeholder="Your name" value={form.donor_name} onChange={e => { setForm({ ...form, donor_name: e.target.value }); setErrors({ ...errors, donor_name: '' }); }} />
                                        {errors.donor_name && <p className="text-destructive text-xs mt-1">{errors.donor_name}</p>}
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold mb-1.5 block">Email *</label>
                                        <input className={inputClass('email')} type="email" placeholder="your@email.com" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }} />
                                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-1.5 block">Message (Optional)</label>
                                    <textarea className={`${inputClass('message')} resize-none h-24`} placeholder="A message of support..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                </div>
                                <label className="flex items-center gap-2 cursor-pointer text-sm">
                                    <input type="checkbox" checked={form.anonymous} onChange={e => setForm({ ...form, anonymous: e.target.checked })} className="w-4 h-4 rounded" />
                                    Donate anonymously
                                </label>
                                <div className="bg-secondary/5 border border-secondary/20 rounded-xl px-5 py-3 flex items-center justify-between">
                                    <span className="text-sm font-medium">Total Donation</span>
                                    <span className="text-2xl font-bold text-secondary">₹{(finalAmount || 0).toLocaleString()}</span>
                                </div>
                                <button type="submit" disabled={loading} className="w-full bg-primary text-white py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                                    <Shield className="w-4 h-4" /> {loading ? 'Processing...' : `Donate ₹${(finalAmount || 0).toLocaleString()}`}
                                </button>
                                <p className="text-center text-xs text-muted-foreground">🔒 Your information is secure and protected</p>
                            </form>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}