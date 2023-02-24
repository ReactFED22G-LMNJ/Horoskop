import Aquarius from '../assets/aquarius.png';
import Aries from '../assets/aries.png';
import Cancer from '../assets/cancer.png';
import Capricorn from '../assets/capricorn.png';
import Gemini from '../assets/gemini.png';
import Leo from '../assets/leo.png';
import Libra from '../assets/libra.png';
import Picses from '../assets/pisces.png';
import Sagittarius from '../assets/sagittarius.png';
import Scorpio from '../assets/scorpio.png';
import Taurus from '../assets/taurus.png';
import Virgo from '../assets/virgo.png';

interface ZodiacSigns {
    name: string;
    image: string;
    color: string;
    date: string;
}

export const ZodiacSigns = [
    { 
      imageKey: Aries, 
      name: 'Aries',
      image: 'Aries', 
      color: '#FCDAD3', 
      date: 'March 21 - April 19' 
    },
    { 
      imageKey: Taurus, 
      name: 'Taurus', 
      image: 'Taurus', 
      color: '#DAF6FF', 
      date: 'April 20 - May 20' 
    },
    { imageKey: Gemini, 
      name: 'Gemini', 
      image: 'Gemini', 
      color: '#F8F4D2', 
      date: 'May 21 - June 20' 
    },
    { 
      imageKey: Cancer, 
      name: 'Cancer', 
      image: 'Cancer', 
      color: '#D7F0D3', 
      date: 'Jun 21 - July 22' 
    },
    { imageKey: Leo, 
      name: 'Leo', 
      image: 'Leo', 
      color: '#F6F3EF', 
      date: 'Jul 23 - Aug 22' 
    },
    { imageKey: Virgo, 
      name: 'Virgo', 
      image: 'Virgo', 
      color: '#F9F0FF', 
      date: 'Aug 23 - Sep 22' 
    },
    { imageKey: Libra, 
      name: 'Libra', 
      image: 'Libra', 
      color: '#FFEEEE', 
      date: 'Sep 23 - Oct 22' 
    },
    { imageKey: Scorpio , 
      name: 'Scorpio', 
      image: 'Scorpio', 
      color: '#DAEBFF', 
      date: 'Oct 23 - Nov 21' 
    },
    { imageKey: Sagittarius ,
      name: 'Sagittarius', 
      image: 'Sagittarius', 
      color: '#ECFAF5', 
      date: 'Nov 22 - Dec 21' 
    },
    { 
      imageKey: Capricorn, 
      name: 'Capricorn', 
      image: 'Capricorn', 
      color: '#FFE2EE', 
      date: 'Dec 22 - Jan 19' 
    },
    { 
      imageKey: Aquarius , 
      name: 'Aquarius', 
      image: 'Aquarius', 
      color: '#E7D2F8', 
      date: 'Jan 20 - Feb 18' 
    },
    { 
      imageKey: Picses, 
      name: 'Pisces', 
      image: 'Picses', 
      color: '#F2EAD4', 
      date: 'Feb 19 - March 20' 
    }
  ];

export default ZodiacSigns
