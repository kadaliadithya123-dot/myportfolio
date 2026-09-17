import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const LiveClock: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-slate-300">
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-400 font-medium">Available</span>
      </div>

      <span className="text-white/20">|</span>

      <div className="flex items-center gap-1 text-slate-300">
        <MapPin className="w-3 h-3 text-neon-cyan" />
        <span>Bhimavaram, IN</span>
      </div>

      <span className="text-white/20 hidden sm:inline">|</span>

      <div className="hidden sm:flex items-center gap-1 text-slate-400">
        <Clock className="w-3 h-3 text-neon-purple" />
        <span className="text-slate-200">{timeStr || '10:00:00 AM'} IST</span>
      </div>
    </div>
  );
};
