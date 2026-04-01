import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, CheckCircle, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';

const tabs = ['Dashboard', 'Volunteers', 'Messages', 'Donations'];

export default function Admin() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [volunteers, setVolunteers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        await new Promise(r => setTimeout(r, 800));
        setVolunteers([{id: 1, full_name: 'John Doe', email: 'john@example.com', phone: '1234567890', skills: 'Teaching', status: 'pending'}, {id: 2, full_name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', skills: 'Medical', status: 'approved'}]);
        setMessages([{id: 1, name: 'Alice', email: 'alice@web.com', subject: 'Inquiry', message: 'How to join?', read: false}]);
        setDonations([{id: 1, donor_name: 'Bob', email: 'bob@web.com', amount: 5000, anonymous: false, message: 'Keep up the good work!', created_date: new Date().toISOString()}]);
        setLoading(false);
    };

    useEffect(() => { fetchData(); }, []);

    const updateVolunteerStatus = async (id, status) => {
        setVolunteers(prev => prev.map(v => v.id === id ? { ...v, status } : v));
    };

    const markRead = async (id) => {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
    };

    const stats = [
        { label: 'Total Volunteers', value: volunteers.length, sub: `${volunteers.filter(v => v.status === 'pending').length} pending`, icon: Users, color: 'text-secondary bg-secondary/10' },
        { label: 'Messages', value: messages.length, sub: `${messages.filter(m => !m.read).length} unread`, icon: MessageSquare, color: 'text-blue-600 bg-blue-100' },
        { label: 'Donations', value: donations.length, sub: `₹${donations.reduce((s, d) => s + (d.amount || 0), 0).toLocaleString()} total`, icon: Heart, color: 'text-primary bg-primary/10' },
        { label: 'Approved', value: volunteers.filter(v => v.status === 'approved').length, sub: 'volunteers', icon: CheckCircle, color: 'text-green-600 bg-green-100' },
    ];

    const statusBadge = (status) => {
        const map = { pending: 'bg-amber-100 text-amber-700', approved: 'bg-green-100 text-green-700', rejected: 'bg-red-100 text-red-700' };
        return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${map[status] || map.pending}`}>{status || 'pending'}</span>;
    };

    return (
        <div className="min-h-screen bg-muted py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="font-playfair text-3xl font-bold">Admin Panel</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage volunteers, messages, and donations</p>
                    </div>
                    <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all disabled:opacity-60">
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
                    </button>
                </div>

                <div className="flex gap-2 mb-8 bg-card rounded-2xl p-1.5 shadow-sm w-fit">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex items-center justify-center h-40">
                        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : (
                    <>
                        {activeTab === 'Dashboard' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    {stats.map((s, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 shadow-sm">
                                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${s.color}`}><s.icon className="w-5 h-5" /></div>
                                            <div className="text-2xl font-bold">{s.value}</div>
                                            <div className="text-sm font-medium mt-0.5">{s.label}</div>
                                            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-card rounded-2xl p-6 shadow-sm">
                                        <h3 className="font-bold mb-4">Recent Volunteers</h3>
                                        <div className="space-y-3">
                                            {volunteers.slice(0, 5).map(v => (
                                                <div key={v.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                                                    <div><p className="font-medium text-sm">{v.full_name}</p><p className="text-xs text-muted-foreground">{v.email}</p></div>
                                                    {statusBadge(v.status)}
                                                </div>
                                            ))}
                                            {volunteers.length === 0 && <p className="text-muted-foreground text-sm">No volunteers yet</p>}
                                        </div>
                                    </div>
                                    <div className="bg-card rounded-2xl p-6 shadow-sm">
                                        <h3 className="font-bold mb-4">Recent Donations</h3>
                                        <div className="space-y-3">
                                            {donations.slice(0, 5).map(d => (
                                                <div key={d.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                                                    <div><p className="font-medium text-sm">{d.anonymous ? 'Anonymous' : d.donor_name}</p><p className="text-xs text-muted-foreground">{d.email}</p></div>
                                                    <span className="font-bold text-primary text-sm">₹{d.amount?.toLocaleString()}</span>
                                                </div>
                                            ))}
                                            {donations.length === 0 && <p className="text-muted-foreground text-sm">No donations yet</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Volunteers' && (
                            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
                                <div className="p-5 border-b border-border flex items-center justify-between">
                                    <h3 className="font-bold">All Volunteers ({volunteers.length})</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-muted text-xs text-muted-foreground uppercase tracking-wider">
                                            <tr>
                                                <th className="px-5 py-3 text-left">Name</th>
                                                <th className="px-5 py-3 text-left">Email</th>
                                                <th className="px-5 py-3 text-left">Phone</th>
                                                <th className="px-5 py-3 text-left">Skills</th>
                                                <th className="px-5 py-3 text-left">Status</th>
                                                <th className="px-5 py-3 text-left">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {volunteers.map(v => (
                                                <tr key={v.id} className="hover:bg-muted/50">
                                                    <td className="px-5 py-4 font-medium text-sm">{v.full_name}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground">{v.email}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground">{v.phone}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground max-w-32 truncate">{v.skills || '—'}</td>
                                                    <td className="px-5 py-4">{statusBadge(v.status)}</td>
                                                    <td className="px-5 py-4">
                                                        <div className="flex gap-2">
                                                            {v.status !== 'approved' && <button onClick={() => updateVolunteerStatus(v.id, 'approved')} className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-lg font-semibold hover:bg-green-200 transition-colors">Approve</button>}
                                                            {v.status !== 'rejected' && <button onClick={() => updateVolunteerStatus(v.id, 'rejected')} className="text-xs bg-red-100 text-red-700 px-2.5 py-1 rounded-lg font-semibold hover:bg-red-200 transition-colors">Reject</button>}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {volunteers.length === 0 && <tr><td colSpan={6} className="px-5 py-10 text-center text-muted-foreground">No volunteers yet</td></tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Messages' && (
                            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
                                <div className="p-5 border-b border-border"><h3 className="font-bold">Contact Messages ({messages.length})</h3></div>
                                <div className="divide-y divide-border">
                                    {messages.map(m => (
                                        <div key={m.id} className="p-5 hover:bg-muted/30 transition-colors">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="font-semibold text-sm">{m.name}</p>
                                                        {!m.read && <span className="w-2 h-2 bg-primary rounded-full" />}
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mb-1">{m.email} {m.subject ? `· ${m.subject}` : ''}</p>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{m.message}</p>
                                                </div>
                                                {!m.read && <button onClick={() => markRead(m.id)} className="text-xs border border-primary text-primary py-1.5 px-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors shrink-0">Mark Read</button>}
                                            </div>
                                        </div>
                                    ))}
                                    {messages.length === 0 && <div className="p-10 text-center text-muted-foreground">No messages yet</div>}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Donations' && (
                            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
                                <div className="p-5 border-b border-border flex items-center justify-between">
                                    <h3 className="font-bold">All Donations ({donations.length})</h3>
                                    <span className="font-bold text-primary">Total: ₹{donations.reduce((s, d) => s + (d.amount || 0), 0).toLocaleString()}</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-muted text-xs text-muted-foreground uppercase tracking-wider">
                                            <tr>
                                                <th className="px-5 py-3 text-left">Donor</th>
                                                <th className="px-5 py-3 text-left">Email</th>
                                                <th className="px-5 py-3 text-left">Amount</th>
                                                <th className="px-5 py-3 text-left">Message</th>
                                                <th className="px-5 py-3 text-left">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {donations.map(d => (
                                                <tr key={d.id} className="hover:bg-muted/50">
                                                    <td className="px-5 py-4 font-medium text-sm">{d.anonymous ? '🕵️ Anonymous' : d.donor_name}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground">{d.anonymous ? '—' : d.email}</td>
                                                    <td className="px-5 py-4 font-bold text-primary">₹{d.amount?.toLocaleString()}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground max-w-40 truncate">{d.message || '—'}</td>
                                                    <td className="px-5 py-4 text-sm text-muted-foreground">{d.created_date ? format(new Date(d.created_date), 'MMM d, yyyy') : '—'}</td>
                                                </tr>
                                            ))}
                                            {donations.length === 0 && <tr><td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">No donations yet</td></tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}