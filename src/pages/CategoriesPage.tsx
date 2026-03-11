import React from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../types';

const categories = [
  { name: 'Design Sprint', tasks: 12, progress: 65, color: '#2196F3' },
  { name: 'Marketing', tasks: 8, progress: 40, color: '#E91E63' },
  { name: 'Development', tasks: 24, progress: 85, color: '#FFEB3B' },
  { name: 'Personal', tasks: 5, progress: 20, color: '#00E676' },
];

const activityData = [
  { name: 'M', value: 30 },
  { name: 'T', value: 55 },
  { name: 'W', value: 45 },
  { name: 'T', value: 75 },
  { name: 'F', value: 60 },
  { name: 'S', value: 85 },
  { name: 'S', value: 40 },
];

const distributionData = [
  { name: 'Design', value: 400, color: '#A5D5FF' },
  { name: 'Dev', value: 300, color: '#2196F3' },
  { name: 'Mark', value: 200, color: '#E91E63' },
  { name: 'Other', value: 100, color: '#6B7280' },
];

export const CategoriesPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-1">Categories & Boards</h2>
          <p className="text-gray-500">Organize your thoughts into vibrant workspaces</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search boards..." 
              className="bg-card-dark border border-border-dark rounded-2xl py-3 pl-12 pr-6 w-64 focus:outline-none focus:border-sticky-blue transition-all"
            />
          </div>
          <button className="bg-sticky-blue px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
            <Plus className="w-5 h-5" />
            Create New
          </button>
        </div>
      </header>

      <section>
        <h3 className="text-2xl font-bold mb-6">Active Categories</h3>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: cat.color + '20' }} />
                <button className="p-1.5 rounded-full hover:bg-white/5">
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{cat.name}</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{cat.tasks} tasks</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-500">Progress</span>
                  <span style={{ color: cat.color }}>{cat.progress}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500" 
                    style={{ width: `${cat.progress}%`, backgroundColor: cat.color }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-3 gap-6">
        <section className="col-span-2 bg-card-dark border border-border-dark rounded-[2.5rem] p-10">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold">Activity Overview</h3>
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold focus:outline-none">
              <option>This Week</option>
            </select>
          </div>
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <Bar dataKey="value" fill="#A5D5FF" radius={[8, 8, 8, 8]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-8 w-full">Task Distribution</h3>
          <div className="relative w-full aspect-square max-w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total Tasks</p>
              <p className="text-3xl font-bold">142</p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-bold">Recent Boards</h3>
          <button className="text-sm font-bold text-gray-500 hover:text-white transition-colors">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'StickyFlow App UI', desc: 'Redesigning the mobile experience for v2.0', members: 8, time: '2m ago', color: '#2196F3' },
            { name: 'Q4 Strategy', desc: 'Planning for the final quarter goals and milestones', members: 14, time: '1h ago', color: '#E91E63' },
            { name: 'Bug Tracker', desc: 'Collection of user reported issues and feedback', members: 4, time: 'Yesterday', color: '#FFEB3B' },
          ].map((board) => (
            <div key={board.name} className="bg-card-dark border border-border-dark rounded-3xl p-6 flex items-center gap-6 group hover:border-white/20 transition-all cursor-pointer">
              <div className="w-2 h-12 rounded-full" style={{ backgroundColor: board.color }} />
              <div className="flex-1">
                <h4 className="text-lg font-bold group-hover:text-sticky-blue transition-colors">{board.name}</h4>
                <p className="text-sm text-gray-500">{board.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">{board.members} members</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Members</p>
              </div>
              <div className="text-right w-24">
                <p className="text-sm font-bold">{board.time}</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Last Edit</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <Plus className="w-5 h-5 rotate-45 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
