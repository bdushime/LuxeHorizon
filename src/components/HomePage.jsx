import Hero from './Hero.jsx'
import AboutSection from './AboutSection.jsx'
import AdventureSection from './AdventureSection.jsx'
import DestinationsSection from './DestinationsSection.jsx'
import VideoSection from './VideoSection.jsx'
import BlogSection from './BlogSection.jsx'
import QuoteBand from './QuoteBand.jsx'
import PartnersSection from './PartnersSection.jsx'
import CtaBand from './CtaBand.jsx'
import Seo from './Seo.jsx'
import { PAGE_SEO, generateOrganizationSchema } from '../config/seo.js'

export default function HomePage({ heroRevealed }) {
  return (
    <>
      <Seo
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        image={PAGE_SEO.home.ogImage}
        schema={generateOrganizationSchema()}
      />
      <Hero revealed={heroRevealed} />
      <DestinationsSection />
      <AdventureSection />
      <VideoSection />
      <BlogSection />
      <AboutSection />
      <QuoteBand />
      <PartnersSection />
      <CtaBand />
    </>
  )
}
