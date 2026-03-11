import React from 'react';
import { Search, Bell, MoreVertical, Clock } from 'lucide-react';
import { 
  XAxis, 
  ResponsiveContainer, 
  Tooltip,
  AreaChart,
  Area
} from 'recharts';
import { Note, STICKY_COLORS, cn } from '../types';
import { motion } from 'motion/react';

const activityData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 38 },
  { name: 'Thu', value: 62 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 78 },
  { name: 'Sun', value: 92 },
];

const COMPLETED_NOTES: Note[] = [
  { id: 'c1', content: '', category: 'Project Alpha', color: 'yellow', timestamp: 'Oct 12', isPinned: false, isCompleted: true },
  { id: 'c2', content: '', category: 'Personal', color: 'blue', timestamp: 'Oct 11', isPinned: false, isCompleted: true },
  { id: 'c3', content: '', category: 'Design', color: 'pink', timestamp: 'Oct 10', isPinned: false, isCompleted: true },
  { id: 'c4', content: '', category: 'Ideas', color: 'green', timestamp: 'Oct 09', isPinned: false, isCompleted: true },
  { id: 'c5', content: '', category: 'Work', color: 'purple', timestamp: 'Oct 08', isPinned: false, isCompleted: true },
  { id: 'c6', content: '', category: 'Finance', color: 'yellow', timestamp: 'Oct 07', isPinned: false, isCompleted: true },
  { id: 'c7', content: '', category: 'Meeting', color: 'pink', timestamp: 'Oct 06', isPinned: false, isCompleted: true },
  { id: 'c8', content: '', category: 'Learning', color: 'blue', timestamp: 'Oct 05', isPinned: false, isCompleted: true },
];

export const CompletedPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-1">Archive & Completed</h2>
          <p className="text-gray-500">Review your productivity and restored archived thoughts.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search history..." 
              className="bg-card-dark border border-border-dark rounded-2xl py-3 pl-12 pr-6 w-64 focus:outline-none focus:border-sticky-blue transition-all"
            />
          </div>
          <button className="p-3 bg-card-dark border border-border-dark rounded-2xl hover:bg-white/5 transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
          </button>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Profile" 
            className="w-12 h-12 rounded-2xl object-cover border-2 border-border-dark"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tasks Completed</p>
          <p className="text-5xl font-bold tracking-tighter">1,284</p>
        </div>
        <div className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Notes Archived</p>
          <div className="flex items-end gap-3">
            <p className="text-5xl font-bold tracking-tighter">452</p>
            <span className="bg-sticky-blue/20 text-sticky-blue px-2 py-1 rounded-lg text-xs font-bold mb-1.5">+5%</span>
          </div>
        </div>
        <div className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Productivity Score</p>
          <p className="text-5xl font-bold tracking-tighter">94</p>
        </div>
      </div>

      <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-2xl font-bold">Completion Activity</h3>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold focus:outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2196F3" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2196F3" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
                dy={15}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#151619', border: '1px solid #2A2B2F', borderRadius: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#2196F3" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                dot={{ fill: '#2196F3', strokeWidth: 2, r: 4, stroke: '#151619' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-bold">Recently Completed</h3>
          <button className="text-sm font-bold text-sticky-orange hover:opacity-80 transition-opacity">Clear All History</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {COMPLETED_NOTES.map(note => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-6 rounded-[2.5rem] aspect-square flex flex-col justify-between",
                STICKY_COLORS[note.color as keyof typeof STICKY_COLORS]
              )}
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/10 text-[10px] font-bold uppercase tracking-wider">
                  {note.category}
                </span>
                <button className="p-1.5 rounded-full hover:bg-black/5">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 opacity-60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
