import React from 'react';
import { Search, Bell, Plus, Palette, Clock } from 'lucide-react';
import { StickyNoteCard } from '../components/StickyNoteCard';
import { Note, STICKY_COLORS, cn } from '../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const data = [
  { name: 'M', value: 40 },
  { name: 'T', value: 65 },
  { name: 'W', value: 55 },
  { name: 'T', value: 85 },
  { name: 'F', value: 45 },
  { name: 'S', value: 70 },
  { name: 'S', value: 90 },
];

const SAMPLE_NOTES: Note[] = [
  {
    id: '1',
    content: 'Complete the UI design for the new dashboard components by Friday.',
    category: 'Work',
    color: 'yellow',
    timestamp: '2h ago',
    isPinned: true,
    isCompleted: false
  },
  {
    id: '2',
    content: 'Buy a new ergonomic mouse and mechanical keyboard for the home office.',
    category: 'Personal',
    color: 'pink',
    timestamp: '5h ago',
    isPinned: false,
    isCompleted: false
  },
  {
    id: '3',
    content: 'Start a YouTube channel about Flutter development and design systems.',
    category: 'Ideas',
    color: 'blue',
    timestamp: '1d ago',
    isPinned: false,
    isCompleted: false
  },
  {
    id: '4',
    content: 'Respond to client emails regarding the StickyFlow project timeline.',
    category: 'Urgent',
    color: 'cyan',
    timestamp: '2d ago',
    isPinned: false,
    isCompleted: false
  }
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-1">My Workspace</h2>
          <p className="text-gray-500">Capture your thoughts in vibrant flow</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              className="bg-card-dark border border-border-dark rounded-2xl py-3 pl-12 pr-6 w-64 focus:outline-none focus:border-sticky-blue transition-all"
            />
          </div>
          <button className="p-3 bg-card-dark border border-border-dark rounded-2xl hover:bg-white/5 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-sticky-pink rounded-full border-2 border-bg-dark" />
          </button>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Profile" 
            className="w-12 h-12 rounded-2xl object-cover border-2 border-border-dark"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Quick Input */}
      <div className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8 space-y-6">
        <textarea 
          placeholder="Write a quick todo or thought..."
          className="w-full bg-transparent text-xl font-medium resize-none focus:outline-none placeholder:text-gray-600 h-24"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {['Work', 'Personal', 'Ideas', 'Urgent'].map((cat, i) => (
              <button 
                key={cat}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  i === 0 ? "bg-sticky-yellow text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"
                )}
              >
                {i === 0 && "✓ "}
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <Palette className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <Clock className="w-5 h-5" />
            </button>
            <button className="bg-sticky-blue px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
              <Plus className="w-5 h-5" />
              Add Note
            </button>
          </div>
        </div>
      </div>

      {/* Recent Notes */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-bold">Recent Notes</h3>
          <button className="text-sm font-bold text-gray-500 hover:text-white transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_NOTES.map(note => (
            <StickyNoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>

      {/* Productivity Flow */}
      <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10 flex gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Productivity Flow</h3>
            <p className="text-gray-500 max-w-xs">You've completed 12 tasks this week. Keep the momentum going!</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-bold mb-1">85%</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Completion</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1 text-sticky-blue">+12%</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Velocity</p>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
                dy={10}
              />
              <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === 3 || index === 6 ? '#2196F3' : '#A5D5FF'} 
                    fillOpacity={index === 3 || index === 6 ? 1 : 0.6}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};
