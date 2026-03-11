import React from 'react';
import { 
  LayoutDashboard, 
  StickyNote, 
  CheckCircle2, 
  Archive, 
  Settings, 
  Grid,
  LogOut
} from 'lucide-react';
import { cn } from '../types';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'categories', label: 'Categories', icon: Grid },
    { id: 'completed', label: 'Completed', icon: CheckCircle2 },
    { id: 'archive', label: 'Archive', icon: Archive },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-bg-dark border-r border-border-dark flex flex-col p-6 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-sticky-blue rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <StickyNote className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">StickyFlow</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group",
              currentView === item.id 
                ? "bg-sticky-blue text-white shadow-lg shadow-blue-500/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              currentView === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
            )} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-border-dark">
        <div className="bg-card-dark rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400 font-medium">Storage</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-2">
            <div className="bg-sticky-blue h-full w-[72%]" />
          </div>
          <p className="text-[10px] text-gray-500">72 of 100 notes used</p>
        </div>

        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full bg-sticky-pink flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">John Doe</p>
            <p className="text-xs text-gray-500">Pro Plan</p>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
