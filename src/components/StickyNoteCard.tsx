import React from 'react';
import { Pin, X, Clock } from 'lucide-react';
import { Note, STICKY_COLORS, cn } from '../types';
import { motion } from 'motion/react';

interface StickyNoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
  onPin?: (id: string) => void;
  onToggleComplete?: (id: string) => void;
}

export const StickyNoteCard: React.FC<StickyNoteCardProps> = ({ 
  note, 
  onDelete, 
  onPin,
  onToggleComplete 
}) => {
  const colorClass = STICKY_COLORS[note.color as keyof typeof STICKY_COLORS] || STICKY_COLORS.yellow;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative p-6 rounded-[2.5rem] aspect-square flex flex-col justify-between group transition-shadow hover:shadow-2xl",
        colorClass
      )}
    >
      <div className="flex justify-between items-start">
        <span className="px-3 py-1 rounded-full bg-black/10 text-[10px] font-bold uppercase tracking-wider">
          {note.category}
        </span>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {onPin && (
            <button 
              onClick={() => onPin(note.id)}
              className="p-1.5 rounded-full hover:bg-black/5 transition-colors"
            >
              <Pin className={cn("w-4 h-4", note.isPinned && "fill-current")} />
            </button>
          )}
          {onDelete && (
            <button 
              onClick={() => onDelete(note.id)}
              className="p-1.5 rounded-full hover:bg-black/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <p className="text-lg font-medium leading-tight line-clamp-5 flex-1 mt-4">
        {note.content}
      </p>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-black/5">
        <div className="flex items-center gap-1.5 text-[10px] font-bold opacity-60">
          <Clock className="w-3 h-3" />
          {note.timestamp}
        </div>
        {onToggleComplete && (
          <button 
            onClick={() => onToggleComplete(note.id)}
            className={cn(
              "w-5 h-5 rounded-full border-2 border-black/20 flex items-center justify-center transition-colors",
              note.isCompleted && "bg-black/20 border-transparent"
            )}
          >
            {note.isCompleted && <div className="w-2 h-2 bg-black rounded-full" />}
          </button>
        )}
      </div>
    </motion.div>
  );
};
