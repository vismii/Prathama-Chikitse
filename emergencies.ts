import { EmergencyAction } from "@/src/types/emergency";

export const EMERGENCIES: EmergencyAction[] = [
  {
    id: "snake-bite",
    iconName: "Zap",
    titleEn: "Snake Bite",
    titleKn: "ಹಾವಿನ ಕಡಿತ (Snake Bite)",
    severity: "critical",
    steps: [
      {
        id: 1,
        titleEn: "Keep the Person Calm",
        titleKn: "ವ್ಯಕ್ತಿಯನ್ನು ಶಾಂತವಾಗಿರಿಸಿ",
        descriptionEn: "Reassure them. Panic increases heart rate, which causes the venom to spread faster.",
        descriptionKn: "ವ್ಯಕ್ತಿಯನ್ನು ಸಮಾಧಾನಪಡಿಸಿ. ಆತಂಕದಿಂದ ಹೃದಯ ಬಡಿತ ಹೆಚ್ಚಾಗಿ ವಿಷ ವೇಗವಾಗಿ ಹರಡಬಹುದು."
      },
      {
        id: 2,
        titleEn: "Immobilize the Area",
        titleKn: "ಕಚ್ಚಿದ ಭಾಗವನ್ನು ಅಲುಗಾಡಿಸಬೇಡಿ",
        descriptionEn: "Keep the bitten limb below heart level. Keep it as still as possible.",
        descriptionKn: "ಕಚ್ಚಿದ ಭಾಗವು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಕೆಳಗಿರಲಿ ಮತ್ತು ಅದನ್ನು ಅಲುಗಾಡದಂತೆ ನೋಡಿ."
      },
      {
        id: 3,
        titleEn: "Remove Tight Items",
        titleKn: "ಬಿಗಿಯಾದ ವಸ್ತುಗಳನ್ನು ತೆಗೆಯಿರಿ",
        descriptionEn: "Remove rings, watches, or tight clothing because the area may swell.",
        descriptionKn: "ಕವಗಿನಿಂದ ಊಟ ಬರುವ ಕಾರಣ ಉಂಗುರ, ವಾಚ್ ಅಥವಾ ಬಿಗಿಯಾದ ಬಟ್ಟೆಯನ್ನು ತೆಗೆಯಿರಿ."
      }
    ],
    dosEn: [
      "Keep the bite location below the heart level",
      "Get to the nearest hospital immediately",
      "Note the time of bite and physical description of the snake"
    ],
    dosKn: [
      "ಕಚ್ಚಿದ ಭಾಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಕೆಳಗಿರಿಸಿ",
      "ತಕ್ಷಣವೇ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಕರೆದುಕೊಂಡು ಹೋಗಿ",
      "ಕಚ್ಚಿದ ಸಮಯ ಮತ್ತು ಹಾವಿನ ಬಣ್ಣ/ಆಕಾರವನ್ನು ಗಮನಿಸಿ"
    ],
    dontsEn: [
      "Do not try to suck the venom out",
      "Do not apply ice or a tourniquet",
      "Do not give the person caffeine or alcohol"
    ],
    dontsKn: [
      "ಬಾಯಿಯಿಂದ ವಿಷವನ್ನು ಹೀರುವ ಪ್ರಯತ್ನ ಮಾಡಬೇಡಿ",
      "ಐಸ್ ಹಾಕಬೇಡಿ ಅಥವಾ ಗಟ್ಟಿಯಾಗಿ ಕಟ್ಟಬೇಡಿ (Tourniquet)",
      "ಕೆಫೀನ್ ಅಥವಾ ಮದ್ಯಪಾನ ನೀಡಬೇಡಿ"
    ]
  },
  {
    id: "heart-attack",
    iconName: "HeartPulse",
    titleEn: "Heart Attack",
    titleKn: "ಹೃದಯಾಘಾತ (Heart Attack)",
    severity: "critical",
    steps: [
      {
        id: 1,
        titleEn: "Call Emergency Services",
        titleKn: "ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಿ",
        descriptionEn: "Call 108 or your local emergency number immediately.",
        descriptionKn: "ತಕ್ಷಣವೇ 108 ಅಥವಾ ಸ್ಥಳೀಯ ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ."
      },
      {
        id: 2,
        titleEn: "Sit Them Down",
        titleKn: "ಕುಳಿತುಕೊಳ್ಳಿಸಿ",
        descriptionEn: "Make the person sit on the floor, leaning against a wall, with knees bent.",
        descriptionKn: "ವ್ಯಕ್ತಿಯನ್ನು ಗೋಡೆಗೆ ಒರಗಿಸಿ, ಮಂಡಿಗಳನ್ನು ಮಡಚಿ ನೆಲದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವಂತೆ ಮಾಡಿ."
      }
    ],
    dosEn: ["Chew and swallow an aspirin if not allergic", "Check if the person is breathing", "Loosen tight clothing"],
    dosKn: ["ಅಲರ್ಜಿ ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ಆಸ್ಪಿರಿನ್ ಮಾತ್ರೆ ನೀಡಬಹುದು", "ಉಸಿರಾಟವನ್ನು ಗಮನಿಸಿ", "ಬಿಗಿಯಾದ ಬಟ್ಟೆಯನ್ನು ಸಡಿಲಗೊಳಿಸಿ"],
    dontsEn: ["Do not let the person drive themselves", "Do not ignore symptoms", "Do not leave them alone"],
    dontsKn: ["ವ್ಯಕ್ತಿಯನ್ನು ತಾವೇ ವಾಹನ ಓಡಿಸಲು ಬಿಡಬೇಡಿ", "ಲಕ್ಷಣಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ", "ಅವರನ್ನು ಒಬ್ಬರೇ ಬಿಡಬೇಡಿ"]
  },
  {
      id: "choking",
      iconName: "Wind",
      titleEn: "Choking",
      titleKn: "ಉಸಿರುಗಟ್ಟುವುದು (Choking)",
      severity: "critical",
      steps: [
          {
              id: 1,
              titleEn: "Identify Choking",
              titleKn: "ಗುರುತಿಸಿ",
              descriptionEn: "If the person can't breathe, speak, or cough, act immediately.",
              descriptionKn: "ವ್ಯಕ್ತಿಯು ಉಸಿರಾಡಲು, ಮಾತನಾಡಲು ಅಥವಾ ಕೆಮ್ಮಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ ತಕ್ಷಣ ಕಾರ್ಯನಿರ್ವಹಿಸಿ."
          },
          {
              id: 2,
              titleEn: "Heimlich Maneuver",
              titleKn: "ಹೈಮ್ಲಿಚ್ ಪದ್ಧತಿ",
              descriptionEn: "Stand behind them, wrap arms around waist, and give quick upward thrusts.",
              descriptionKn: "ಅವರ ಹಿಂದೆ ನಿಂತು, ಸೊಂಟದ ಸುತ್ತ ಕೈಗಳನ್ನು ಹಾಕಿ, ಹೊಟ್ಟೆಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ವೇಗವಾಗಿ ಒತ್ತಡ ನೀಡಿ."
          }
      ],
      dosEn: ["Encourage coughing if they can cough", "Call for help immediately"],
      dosKn: ["ಕೆಮ್ಮಲು ಸಾಧ್ಯವಾದರೆ ಕೆಮ್ಮುವಂತೆ ಪ್ರೇರೇಪಿಸಿ", "ತಕ್ಷಣ ಸಹಾಯಕ್ಕೆ ಕರೆ ಮಾಡಿ"],
      dontsEn: ["Do not reach into their mouth blindly", "Do not give them water initially"],
      dontsKn: ["ಕುರುಡಾಗಿ ಬಾಯಿಯಲ್ಲಿ ಕೈ ಹಾಕಬೇಡಿ", "ಮೊದಲು ನೀರು ಕುಡಿಸಬೇಡಿ"]
  }
];
