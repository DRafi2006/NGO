import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const photos = [
    { id: 1, title: 'Annual Youth Summit 2024', category: 'events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
    { id: 2, title: 'Tree Plantation Drive', category: 'projects', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
    { id: 3, title: 'Health Camp in Rajasthan', category: 'projects', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
    { id: 4, title: 'Team Building Workshop', category: 'team', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80' },
    { id: 5, title: 'Village Education Camp', category: 'community', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80' },
    { id: 6, title: 'Independence Day Celebration', category: 'celebrations', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' },
    { id: 7, title: 'Women Empowerment Workshop', category: 'community', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
    { id: 8, title: 'Digital Literacy Drive', category: 'projects', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80' },
    { id: 9, title: 'Volunteer Orientation Day', category: 'events', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80' },
    { id: 10, title: 'Community Kitchen Launch', category: 'community', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80' },
    { id: 11, title: 'SUN Leadership Team', category: 'team', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
    { id: 12, title: 'Awards Ceremony 2023', category: 'celebrations', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
];

const categories = ['all', 'events', 'projects', 'team', 'community', 'celebrations'];
const catColors = { events: 'bg-blue-100 text-blue-700', projects: 'bg-green-100 text-green-700', team: 'bg-purple-100 text-purple-700', community: 'bg-amber-100 text-amber-700', celebrations: 'bg-pink-100 text-pink-700' };

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);
    const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);

    return (
        <div className="min-h-screen">
            <section className="relative py-28 bg-foreground text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Photo Gallery</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-4">Our Moments</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Capturing the spirit of service, community, and change.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}>
                                {cat === 'all' ? 'All Photos' : cat}
                            </button>
                        ))}
                    </div>
                    <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <AnimatePresence>
                            {filtered.map((photo) => (
                                <motion.div key={photo.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                                    className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square shadow-md" onClick={() => setSelected(photo)}>
                                    <img src={photo.img} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${catColors[photo.category]}`}>{photo.category}</span>
                                            <p className="text-white text-xs font-medium mt-1 line-clamp-1">{photo.title}</p>
                                        </div>
                                        <div className="absolute top-3 right-3"><ZoomIn className="w-5 h-5 text-white" /></div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selected && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setSelected(null)} className="absolute -top-12 right-0 text-white/70 hover:text-white">
                                <X className="w-8 h-8" />
                            </button>
                            <img src={selected.img} alt={selected.title} className="w-full max-h-[75vh] object-contain rounded-xl" />
                            <div className="bg-white/10 backdrop-blur-sm rounded-b-xl px-5 py-3">
                                <p className="text-white font-semibold">{selected.title}</p>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${catColors[selected.category]}`}>{selected.category}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}