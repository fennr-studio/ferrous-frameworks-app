import type { Testimonial } from '@/types';

const CDN = 'https://static.wixstatic.com/media';

export const testimonials: Testimonial[] = [
  {
    number: '01',
    quote:
      'Ferrous frameworks doesn\u2019t just build structures; they build legacies. Their attention to industrial detail on the solas refinery expansion was absolutely unparalleled.',
    author: 'J.P. MORGANSTERN',
    role: 'CEO, SOLAS CORP',
    image: `${CDN}/c837a6_0d409063a8bb40a097436e39d4ed7d16~mv2.jpg`,
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
    image: `${CDN}/c837a6_0fd6f9d4ce314bec95c4995998e3da9f~mv2.jpg`,
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
    image: `${CDN}/c837a6_dc7e9e0d3afe41458083d34c8ef0d3fb~mv2.jpg`,
    alt: 'Concrete bridge underside viewed from below in black and white',
    panel: 'yellow',
    side: 'left',
  },
];
