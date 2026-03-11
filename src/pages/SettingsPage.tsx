import React from 'react';
import { 
  Monitor, 
  Mail, 
  Zap, 
  Type as TypeIcon, 
  Moon, 
  Sun,
  ChevronDown
} from 'lucide-react';
import { cn } from '../types';

export const SettingsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-12 pb-12">
      <div className="col-span-2 space-y-8">
        <header>
          <h2 className="text-4xl font-bold tracking-tight mb-1">Settings</h2>
          <p className="text-gray-500">Manage your account preferences and customize your workspace experience.</p>
        </header>

        {/* Appearance Section */}
        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sticky-blue/20 flex items-center justify-center text-sticky-blue">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Appearance</h3>
              <p className="text-sm text-gray-500">Customize how StickyFlow looks on your screen</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Accent Color</p>
            <div className="flex gap-4">
              {['#2196F3', '#E91E63', '#FFEB3B', '#00E5FF', '#9C27B0', '#00E676'].map((color, i) => (
                <button 
                  key={color}
                  className={cn(
                    "w-10 h-10 rounded-full border-4 transition-all",
                    i === 0 ? "border-white scale-110" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Interface Theme</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-black border-2 border-sticky-blue rounded-[2rem] p-6 flex flex-col items-center gap-3 group">
                <Moon className="w-6 h-6 text-sticky-blue" />
                <span className="font-bold">Dark Mode</span>
              </button>
              <button className="bg-white border-2 border-transparent rounded-[2rem] p-6 flex flex-col items-center gap-3 group hover:border-gray-200 transition-all">
                <Sun className="w-6 h-6 text-gray-400 group-hover:text-black" />
                <span className="font-bold text-gray-400 group-hover:text-black">Light Mode</span>
              </button>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sticky-pink/20 flex items-center justify-center text-sticky-pink">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Notifications</h3>
              <p className="text-sm text-gray-500">Control when and how you want to be alerted</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Desktop Notifications', desc: 'Receive alerts directly on your computer desktop', icon: Monitor, enabled: true },
              { title: 'Email Digests', desc: 'Weekly summary of your completed tasks and upcoming deadlines', icon: Mail, enabled: false },
              { title: 'Smart Reminders', desc: 'AI-powered reminders based on your peak productivity hours', icon: Zap, enabled: true },
            ].map((item) => (
              <div key={item.title} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <button className={cn(
                  "w-12 h-6 rounded-full relative transition-colors",
                  item.enabled ? "bg-sticky-blue" : "bg-white/10"
                )}>
                  <div className={cn(
                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                    item.enabled ? "right-1" : "left-1"
                  )} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-10 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sticky-yellow/20 flex items-center justify-center text-sticky-yellow">
              <TypeIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Typography</h3>
              <p className="text-sm text-gray-500">Adjust the reading experience of your notes</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Font Size</p>
                <span className="bg-white/5 px-3 py-1 rounded-lg text-xs font-bold text-sticky-blue">16px (Default)</span>
              </div>
              <div className="relative h-1 bg-white/5 rounded-full">
                <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-5 h-5 bg-sticky-blue rounded-full border-4 border-card-dark shadow-lg shadow-blue-500/20" />
                <div className="flex justify-between px-1 mt-4">
                  {[12, 14, 16, 18, 20, 24].map(size => (
                    <div key={size} className="w-1 h-1 bg-white/10 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Font Family</p>
              <button className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center group hover:border-white/20 transition-all">
                <span className="text-lg font-medium">Urbanist</span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4 pt-6">
          <button className="px-8 py-4 font-bold text-gray-500 hover:text-white transition-colors">Discard Changes</button>
          <button className="bg-sticky-blue px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">Save Preferences</button>
        </div>
      </div>

      {/* Sidebar Stats */}
      <div className="space-y-8">
        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8 space-y-6">
          <h3 className="text-xl font-bold">Quick Stats</h3>
          <div className="bg-black/20 rounded-3xl p-6 border border-white/5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Productivity Score</p>
            <p className="text-4xl font-bold mb-4">84%</p>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-sticky-purple h-full w-[84%]" />
            </div>
          </div>
        </section>

        <section className="bg-card-dark border border-border-dark rounded-[2.5rem] p-8 space-y-6">
          <h3 className="text-xl font-bold">Upcoming Deadlines</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 h-12 bg-sticky-orange rounded-full" />
              <div>
                <h4 className="font-bold">App Redesign</h4>
                <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 h-12 bg-sticky-blue rounded-full" />
              <div>
                <h4 className="font-bold">Client Meeting</h4>
                <p className="text-xs text-gray-500">Oct 28, 2:30 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
