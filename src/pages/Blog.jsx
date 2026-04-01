import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
const catColors = { news: 'bg-blue-100 text-blue-700', events: 'bg-green-100 text-green-700', stories: 'bg-purple-100 text-purple-700', updates: 'bg-amber-100 text-amber-700' };

const fallbackPosts = [
    { id: 1, title: '5000 Volunteers and Counting', excerpt: 'We recently crossed a major milestone as our volunteer community grew to over 5,000 dedicated individuals from across India.', cover_image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', category: 'news', created_date: '2024-03-15' },
    { id: 2, title: 'How Our Digital Literacy Program Changed Lives', excerpt: 'Students who once had no access to computers are now coding their way to a brighter future.', cover_image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', category: 'stories', created_date: '2024-02-28' },
    { id: 3, title: 'Youth Summit 2024: Key Highlights', excerpt: 'Over 1,000 students gathered for our annual Youth Summit, featuring workshops, panel discussions, and inspiring speeches.', cover_image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', category: 'events', created_date: '2024-01-20' },
    { id: 4, title: '50,000 Trees Planted', excerpt: 'In our largest-ever environmental initiative, volunteers from 15 states planted 50,000 trees over a single weekend.', cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', category: 'updates', created_date: '2024-01-05' },
];

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        new Promise(r => setTimeout(() => r(fallbackPosts), 500))
            .then(data => setPosts(data))
            .catch(() => setPosts(fallbackPosts))
            .finally(() => setLoading(false));
    }, []);

    const categories = ['all', 'news', 'events', 'stories', 'updates'];
    const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);

    if (selectedPost) {
        return (
            <div className="min-h-screen">
                <div className="h-80 md:h-96 overflow-hidden">
                    <img src={selectedPost.cover_image || 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80'} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <button onClick={() => setSelectedPost(null)} className="text-primary font-semibold text-sm flex items-center gap-1 mb-6 hover:gap-2 transition-all">← Back to Blog</button>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${catColors[selectedPost.category] || 'bg-muted text-muted-foreground'}`}>{selectedPost.category}</span>
                    <h1 className="font-playfair text-4xl font-bold mt-4 mb-4 leading-tight">{selectedPost.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedPost.created_date ? format(new Date(selectedPost.created_date), 'MMMM d, yyyy') : 'Recent'}</span>
                    </div>
                    <div className="text-foreground leading-relaxed text-base">{selectedPost.content || selectedPost.excerpt}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <section className="relative py-28 bg-foreground text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Blog</span>
                        <h1 className="font-playfair text-5xl font-bold mt-3 mb-4">Stories & Updates</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Read about our journeys, successes, and the communities we serve.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}>
                                {cat === 'all' ? 'All Posts' : cat}
                            </button>
                        ))}
                    </div>
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => <div key={i} className="bg-muted rounded-2xl h-72 animate-pulse" />)}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filtered.map((post, i) => (
                                <motion.div key={post.id} {...fadeUp} transition={{ delay: i * 0.1 }}
                                    className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                                    onClick={() => setSelectedPost(post)}>
                                    <div className="relative overflow-hidden h-52">
                                        <img src={post.cover_image || 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80'} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full capitalize ${catColors[post.category] || 'bg-muted text-muted-foreground'}`}>{post.category}</span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.created_date ? format(new Date(post.created_date), 'MMM d, yyyy') : 'Recent'}
                                        </div>
                                        <h3 className="font-playfair text-lg font-bold mb-2 leading-tight group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt || post.content}</p>
                                        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">Read More <ArrowRight className="w-4 h-4" /></span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}