import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock } from "lucide-react";

const SIMULATED_HOSPITALS = [
  {
    nameEn: "City Emergency Center",
    nameKn: "ಸಿಟಿ ಎಮರ್ಜೆನ್ಸಿ ಸೆಂಟರ್",
    distance: "1.2 km",
    phone: "080-1234567",
    addressEn: "Main Road, Block 4",
    addressKn: "ಮುಖ್ಯ ರಸ್ತೆ, ಬ್ಲಾಕ್ 4",
  },
  {
    nameEn: "St. Martha's Hospital",
    nameKn: "ಸೇಂಟ್ ಮಾರ್ಥಾಸ್ ಆಸ್ಪತ್ರೆ",
    distance: "2.5 km",
    phone: "080-8888777",
    addressEn: "Near Central Park",
    addressKn: "ಸೆಂಟ್ರಲ್ ಪಾರ್ಕ್ ಹತ್ತಿರ",
  },
  {
    nameEn: "Rural Health Mission",
    nameKn: "ಗ್ರಾಮೀಣ ಆರೋಗ್ಯ ಮಿಷನ್",
    distance: "3.8 km",
    phone: "080-4444555",
    addressEn: "Old Town Square",
    addressKn: "ಹಳೆಯ ಪೇಟೆ ಸ್ಕ್ವೇರ್",
  }
];

interface HospitalFinderProps {
  lang: 'en' | 'kn';
}

export function HospitalFinder({ lang }: HospitalFinderProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <MapPin className="text-red-500" />
        {lang === 'en' ? 'Nearby Emergency Centers' : 'ಹತ್ತಿರದ ತುರ್ತು ಕೇಂದ್ರಗಳು'}
      </h3>
      <div className="grid gap-4">
        {SIMULATED_HOSPITALS.map((hospital, idx) => (
          <Card key={idx} className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  {lang === 'en' ? hospital.nameEn : hospital.nameKn}
                </CardTitle>
                <Badge variant="secondary">{hospital.distance}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {lang === 'en' ? hospital.addressEn : hospital.addressKn}
              </p>
              <a 
                href={`tel:${hospital.phone}`} 
                className="text-blue-600 flex items-center gap-2 font-medium hover:underline"
              >
                <Phone className="w-3 h-3" />
                {hospital.phone}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-xs text-muted-foreground italic mt-4">
        {lang === 'en' 
          ? "Note: Locations are simulated for offline use." 
          : "ಸೂಚನೆ: ಆಫ್‌ಲೈನ್ ಬಳಕೆಗಾಗಿ ಸ್ಥಳಗಳನ್ನು ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡಲಾಗಿದೆ."}
      </p>
    </div>
  );
}
