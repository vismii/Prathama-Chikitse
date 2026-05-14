import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmergencyAction, Language } from '@/src/types/emergency';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Volume2, VolumeX, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTextToSpeech } from '@/src/hooks/useTextToSpeech';

interface EmergencyViewProps {
  emergency: EmergencyAction;
  lang: Language;
  onBack: () => void;
}

export function EmergencyView({ emergency, lang, onBack }: EmergencyViewProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { speak, stop, isSpeaking } = useTextToSpeech();

  const step = emergency.steps[currentStep];
  const totalSteps = emergency.steps.length;

  const handleAudio = () => {
    if (isSpeaking) {
      stop();
    } else {
      const text = lang === 'en' 
        ? `${step.titleEn}. ${step.descriptionEn}` 
        : `${step.titleKn}. ${step.descriptionKn}`;
      speak(text, lang === 'en' ? 'en-US' : 'kn-IN');
    }
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft />
        </Button>
        <h2 className="font-bold text-center flex-1 truncate px-2">
          {lang === 'en' ? emergency.titleEn : emergency.titleKn}
        </h2>
        <Button 
          variant={isSpeaking ? "destructive" : "outline"} 
          size="icon" 
          onClick={handleAudio}
          className="rounded-full h-12 w-12"
        >
          {isSpeaking ? <VolumeX /> : <Volume2 />}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Step indicator */}
          <div className="flex gap-1 justify-center">
            {emergency.steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 flex-1 rounded-full transition-all ${idx === currentStep ? 'bg-red-500' : 'bg-gray-200'}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="text-center space-y-2">
                <Badge variant={emergency.severity === 'critical' ? 'destructive' : 'secondary'} className="uppercase">
                  {lang === 'en' ? `Step ${currentStep + 1} of ${totalSteps}` : `ಹಂತ ${currentStep + 1}/${totalSteps}`}
                </Badge>
                <h3 className="text-2xl font-black leading-tight border-b-2 border-red-100 pb-2">
                  {lang === 'en' ? step.titleEn : step.titleKn}
                </h3>
              </div>

              <Card className="shadow-lg border-2 border-red-50">
                <CardContent className="pt-6">
                  <p className="text-xl leading-relaxed font-medium text-gray-800">
                    {lang === 'en' ? step.descriptionEn : step.descriptionKn}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="grid grid-cols-2 gap-4">
            <Button 
              disabled={currentStep === 0} 
              onClick={() => { setCurrentStep(s => s - 1); stop(); }}
              variant="outline"
              className="h-16 text-lg"
            >
              <ArrowLeft className="mr-2" />
              {lang === 'en' ? "Back" : "ಹಿಂದೆ"}
            </Button>
            <Button 
              disabled={currentStep === totalSteps - 1} 
              onClick={() => { setCurrentStep(s => s + 1); stop(); }}
              className="h-16 text-lg bg-red-600 hover:bg-red-700"
            >
              {lang === 'en' ? "Next" : "ಮುಂದೆ"}
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <Separator />

          {/* Do's and Don'ts */}
          <div className="grid grid-cols-1 gap-4 pt-4 pb-20">
            <div className="space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                {lang === 'en' ? "Do's" : "ಅನುಸರಿಸಿ (Do's)"}
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? emergency.dosEn : emergency.dosKn).map((item, i) => (
                  <li key={i} className="bg-green-50 p-3 rounded-lg text-sm border-l-4 border-green-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                {lang === 'en' ? "Don'ts" : "ಬೇಡ (Don'ts)"}
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? emergency.dontsEn : emergency.dontsKn).map((item, i) => (
                  <li key={i} className="bg-red-50 p-3 rounded-lg text-sm border-l-4 border-red-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollArea>
      
      {/* Absolute "I'm Done" or Next action button if at end */}
      {currentStep === totalSteps - 1 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t safe-area-bottom">
          <Button className="w-full h-14 bg-green-600 text-lg font-bold" onClick={onBack}>
            {lang === 'en' ? "Instructions Complete" : "ಸೂಚನೆಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ"}
          </Button>
        </div>
      )}
    </div>
  );
}
