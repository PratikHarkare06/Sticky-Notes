import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Note {
  id: string;
  content: string;
  category: string;
  color: string;
  timestamp: string;
  isPinned: boolean;
  isCompleted: boolean;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  taskCount: number;
  progress: number;
}

export const STICKY_COLORS = {
  yellow: 'bg-[#FFEB3B] text-black',
  blue: 'bg-[#2196F3] text-white',
  pink: 'bg-[#E91E63] text-white',
  green: 'bg-[#00E676] text-black',
  purple: 'bg-[#9C27B0] text-white',
  orange: 'bg-[#FF9800] text-black',
  cyan: 'bg-[#00E5FF] text-black',
};

export type View = 'dashboard' | 'completed' | 'archive' | 'categories' | 'settings';
