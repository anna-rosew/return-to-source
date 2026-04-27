import { ClassInfo } from '@/types/index';
import MorningIcon from '@/public/Assets/Icons/MorningIcon';
import EveningChillIcon from '@/public/Assets/Icons/EveningChillIcon';
import KundaliniIcon from '@/public/Assets/Icons/ChakraIcon';
import CompassIcon from '@/public/Assets/Icons/CompassIcon';

export const classes: ClassInfo[] = [
  {
    icon: CompassIcon,
    classType: 'Rise, Flow, Grow',
    description:
      "A two-class Kundalini series themed **Align with your Inner Compass**.\n\n**Class 1 — Tuning In (Sat 23 May):** Clear mental clutter and reconnect with your intuitive centre through dynamic kriya, breathwork, and deep relaxation. Leave feeling anchored, present, and attuned to the quiet guidance within.\n\n**Class 2 — Moving with Trust (Sat 30 May):** Strengthen self-trust and aligned action through energising sequences, mantra, and focused meditation. You'll leave feeling empowered and connected to a sense of direction that comes from within.",
    permanentDescription: 'You can join this class anywhere in the world on Zoom.',
    dates: ['Sat, May 23', 'Sat, May 30'],
    times: ['8:00 - 9:00 am', '8:00 - 9:00 am'],
    dropInPrice: '£10',
    monthlyPrice: 'Both classes: £16',
    width: 100,
    height: 100,
    backgroundImage: '/Assets/Images/rise-flow-glow.webp',
    duration: '60 mins',
  },
  {
    icon: KundaliniIcon,
    classType: 'Core Strength & Balance',
    description:
      'Improve your posture, while cultivating physical strength & mental steadiness. Targeted core work builds a strong foundation & enhances coordination. By engaging the Manipura chakra you support confidence, vitality, and inner strength.',
    permanentDescription: 'You can join this class anywhere in the world on Zoom.',
    dates: ['Mon, May 25'],
    times: ['7:00 - 7:30 am'],
    dropInPrice: '£6',
    monthlyPrice: 'Single class: £6',
    width: 100,
    height: 100,
    backgroundImage: '/Assets/Images/kundalini-magic.webp',
    duration: '30 mins',
  },
  {
    icon: MorningIcon,
    classType: 'Vital Breath',
    description:
      'Your breath is a powerful ally. Learn how to manage stress, ease anxiety, balance your emotions, and quiet your mind. Pranayama is the practice of the Heart Chakra — in profound ways these practices bring connection and the healing that comes from wholeness.',
    permanentDescription: 'You can join this class anywhere in the world on Zoom.',
    dates: ['Wed, May 20', 'Wed, May 27'],
    times: ['7:00 - 7:30 am', '7:00 - 7:30 am'],
    dropInPrice: '£8',
    monthlyPrice: '2 Class Bundle: £12',
    width: 100,
    height: 100,
    backgroundImage: '/Assets/Images/morning-breath.webp',
    duration: '30 mins',
  },
  {
    icon: EveningChillIcon,
    classType: 'Evening Chill',
    description:
      'A peaceful class that invites you to slow down, soften, & reset your nervous system. Rose teaches relaxing floor-based movement & breath one week, and Rob guides you in supported Yin practices the other.',
    permanentDescription: 'You can join this class anywhere in the world on Zoom.',
    dates: ['Thu, May 21', 'Thu, May 28'],
    times: ['8:00 - 9:00 pm', '8:00 - 9:00 pm'],
    dropInPrice: '£10',
    monthlyPrice: '2 Class Bundle: £16',
    width: 100,
    height: 100,
    backgroundImage: '/Assets/Images/evening-chill.webp',
    duration: '60 mins',
  },
];
