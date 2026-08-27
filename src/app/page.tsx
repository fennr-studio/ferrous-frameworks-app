import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutSnippet } from '@/components/sections/AboutSnippet';
import { Testimonials } from '@/components/sections/Testimonials';

/**
 * Route "/". Every section is a Server Component, so this entire page ships
 * no JavaScript beyond the header's mobile menu.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CtaBand />
      <FeaturedProjects />
      <AboutSnippet />
      <Testimonials />
    </>
  );
}
