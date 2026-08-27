import type { Testimonial } from '@/types';
import civic from '@/assets/images/testimonial-civic.jpg';
import solas from '@/assets/images/testimonial-solas.jpg';
import zenith from '@/assets/images/testimonial-zenith.jpg';

export const testimonials: Testimonial[] = [
  {
    number: '01',
    quote:
      'Ferrous frameworks doesn\u2019t just build structures; they build legacies. Their attention to industrial detail on the solas refinery expansion was absolutely unparalleled.',
    author: 'J.P. MORGANSTERN',
    role: 'CEO, SOLAS CORP',
    image: solas,
    alt: 'Refinery distillation columns in black and white',
    panel: 'orange',
    side: 'left',
  },
  {
    number: '02',
    quote:
      'Precision and power. We needed a partner who understands the scale of industrial logistics. Anya and her team delivered uncompromising results.',
    author: 'ANYA PETROVA',
    role: 'DIRECTOR, ZENITH LOGISTICS',
    image: zenith,
    alt: 'Interior of a large steel-framed factory hall in black and white',
    panel: 'blue',
    side: 'right',
  },
  {
    number: '03',
    quote:
      'implementing large-scale civic infrastructure requires a partner who understands the weight of integrity. Ferrous frameworks is that partner.',
    author: 'DAVID CHEN',
    role: 'CIVIC PLANNER',
    image: civic,
    alt: 'Concrete bridge underside viewed from below in black and white',
    panel: 'yellow',
    side: 'left',
  },
];
