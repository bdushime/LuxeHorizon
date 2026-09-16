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

export default function HomePage({ heroRevealed }) {
  return (
    <>
      <Seo
        title="Luxe Horizons Africa | Luxury Rwanda, Uganda & Tanzania Safari Tourism"
        description="Bespoke safari tourism across Rwanda, Uganda and Tanzania — private gorilla trekking, tailor-made itineraries, and a dedicated trip designer for every journey."
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
