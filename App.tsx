/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EMERGENCIES } from './data/emergencies';
import { EmergencyAction, Language } from './types/emergency';
import { EmergencyView } from './components/EmergencyView';
import { HospitalFinder } from './components/HospitalFinder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Search, 
  MapPin, 
  Info, 
  PhoneCall, 
  Zap, 
  Activity, 
  Heart, 
  Flame, 
  Wind,
  ShieldAlert,
  Menu
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  HeartPulse: Activity,
  Wind,
  Flame,
  Activity,
  Heart
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [search, setSearch] = useState('');
  const [selectedEmergency, setSelectedEmergency] = useState<EmergencyAction | null>(null);
  const [view, setView] = useState<'home' | 'hospitals'>('home');

  const filteredEmergencies = useMemo(() => {
    return EMERGENCIES.filter(e => {
      const term = search.toLowerCase();
      return e.titleEn.toLowerCase().includes(term) || e.titleKn.toLowerCase().includes(term);
    });
  }, [search]);

  if (selectedEmergency) {
    return (
      <EmergencyView 
        emergency={selectedEmergency} 
        lang={lang} 
        onBack={() => setSelectedEmergency(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-xl relative overflow-hidden">
      {/* Header */}
      <header className="bg-red-600 text-white p-6 pb-8 rounded-b-[40px] shadow-lg sticky top-0 z-10 transition-all">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
             <div className="bg-white p-2 rounded-xl">
               <ShieldAlert className="text-red-600 w-8 h-8" />
             </div>
             <div>
               <h1 className="text-2xl font-black tracking-tight leading-none">PRATHAM</h1>
               <p className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">
                 {lang === 'en' ? 'Chikitse' : 'ಚಿಕಿತ್ಸೆ'}
               </p>
             </div>
          </div>
          <Tabs value={lang} onValueChange={(v) => setLang(v as Language)} className="w-[120px]">
            <TabsList className="bg-red-700 text-white grid grid-cols-2 h-10">
              <TabsTrigger value="en" className="data-[state=active]:bg-white data-[state=active]:text-red-700 font-bold">EN</TabsTrigger>
              <TabsTrigger value="kn" className="data-[state=active]:bg-white data-[state=active]:text-red-700 font-bold">ಕನ್ನಡ</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            placeholder={lang === 'en' ? "Search Emergency..." : "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಹುಡುಕಿ..."}
            className="pl-12 bg-white/95 border-none h-14 rounded-2xl text-lg text-gray-900 placeholder:text-gray-400 shadow-inner"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea className="flex-1 px-4 py-6">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 pb-24"
            >
              <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-black text-gray-800">
                  {lang === 'en' ? 'Emergency Guide' : 'ತುರ್ತು ಮಾರ್ಗದರ್ಶಿ'}
                </h2>
                <span className="text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded-full border border-red-100 uppercase">
                  Offline Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {filteredEmergencies.map((emergency) => {
                  const Icon = ICON_MAP[emergency.iconName] || Activity;
                  return (
                    <motion.button
                      key={emergency.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedEmergency(emergency)}
                      className="group"
                    >
                      <Card className={`h-full border-2 transition-all hover:border-red-400 ${emergency.severity === 'critical' ? 'border-red-50' : 'border-gray-50'}`}>
                        <CardHeader className="p-4 flex flex-col items-center text-center">
                          <div className={`p-4 rounded-2xl mb-3 shadow-md transition-all group-hover:scale-110 ${
                            emergency.severity === 'critical' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                          }`}>
                            <Icon size={32} strokeWidth={2.5} />
                          </div>
                          <CardTitle className="text-lg font-bold leading-tight">
                            {lang === 'en' ? emergency.titleEn : emergency.titleKn}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </motion.button>
                  );
                })}
              </div>

              {filteredEmergencies.length === 0 && (
                <div className="text-center py-20 opacity-50">
                   <p>{lang === 'en' ? 'No emergency found' : 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳಿಲ್ಲ'}</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="hospitals"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="pb-24"
            >
              <HospitalFinder lang={lang} />
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollArea>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around p-4 safe-area-bottom pb-8 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-20">
        <Button 
          variant="ghost" 
          className={`flex flex-col h-16 w-24 gap-1 rounded-2xl transition-all ${view === 'home' ? 'text-red-600 bg-red-50 font-bold scale-110' : 'text-gray-400'}`}
          onClick={() => setView('home')}
        >
          <Zap />
          <span className="text-[10px] uppercase font-bold">{lang === 'en' ? 'Guide' : 'ಮಾರ್ಗದರ್ಶಿ'}</span>
        </Button>
        <Button 
          variant="ghost" 
          className={`flex flex-col h-16 w-24 gap-1 rounded-2xl transition-all ${view === 'hospitals' ? 'text-red-600 bg-red-50 font-bold scale-110' : 'text-gray-400'}`}
          onClick={() => setView('hospitals')}
        >
          <MapPin />
          <span className="text-[10px] uppercase font-bold">{lang === 'en' ? 'Hospitals' : 'ಆಸ್ಪತ್ರೆಗಳು'}</span>
        </Button>
        <Button 
          variant="secondary"
          className="flex flex-col h-16 w-24 gap-1 rounded-2xl bg-red-600 text-white shadow-lg hover:bg-red-700 active:scale-95"
          asChild
        >
          <a href="tel:108">
            <PhoneCall />
            <span className="text-[10px] uppercase font-bold">108</span>
          </a>
        </Button>
      </nav>
    </div>
  );
}
