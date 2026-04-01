import React from 'react';
import { Users, BookOpen, TreePine, Award } from 'lucide-react';
import StatCard from '../shared/StatCard';

const stats = [
    { icon: Users, value: '500+', label: 'Volunteers' },
    { icon: BookOpen, value: '50+', label: 'Projects' },
    { icon: TreePine, value: '10K+', label: 'Lives Impacted' },
    { icon: Award, value: '5+', label: 'Years of Service' },
];

export default function HighlightsSection() {
    return (
        <section className="py-16 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(stat => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}