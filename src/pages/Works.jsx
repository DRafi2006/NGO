import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, CheckCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const projects = [
    { id: 1, title: 'Shiksha Prakaash', desc: 'Establishing learning centers in 20+ villages, providing free coaching for students preparing for competitive exams.', impact: 'Over 800 students enrolled, 200+ got scholarships', category: 'education', status: 'ongoing', beneficiaries: 1000, location: 'Rajasthan, UP', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80' },
    { id: 2, title: 'Swasth Bharat Camps', desc: 'Monthly free medical check-up camps with doctors, medicines, and health education for villages with no medical access.', impact: '50+ camps, 15,000 patients served', category: 'health', status: 'ongoing', beneficiaries: 15000, location: 'Bihar, MP', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { id: 3, title: 'Green Nation Drive', desc: 'Mass tree plantation, river clean-up, and plastic-free awareness campaigns across urban and rural India.', impact: '50,000 trees planted, 30 rivers cleaned', category: 'environment', status: 'ongoing', beneficiaries: 50000, location: 'Pan India', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80' },
    { id: 4, title: 'Women Empowerment Initiative', desc: 'Vocational training, legal aid workshops, and self-defense classes for women in rural and semi-urban areas.', impact: '5000 women trained, 300+ businesses started', category: 'empowerment', status: 'completed', beneficiaries: 5000, location: 'Karnataka, Tamil Nadu', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' },
    { id: 5, title: 'Digital India Youth', desc: 'Teaching digital literacy, coding basics, and internet safety to students in government schools.', impact: '10,000 students trained in digital skills', category: 'education', status: 'completed', beneficiaries: 10000, location: 'Gujarat, Maharashtra', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80' },
    { id: 6, title: 'Community Kitchen', desc: 'Daily nutritious meals distributed to daily wage workers, homeless individuals, and children in need.', impact: '500+ meals daily, 3 cities covered', category: 'community', status: 'ongoing', beneficiaries: 500, location: 'Delhi, Mumbai, Pune', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80' },
];

const categories = ['all', 'education', 'health', 'environment', 'empowerment', 'community'];
const categoryColors = { education: 'bg-blue-100 text-blue-700', health: 'bg-red-100 text-red-700', environment: 'bg-green-100 text-green-700', empowerment: 'bg-purple-100 text-purple-700', community: 'bg-amber-100 text-amber-700' };
const statusColors = { ongoing: 'bg-secondary/15 text-secondary', completed: 'bg-muted text-muted-foreground', upcoming: 'bg-primary/15 text-primary' };

export default function Works() {
    const [filter, setFilter] = useState('all');
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen">
            <section className="relative py-28 bg-foreground text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Work</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-4">Projects & Impact</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">Every project is a story of change. See the real-world impact we've created together.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}>
                                {cat === 'all' ? 'All Projects' : cat}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((project, i) => (
                            <motion.div key={project.id} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="relative overflow-hidden h-52">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${categoryColors[project.category]}`}>{project.category}</span>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusColors[project.status]}`}>{project.status}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-playfair text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                                    <div className="border-t border-border pt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-secondary">
                                            <CheckCircle className="w-4 h-4 shrink-0" />
                                            <span className="font-medium">{project.impact}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {project.beneficiaries.toLocaleString()} beneficiaries</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}