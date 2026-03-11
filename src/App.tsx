import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { CompletedPage } from './pages/CompletedPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { SettingsPage } from './pages/SettingsPage';
import { View } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardPage />;
      case 'completed':
        return <CompletedPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'settings':
        return <SettingsPage />;
      case 'archive':
        return <div className="flex items-center justify-center h-[60vh] text-gray-500">Archive view coming soon...</div>;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 ml-64 p-12 overflow-y-auto custom-scrollbar h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Button */}
      {currentView !== 'settings' && (
        <button className="fixed bottom-8 right-8 bg-sticky-blue text-white px-8 py-4 rounded-3xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all z-50">
          <Plus className="w-6 h-6" />
          <span className="text-lg">Quick Stick</span>
        </button>
      )}
    </div>
  );
}
